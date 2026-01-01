'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './AIChat.css';

const SUGGESTED_PROMPTS = [
    "Tell me about Joseph's AI and machine learning experience",
    "What projects has Joseph worked on?",
    "Show me his certifications",
    "What is Joseph's educational background?",
    "Tell me about the Compute for Africa initiative"
];

export default function AIChat({ inline = false }) {
    const [isOpen, setIsOpen] = useState(inline);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: inline
                ? "Hi! I'm Joseph's AI assistant. Ask me about his projects, skills, experience, or anything else!"
                : "Hi! I'm an AI assistant here to help you learn about Joseph's portfolio. Ask me anything!"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };


    useEffect(() => {
        if (isOpen && !inline) {
            scrollToBottom();
            // Focus input when chat opens
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        } else if (inline) {
            // For inline chat, focus on mount/load
            scrollToBottom();
        }
    }, [isOpen, inline]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleMessage = async (messageText) => {
        const userMessage = messageText || input.trim();
        if (!userMessage || isLoading) return;

        // Clear any previous errors
        setError(null);

        // Add user message to UI
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setInput('');
        setIsLoading(true);

        try {
            // Call the local API route
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to get response');
            }

            // Add response to UI
            setMessages(prev => [...prev, { role: 'assistant', content: data.answer }]);

        } catch (error) {
            console.error('Error:', error);
            setError(error.message || "Something went wrong. Please try again.");
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I apologize, but I encountered an error. Please try again later."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleMessage();
    };

    const handleSuggestedPrompt = (prompt) => {
        handleMessage(prompt);
    };

    const handleClearConversation = () => {
        setMessages([
            {
                role: 'assistant',
                content: "Conversation cleared! What would you like to know about Joseph?"
            }
        ]);
        setError(null);
    };

    return (
        <>
            {/* Chat Toggle Button - Only show if not inline */}
            {!inline && (
                <button
                    className="chat-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle AI Chat"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {isOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <>
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                <circle cx="12" cy="11" r="1" fill="currentColor" />
                                <circle cx="16" cy="11" r="1" fill="currentColor" />
                                <circle cx="8" cy="11" r="1" fill="currentColor" />
                            </>
                        )}
                    </svg>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className={`chat-window glass ${inline ? 'chat-inline' : ''}`}>
                    {!inline && (
                        <div className="chat-header">
                            <div>
                                <h3>AI Assistant</h3>
                                <p>Ask me about Joseph's portfolio</p>
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button
                                    onClick={handleClearConversation}
                                    className="chat-clear"
                                    title="Clear conversation"
                                >
                                    🔄
                                </button>
                                <button onClick={() => setIsOpen(false)} className="chat-close">
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="chat-error">
                            ⚠️ {error}
                        </div>
                    )}

                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`message message-${message.role}`}>
                                <div className="message-content">
                                    <ReactMarkdown>{message.content}</ReactMarkdown>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message message-assistant">
                                <div className="message-content">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggested Prompts */}
                    {messages.length === 1 && (
                        <div className="suggested-prompts">
                            <p className="prompts-label">Try asking:</p>
                            {SUGGESTED_PROMPTS.map((prompt, index) => (
                                <button
                                    key={index}
                                    className="prompt-button"
                                    onClick={() => handleSuggestedPrompt(prompt)}
                                    disabled={isLoading}
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    )}

                    <form className="chat-input-form" onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about Joseph's experience..."
                            className="chat-input"
                            disabled={isLoading}
                            autoFocus={inline}
                        />
                        <button
                            type="submit"
                            className="chat-send"
                            disabled={!input.trim() || isLoading}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
