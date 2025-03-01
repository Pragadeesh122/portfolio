"use client";
import React, {useState, useRef, useEffect} from "react";
import {generatePortfolioResponse} from "@/app/_lib/actions";
import ReactMarkdown from "react-markdown";
import {Loader2, Bot, XCircle, Send} from "lucide-react";

type Message = {
  type: "user" | "assistant";
  content: string;
};

// Predefined quick questions to help users get started
const quickQuestions = [
  "What are your core skills?",
  "Tell me about your experience",
  "Describe your most challenging project",
  "What technologies do you work with?",
  "How can I contact you?",
];

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message when chat is first opened
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          type: "assistant",
          content:
            "👋 Hi there! I'm Pragadeesh's portfolio assistant. Ask me anything about his skills, projects, or experience!",
        },
      ]);
    }

    // Focus the input when chat is opened
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, messages.length]);

  const simulateStreaming = async (fullResponse: string) => {
    const chunkSize = 5;
    let displayedResponse = "";

    for (let i = 0; i < fullResponse.length; i += chunkSize) {
      displayedResponse += fullResponse.slice(i, i + chunkSize);
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].content = displayedResponse;
        return newMessages;
      });
      await new Promise((resolve) => setTimeout(resolve, 10));
      scrollToBottom();
    }
  };

  const handleSubmit = async (e: React.FormEvent | string) => {
    if (typeof e !== "string") e.preventDefault();

    const currentQuery = typeof e === "string" ? e : query;

    if (currentQuery.trim() === "") {
      setError("Please enter a question before submitting.");
      return;
    }

    setError("");
    setIsLoading(true);
    setMessages((prev) => [...prev, {type: "user", content: currentQuery}]);
    setQuery("");
    setShowQuickQuestions(false);

    try {
      const fullResponse = await generatePortfolioResponse(currentQuery);
      setMessages((prev) => [...prev, {type: "assistant", content: ""}]);
      await simulateStreaming(fullResponse);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          content:
            "I'm sorry, I encountered an error while generating a response. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setQuery(question);
    handleSubmit(question);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className='fixed bottom-4 right-4 z-50 font-sans'>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-all duration-300 transform hover:scale-110'
          aria-label='Open chat assistant'>
          <Bot size={24} />
        </button>
      ) : (
        <div className='bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6 w-[90vw] sm:w-[28rem] md:w-[32rem] lg:w-[36rem] h-[80vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] flex flex-col border border-gray-700'>
          <div className='flex justify-between items-center mb-4 border-b border-gray-700 pb-3'>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-100 flex items-center'>
              <Bot className='mr-2' size={24} /> Portfolio AI Assistant
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className='text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-light'
              aria-label='Close chat assistant'>
              <XCircle />
            </button>
          </div>

          <div
            ref={chatContainerRef}
            className='flex-grow overflow-auto mb-4 space-y-4 rounded-md p-3 bg-gray-900'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}>
                <div
                  className={`max-w-[75%] p-2 sm:p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-200"
                  }`}>
                  <p className='text-sm sm:text-base'>
                    <ReactMarkdown className='whitespace-pre-wrap break-words [&>*]:my-1 [&>p]:mb-1 [&>ul]:ml-4 [&>ul]:mb-1 [&>ol]:ml-4 [&>ol]:mb-1 [&>li]:mb-0.5 [&>h1]:font-bold [&>h2]:font-bold [&>h3]:font-bold [&>h4]:font-bold [&>h5]:font-bold [&>h6]:font-bold'>
                      {message.content}
                    </ReactMarkdown>
                  </p>
                </div>
              </div>
            ))}

            {showQuickQuestions && messages.length === 1 && (
              <div className='mt-4'>
                <p className='text-sm text-gray-400 mb-2'>Try asking:</p>
                <div className='flex flex-wrap gap-2'>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className='text-xs md:text-sm bg-gray-800 border border-gray-600 rounded-full px-3 py-1 hover:bg-gray-700 transition'>
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {isLoading && (
            <div className='flex justify-start mb-4'>
              <div className='bg-gray-700 p-2 sm:p-3 rounded-lg text-gray-200'>
                <span className='flex items-center'>
                  <Loader2 className='animate-spin mr-2' size={16} />{" "}
                  Thinking...
                </span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className='mt-auto'>
            <div className='relative'>
              <input
                ref={inputRef}
                type='text'
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder='Ask me anything about Pragadeesh...'
                className='w-full p-2 sm:p-3 border border-gray-600 rounded-lg mb-3 text-sm sm:text-base pr-12 bg-gray-700 text-white'
                disabled={isLoading}
              />
              <button
                type='submit'
                disabled={isLoading || query.trim() === ""}
                className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed'
                aria-label='Send message'>
                <Send size={20} />
              </button>
            </div>
            {error && (
              <p className='text-red-500 text-xs sm:text-sm mb-2'>{error}</p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
