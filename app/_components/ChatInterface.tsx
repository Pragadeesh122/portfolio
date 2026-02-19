"use client";

import {useState, useEffect, useRef} from "react";
import {Message, ChatState} from "@/app/types/chat";
import {resetChat, sendMessage} from "@/app/actions/chat";
import {X, SendHorizonal, Loader2, Sparkles, MessageCircle} from "lucide-react";
import {cn} from "@/app/lib/utils";
import {v4 as uuidv4} from "uuid";
import Image from "next/image";

const STREAM_INTERVAL = 20;

const formatMessageContent = (content: string) => {
  const sections = content.split("\n\n");

  const cleanText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .trim();
  };

  return (
    <div className='space-y-3'>
      {sections.map((section, sectionIndex) => {
        const lines = section.split("\n");

        const isList = lines.every(
          (line) =>
            line.trim().startsWith("•") ||
            line.trim().startsWith("-") ||
            line.trim().startsWith("*") ||
            /^\d+\./.test(line.trim())
        );

        const isHeading = lines[0].trim().endsWith(":") && lines.length === 1;

        if (isHeading) {
          return (
            <h3
              key={sectionIndex}
              className='font-semibold text-gray-100 text-sm'>
              {cleanText(lines[0])}
            </h3>
          );
        }

        if (isList) {
          return (
            <ul key={sectionIndex} className='space-y-1.5 ml-1'>
              {lines.map((line, lineIndex) => {
                const content = cleanText(
                  line
                    .trim()
                    .replace(/^[•\-*]\s*/, "")
                    .replace(/^\d+\.\s*/, "")
                );

                return (
                  <li key={lineIndex} className='flex items-start gap-2 text-sm'>
                    <span className='text-emerald-500 mt-0.5'>•</span>
                    <span className='flex-1'>{content}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        return (
          <p
            key={sectionIndex}
            className='text-gray-300 text-sm leading-relaxed'>
            {cleanText(section)}
          </p>
        );
      })}
    </div>
  );
};

const MessageContent = ({content}: {content: string}) => {
  return formatMessageContent(content);
};

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

  useEffect(() => {
    if (state.isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [state.isOpen]);

  useEffect(() => {
    return () => {
      if (streamTimeoutRef.current) {
        clearTimeout(streamTimeoutRef.current);
      }
    };
  }, []);

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

  useEffect(() => {
    globalToggleChat = handleToggleChat;

    return () => {
      globalToggleChat = null;
    };
  }, []);

  const streamResponse = (fullResponse: string) => {
    const messageId = uuidv4();
    const streamingId = `streaming-${messageId}`;

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
        setState((s) => ({
          ...s,
          messages: [
            ...s.messages,
            {
              id: messageId,
              type: "assistant",
              content: fullResponse,
              timestamp: new Date(),
            },
          ],
          isLoading: false,
        }));
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
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setState((prev) => ({...prev, isLoading: false}));
    }
  };

  const BounceDots = ({size = "w-1.5 h-1.5"}: {size?: string}) => (
    <div className='inline-flex items-center h-4 space-x-1 ml-1'>
      <span
        className={`${size} rounded-full bg-emerald-500 opacity-60 animate-bounce`}
        style={{animationDelay: "0ms"}}
      />
      <span
        className={`${size} rounded-full bg-emerald-500 opacity-60 animate-bounce`}
        style={{animationDelay: "150ms"}}
      />
      <span
        className={`${size} rounded-full bg-emerald-500 opacity-60 animate-bounce`}
        style={{animationDelay: "300ms"}}
      />
    </div>
  );

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {state.isOpen && (
        <div className='mb-4 w-[380px] md:w-[480px] rounded-2xl border border-gray-800/50 bg-zinc-950/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300'>
          {/* Header */}
          <div className='flex items-center justify-between p-4 border-b border-gray-800/50'>
            <div className='flex items-center gap-3'>
              <div className='relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0'>
                <Image
                  src='/logo.png'
                  alt='Pragadeesh'
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h2 className='font-medium text-sm text-gray-200'>
                  Portfolio Assistant
                </h2>
                <p className='text-[10px] font-mono text-gray-500'>
                  AI-powered
                </p>
              </div>
            </div>

            <button
              onClick={handleToggleChat}
              className='h-7 w-7 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-300 hover:bg-gray-800/50 transition-colors duration-200'>
              <X className='h-4 w-4' />
            </button>
          </div>

          {/* Messages */}
          <div className='h-[450px] overflow-y-auto p-4 space-y-1'>
            {state.messages.length === 0 && !streamingMessage && (
              <div className='flex flex-col items-center justify-center h-full text-gray-500 space-y-4'>
                <div className='h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center'>
                  <Sparkles className='h-6 w-6 text-emerald-400' />
                </div>
                <div className='text-center space-y-2'>
                  <h3 className='text-sm font-medium text-gray-300'>
                    Ask me anything
                  </h3>
                  <p className='text-xs text-gray-500 max-w-[250px]'>
                    I can tell you about Pragadeesh&apos;s skills, projects, and
                    experience.
                  </p>
                </div>
              </div>
            )}

            {state.messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "mb-3 max-w-[85%] group",
                  message.type === "user" ? "ml-auto" : ""
                )}>
                <div
                  className={cn(
                    "rounded-2xl px-3.5 py-2.5 transition-all duration-200",
                    message.type === "user"
                      ? "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-md shadow-emerald-500/10"
                      : "bg-gray-800/60 border border-gray-800/50 text-gray-300"
                  )}>
                  {message.type === "user" ? (
                    <span className='text-sm'>{message.content}</span>
                  ) : (
                    <MessageContent content={message.content} />
                  )}
                </div>
                <div
                  className={cn(
                    "text-[10px] text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
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

            {/* Streaming message */}
            {streamingMessage && (
              <div className='mb-3 max-w-[85%] animate-in fade-in duration-200'>
                <div className='bg-gray-800/60 border border-gray-800/50 rounded-2xl px-3.5 py-2.5 text-gray-300'>
                  <MessageContent content={streamingMessage.content} />
                  <BounceDots size='w-1 h-1' />
                </div>
              </div>
            )}

            {/* Loading */}
            {state.isLoading && !streamingMessage && (
              <div className='mb-3 animate-in fade-in duration-300'>
                <div className='bg-gray-800/60 border border-gray-800/50 rounded-2xl px-3.5 py-2.5 inline-block'>
                  <BounceDots />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className='border-t border-gray-800/50 p-3'>
            <div className='flex gap-2 items-center'>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Ask me about Pragadeesh...'
                disabled={state.isLoading}
                className='flex-1 bg-gray-800/30 border border-gray-800/50 rounded-full py-2.5 px-4 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-200 disabled:opacity-50'
              />
              <button
                type='submit'
                disabled={state.isLoading || !input.trim()}
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200",
                  input.trim() && !state.isLoading
                    ? "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-md shadow-emerald-500/20 hover:scale-105"
                    : "bg-gray-800/50 text-gray-600"
                )}>
                <SendHorizonal className='h-4 w-4' />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Chat FAB */}
      <button
        onClick={handleToggleChat}
        className='h-12 w-12 rounded-full relative overflow-hidden bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center'>
        {state.isOpen ? (
          <X className='h-5 w-5' />
        ) : (
          <MessageCircle className='h-5 w-5' />
        )}
      </button>
    </div>
  );
}

export function toggleChatWindow() {
  if (globalToggleChat) {
    globalToggleChat();
  }
}
