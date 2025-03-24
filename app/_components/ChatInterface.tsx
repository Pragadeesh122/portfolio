"use client";

import {useState, useEffect, useRef} from "react";
import {Message, ChatState} from "@/app/types/chat";
import {resetChat, sendMessage} from "@/app/actions/chat";
import {Button} from "@/app/_components/ui/button";
import {Input} from "@/app/_components/ui/input";
import {X, SendHorizonal, Loader2, Sparkles} from "lucide-react";
import {cn} from "@/app/lib/utils";
import {v4 as uuidv4} from "uuid";
import Image from "next/image";

const STREAM_INTERVAL = 20;

// Helper function to format message content
const formatMessageContent = (content: string) => {
  // Split content into sections (separated by double newlines)
  const sections = content.split("\n\n");

  // Helper function to clean text from markdown-like syntax
  const cleanText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "$1") // Remove ** markers
      .replace(/\*(.*?)\*/g, "$1") // Remove * markers
      .trim();
  };

  return (
    <div className='space-y-4'>
      {sections.map((section, sectionIndex) => {
        const lines = section.split("\n");

        // Check if this section is a list
        const isList = lines.every(
          (line) =>
            line.trim().startsWith("•") ||
            line.trim().startsWith("-") ||
            line.trim().startsWith("*") ||
            /^\d+\./.test(line.trim())
        );

        // Check if this is a heading section
        const isHeading = lines[0].trim().endsWith(":") && lines.length === 1;

        if (isHeading) {
          return (
            <h3
              key={sectionIndex}
              className='font-semibold text-slate-900 dark:text-slate-100 text-base'>
              {cleanText(lines[0])}
            </h3>
          );
        }

        if (isList) {
          return (
            <ul key={sectionIndex} className='space-y-2 ml-2'>
              {lines.map((line, lineIndex) => {
                const content = cleanText(
                  line
                    .trim()
                    .replace(/^[•\-*]\s*/, "") // Remove bullet points
                    .replace(/^\d+\.\s*/, "") // Remove numbers
                );

                return (
                  <li key={lineIndex} className='flex items-start gap-2'>
                    <span className='text-blue-500 mt-1'>•</span>
                    <span className='flex-1'>{content}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Regular paragraph
        return (
          <p
            key={sectionIndex}
            className='text-slate-700 dark:text-slate-300 leading-relaxed'>
            {cleanText(section)}
          </p>
        );
      })}
    </div>
  );
};

// Message display component
const MessageContent = ({content}: {content: string}) => {
  return formatMessageContent(content);
};

// Create a variable to store the toggle chat function
let globalToggleChat: (() => void) | null = null;

export function ChatInterface() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isOpen: false,
    isLoading: false,
  });
  const [input, setInput] = useState("");
  const [streamingMessage, setStreamingMessage] = useState<Message | null>(
    null
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef<boolean>(false);
  const streamTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.messages, streamingMessage?.content]);

  // Focus input when chat opens
  useEffect(() => {
    if (state.isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [state.isOpen]);

  // Cleanup function for streaming
  useEffect(() => {
    return () => {
      if (streamTimeoutRef.current) {
        clearTimeout(streamTimeoutRef.current);
      }
    };
  }, []);

  // Initialize chat session when component mounts
  useEffect(() => {
    const initializeChat = async () => {
      if (!hasInitialized.current) {
        setState((prev: ChatState) => ({...prev, isLoading: true}));
        await resetChat();
        setState((prev: ChatState) => ({...prev, isLoading: false}));
        hasInitialized.current = true;
      }
    };

    initializeChat();
  }, []);

  const handleToggleChat = () => {
    setState((prev: ChatState) => ({...prev, isOpen: !prev.isOpen}));
  };

  // Store the toggle function globally
  useEffect(() => {
    globalToggleChat = handleToggleChat;

    return () => {
      globalToggleChat = null;
    };
  }, []);

  const streamResponse = (fullResponse: string) => {
    const messageId = uuidv4(); // Generate ID once and reuse
    const streamingId = `streaming-${messageId}`; // Create a unique ID for streaming message

    setStreamingMessage({
      id: streamingId,
      type: "assistant",
      content: "",
      timestamp: new Date(),
    });

    let currentIndex = 0;
    const streamNextChar = () => {
      if (currentIndex <= fullResponse.length) {
        const partialResponse = fullResponse.slice(0, currentIndex);
        setStreamingMessage((prev) =>
          prev ? {...prev, content: partialResponse} : null
        );
        currentIndex++;
        streamTimeoutRef.current = setTimeout(streamNextChar, STREAM_INTERVAL);
      } else {
        // When streaming is complete, move the streaming message to messages array
        setState((s) => ({
          ...s,
          messages: [
            ...s.messages,
            {
              id: messageId, // Use original messageId for final message
              type: "assistant",
              content: fullResponse,
              timestamp: new Date(),
            },
          ],
          isLoading: false,
        }));
        // Clear streaming message
        setStreamingMessage(null);
      }
    };

    streamNextChar();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || state.isLoading || streamingMessage) return;

    const userMessage: Message = {
      id: uuidv4(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));
    setInput("");

    try {
      const result = await sendMessage(input);

      if (result.success && result.response) {
        streamResponse(result.response);
      } else {
        setState((prev) => ({...prev, isLoading: false}));
        // You might want to show an error message here
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setState((prev) => ({...prev, isLoading: false}));
    }
  };

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {/* Add a keyframe animation for the zoom effect */}
      <style jsx global>{`
        @keyframes zoomInOut {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
        .zoom-animation {
          animation: zoomInOut 2s ease-in-out infinite;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(15deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>

      {state.isOpen && (
        <div className='mb-4 w-[350px] md:w-[550px] rounded-2xl border border-blue-200/30 dark:border-blue-500/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/10 overflow-hidden transform transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-5'>
          {/* Chat header with beautiful gradient */}
          <div className='relative overflow-hidden flex items-center justify-between p-4 border-b border-blue-100/20 dark:border-slate-700/50 bg-gradient-to-r from-blue-50 via-cyan-50/80 to-blue-50 dark:from-blue-950/40 dark:via-cyan-950/30 dark:to-blue-950/40'>
            <div className='flex items-center space-x-4 z-10'>
              <div className='relative h-9 w-9 rounded-full flex items-center justify-center overflow-hidden group'>
                {/* Portfolio Logo */}
                <Image
                  src='/logo.png'
                  alt='Pragadeesh'
                  width={32}
                  height={32}
                  className='transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              <div>
                <h2 className='font-semibold text-slate-800 dark:text-slate-200'>
                  Portfolio Assistant
                </h2>
              </div>
            </div>

            <Button
              variant='ghost'
              size='icon'
              onClick={handleToggleChat}
              className='h-8 w-8 rounded-full hover:bg-slate-200/70 dark:hover:bg-slate-800/70 transition-colors duration-200'>
              <X className='h-4 w-4' />
            </Button>
          </div>

          {/* Messages container */}
          <div className='h-[400px] overflow-y-auto p-4 bg-gradient-to-b from-white to-white/95 dark:from-slate-900 dark:to-slate-900/95'>
            {state.messages.length === 0 && !streamingMessage && (
              <div className='flex flex-col items-center justify-center h-full text-slate-500 dark:text-slate-400 space-y-4 transition-opacity duration-300'>
                <div className='h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center'>
                  {/* Empty state chat icon */}
                  <Image
                    src='/logo.png'
                    alt='Chat Assistant'
                    width={40}
                    height={40}
                    className='zoom-animation'
                  />
                </div>
                <div className='text-center space-y-2'>
                  <h3 className='text-lg font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent'>
                    Welcome to Pragadeesh&apos;s Assistant
                  </h3>
                  <div className='space-y-1'>
                    <p className='text-sm text-slate-600 dark:text-slate-300'>
                      Ask me about Pragadeesh&apos;s skills, projects, and
                      experience
                    </p>
                    <p className='text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1'>
                      <Sparkles className='h-3 w-3 text-blue-500' />
                      How can I help you today?
                    </p>
                  </div>
                </div>
              </div>
            )}

            {state.messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "mb-4 max-w-[85%] group transition-all duration-200 ease-in-out",
                  message.type === "user" ? "ml-auto" : ""
                )}>
                <div
                  className={cn(
                    "rounded-2xl p-3 transition-all duration-200",
                    message.type === "user"
                      ? "bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-md shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
                      : "bg-slate-100 dark:bg-slate-800/90 shadow-sm hover:-translate-y-0.5 hover:shadow-md border border-slate-200/70 dark:border-slate-700/50 text-slate-800 dark:text-slate-200"
                  )}>
                  {message.type === "user" ? (
                    message.content
                  ) : (
                    <MessageContent content={message.content} />
                  )}
                </div>
                <div
                  className={cn(
                    "text-[10px] text-slate-400 dark:text-slate-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                    message.type === "user"
                      ? "text-right mr-1"
                      : "text-left ml-1"
                  )}>
                  {new Date(message.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}

            {/* Display streaming message with typing indicator */}
            {streamingMessage && (
              <div className='mb-4 max-w-[85%] animate-in fade-in slide-in-from-left-3 duration-200'>
                <div className='bg-slate-100 dark:bg-slate-800/90 shadow-sm border border-slate-200/70 dark:border-slate-700/50 rounded-2xl p-3 text-slate-800 dark:text-slate-200'>
                  <MessageContent content={streamingMessage.content} />
                  <div className='inline-flex items-center h-4 space-x-1 ml-1'>
                    <span
                      className='w-1 h-1 rounded-full bg-blue-500 opacity-60 animate-bounce'
                      style={{animationDelay: "0ms"}}></span>
                    <span
                      className='w-1 h-1 rounded-full bg-blue-500 opacity-60 animate-bounce'
                      style={{animationDelay: "150ms"}}></span>
                    <span
                      className='w-1 h-1 rounded-full bg-blue-500 opacity-60 animate-bounce'
                      style={{animationDelay: "300ms"}}></span>
                  </div>
                </div>
              </div>
            )}

            {/* Loading indicator */}
            {state.isLoading && !streamingMessage && (
              <div className='flex items-center justify-start py-4 animate-in fade-in duration-300'>
                <div className='bg-slate-100 dark:bg-slate-800/90 shadow-sm border border-slate-200/70 dark:border-slate-700/50 rounded-2xl p-3 ml-4'>
                  <div className='inline-flex items-center h-4 space-x-1'>
                    <span
                      className='w-2 h-2 rounded-full bg-blue-500 opacity-60 animate-bounce'
                      style={{animationDelay: "0ms"}}></span>
                    <span
                      className='w-2 h-2 rounded-full bg-blue-500 opacity-60 animate-bounce'
                      style={{animationDelay: "150ms"}}></span>
                    <span
                      className='w-2 h-2 rounded-full bg-blue-500 opacity-60 animate-bounce'
                      style={{animationDelay: "300ms"}}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Message input form */}
          <form
            onSubmit={handleSubmit}
            className='border-t border-blue-100/20 dark:border-slate-700/50 p-3 bg-white dark:bg-slate-900'>
            <div className='flex gap-2 items-center'>
              <Input
                ref={inputRef}
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInput(e.target.value)
                }
                placeholder='Ask me about Pragadeesh...'
                disabled={state.isLoading}
                className='bg-slate-100/70 dark:bg-slate-800/50 border-slate-200/70 dark:border-slate-700/50 focus-visible:ring-blue-500/40 focus-visible:border-blue-500/40 rounded-full py-5 transition-all duration-200 pl-4 pr-4'
              />
              <Button
                type='submit'
                size='icon'
                disabled={state.isLoading || !input.trim()}
                className={cn(
                  "h-10 w-10 rounded-full transition-all duration-200 transform",
                  input.trim() && !state.isLoading
                    ? "bg-gradient-to-br from-blue-500 to-cyan-600 hover:shadow-md hover:shadow-blue-500/30 hover:scale-105 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500"
                )}>
                <SendHorizonal className='h-4 w-4' />
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Chat button with animations */}
      <div className='relative group'>
        {/* Simplified animation effects */}
        <Button
          onClick={handleToggleChat}
          size='icon'
          className='h-14 w-14 rounded-full relative overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 group-hover:-translate-y-1 border-2 border-white/10 dark:border-white/5'>
          {/* Shine effect */}
          <span className='absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full'></span>

          {/* Chat Icon Image */}
          <Image
            src='/logo.png'
            alt='Chat Assistant'
            width={36}
            height={36}
            className='zoom-animation'
          />
        </Button>
      </div>
    </div>
  );
}

// Export the toggle chat function
export function toggleChatWindow() {
  if (globalToggleChat) {
    globalToggleChat();
  }
}
