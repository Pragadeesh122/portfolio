"use client";

import React, {useState} from "react";
import {generatePortfolioResponse} from "@/app/_lib/actions";

interface Message {
  type: "user" | "assistant";
  content: string;
}

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") {
      setError("Please enter a question before submitting.");
      return;
    }
    setError("");
    setIsLoading(true);
    setMessages((prev) => [...prev, {type: "user", content: query}]);
    setQuery("");
    try {
      const result = await generatePortfolioResponse(query);
      setMessages((prev) => [...prev, {type: "assistant", content: result}]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          content: "An error occurred while generating the response.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (error) {
      setError("");
    }
  };

  return (
    <div className='fixed bottom-4 right-4 z-50 font-sans'>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-full shadow-lg w-14 h-14 flex items-center justify-center'>
          <span className='text-2xl'>🤖</span>
        </button>
      ) : (
        <div
          className='bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6 
                        w-[90vw] sm:w-[28rem] md:w-[32rem] lg:w-[36rem] 
                        h-[80vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] 
                        flex flex-col'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100'>
              Portfolio AI Assistant
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className='text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-light'>
              ×
            </button>
          </div>
          <p className='text-xs sm:text-sm mb-4 text-gray-600 dark:text-gray-300'>
            Ask me anything about Pragadeesh&apos;s skills, projects, or
            experience!
          </p>
          <div className='flex-grow overflow-auto mb-4 space-y-4'>
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
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }`}>
                  <p className='text-sm sm:text-base'>{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className='flex justify-start'>
                <div className='bg-gray-100 dark:bg-gray-700 p-2 sm:p-3 rounded-lg text-gray-800 dark:text-gray-200'>
                  <span className='animate-pulse text-sm sm:text-base'>
                    ...
                  </span>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className='mt-auto'>
            <input
              type='text'
              value={query}
              onChange={handleInputChange}
              placeholder="E.g., What are Pragadeesh's key skills?"
              className='w-full p-2 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg mb-3 text-sm sm:text-base'
              disabled={isLoading}
            />
            {error && (
              <p className='text-red-500 text-xs sm:text-sm mb-2'>{error}</p>
            )}
            <button
              type='submit'
              disabled={isLoading}
              className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 rounded-lg w-full text-sm sm:text-base transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed'>
              {isLoading ? "Thinking..." : "Ask"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}