
import React, { useState } from 'react';
import { Bot, Send, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  role: 'system' | 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface JourneyTemplateChatProps {
  onCreateTemplate?: (templateType: string, description: string) => void;
}

const JourneyTemplateChat: React.FC<JourneyTemplateChatProps> = ({ onCreateTemplate }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! I can help you create custom journey templates. What type of journey would you like to build today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const addMessage = (content: string, role: 'system' | 'user' | 'assistant') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    addMessage(input, 'user');
    
    // Clear input and set loading state
    setInput('');
    setIsLoading(true);
    
    // Process the message for keywords
    const userInput = input.toLowerCase();
    
    // Simulate AI response
    setTimeout(() => {
      setIsLoading(false);
      
      // Generate response based on keywords
      if (userInput.includes('fraud') || userInput.includes('detection')) {
        addMessage(
          'I can help you create a fraud detection journey. This would include components for device fingerprinting, transaction analysis, and risk assessment. Would you like me to generate this template?',
          'assistant'
        );
        if (onCreateTemplate) {
          onCreateTemplate('fraud_detection', 'A fraud detection journey with device fingerprinting and transaction analysis');
        }
      } 
      else if (userInput.includes('kyc') || userInput.includes('know your customer') || userInput.includes('verification')) {
        addMessage(
          'I can create a KYC verification journey for you. This would include ID verification, address validation, and identity risk assessment. Would you like me to generate this template?',
          'assistant'
        );
        if (onCreateTemplate) {
          onCreateTemplate('kyc', 'A KYC verification journey with ID verification and validation');
        }
      }
      else if (userInput.includes('bank') || userInput.includes('statement') || userInput.includes('financial')) {
        addMessage(
          'I can help you build a bank statement analysis journey. This would include components for income verification, cash flow analysis, and fraud detection. Would you like me to create this template?',
          'assistant'
        );
        if (onCreateTemplate) {
          onCreateTemplate('bank_statement', 'A bank statement analysis journey with income verification and cash flow analysis');
        }
      }
      else if (userInput.includes('underwriting') || userInput.includes('loan')) {
        addMessage(
          'I can help you create a loan underwriting journey. This would include credit analysis, income verification, and risk assessment. Would you like me to generate this template?',
          'assistant'
        );
        if (onCreateTemplate) {
          onCreateTemplate('underwriting', 'A loan underwriting journey with credit analysis and risk assessment');
        }
      } 
      else if (userInput.includes('template') || userInput.includes('create') || userInput.includes('build')) {
        addMessage(
          'I can help you create various journey templates. Would you like a template for fraud detection, KYC verification, bank statement analysis, or loan underwriting?',
          'assistant'
        );
      }
      else if (userInput.includes('yes') || userInput.includes('generate') || userInput.includes('please')) {
        addMessage(
          'Great! I\'ll redirect you to the journey builder with a template to get you started. You can customize it further there.',
          'assistant'
        );
        // Redirect to the workflow tab
        setTimeout(() => {
          navigate('/ai-journeys?tab=workflow');
        }, 1500);
      }
      else {
        addMessage(
          'I can help you create journey templates for fraud detection, KYC verification, bank statement analysis, and loan underwriting. What type of journey are you interested in?',
          'assistant'
        );
      }
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <Bot className="h-5 w-5 text-monnai-blue" />
          Journey Template Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[240px] pr-4 mb-3">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "rounded-lg px-3 py-2 max-w-[80%]",
                    message.role === 'user'
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg px-3 py-2">
                  <div className="flex items-center gap-1">
                    <span className="animate-pulse">●</span>
                    <span className="animate-pulse animation-delay-200">●</span>
                    <span className="animate-pulse animation-delay-400">●</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            placeholder="Tell me what kind of journey you want to build..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneyTemplateChat;
