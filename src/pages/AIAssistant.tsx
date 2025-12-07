import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m VSMK SOL, your AI security assistant. How can I help you today? I can answer questions about cybersecurity, our products, services, or help you with any security-related queries.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return 'Our security products range from ₹1,499 to ₹5,999 per year. The AI Security Suite at ₹4,999/year is our most popular choice for comprehensive protection. Would you like me to provide more details about any specific product?';
    }
    
    if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return 'We offer a comprehensive range of services including:\n\n• AI Development & Integration\n• Cybersecurity & Ethical Hacking\n• Penetration Testing\n• Cloud Security\n• Vulnerability Scanning\n• Phishing Detection\n\nWould you like to know more about any specific service?';
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
      return 'You can reach our team through:\n\n📧 Email: info@vsmksoltech.com\n📞 Phone: +91 98765 43210\n\nOur business hours are Mon-Fri, 9:00 AM - 6:00 PM IST. For enterprise clients, we offer 24/7 priority support.';
    }
    
    if (lowerMessage.includes('security') || lowerMessage.includes('protect')) {
      return 'Security is our core expertise! Our approach includes:\n\n1. **Prevent** - Proactive threat prevention\n2. **Detect** - Real-time monitoring\n3. **Respond** - Rapid incident response\n4. **Recover** - Business continuity support\n\nOur motto: "Nothing Cannot Be Prevented And Anything Cannot Be Hacked." How can I help secure your business?';
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'Hello! Welcome to VSMK SOLTECH. I\'m here to assist you with any questions about our cybersecurity and AI solutions. What would you like to know?';
    }
    
    return 'Thank you for your question. While I\'m a demo AI assistant, our full-featured VSMK SOL AI will be able to provide detailed answers to all your security queries. In the meantime, feel free to explore our services page or contact our team for specific inquiries.';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateResponse(input),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const suggestedQuestions = [
    'What services do you offer?',
    'Tell me about your security products',
    'How can I contact support?',
    'What makes your security unique?',
  ];

  return (
    <Layout>
      <section className="section-padding min-h-[calc(100vh-5rem)]">
        <div className="container-custom mx-auto h-full">
          <div className="max-w-4xl mx-auto h-full flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Bot className="h-8 w-8 text-accent" />
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-foreground">VSMK SOL</h1>
                  <p className="text-sm text-muted-foreground">AI Security Assistant</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Ask me anything about cybersecurity, our products, or services.
              </p>
            </motion.div>

            {/* Chat Container */}
            <div className="flex-1 bg-card rounded-2xl border border-border/50 flex flex-col overflow-hidden">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      message.role === 'assistant' ? 'bg-accent/10' : 'bg-secondary'
                    }`}>
                      {message.role === 'assistant' ? (
                        <Bot className="h-5 w-5 text-accent" />
                      ) : (
                        <User className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className={`max-w-[80%] ${message.role === 'user' ? 'text-right' : ''}`}>
                      <div className={`rounded-2xl px-4 py-3 ${
                        message.role === 'assistant' 
                          ? 'bg-secondary text-foreground' 
                          : 'bg-accent text-accent-foreground'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Bot className="h-5 w-5 text-accent" />
                    </div>
                    <div className="bg-secondary rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {messages.length <= 2 && (
                <div className="px-6 pb-4">
                  <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map(question => (
                      <button
                        key={question}
                        onClick={() => setInput(question)}
                        className="text-xs bg-secondary hover:bg-accent/10 text-foreground px-3 py-1.5 rounded-full transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-border">
                <div className="flex gap-3">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 h-12"
                    disabled={isTyping}
                  />
                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg"
                    disabled={!input.trim() || isTyping}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="text-center mt-4 flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              <p className="text-sm text-muted-foreground">
                Powered by <span className="font-semibold text-foreground">VSMK SOLTECH LTD</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIAssistant;
