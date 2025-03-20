
import React, { useState, useEffect } from 'react';
import { X, MessageSquareText, Zap, Bot, Database, Workflow, BrainCircuit, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { useLocation } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface JourneyAgentAssistantProps {
  type: 'journey' | 'agent';
  onCreateTemplate?: (templateType: string, description: string) => void;
}

const JourneyAgentAssistant: React.FC<JourneyAgentAssistantProps> = ({ 
  type, 
  onCreateTemplate 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set initial welcome message based on type
    const initialMessage = type === 'journey' 
      ? "Hi! I'm your Journey Assistant. I can help you create and configure AI journeys. What kind of journey would you like to build today?"
      : "Hi! I'm your Agent Assistant. I can help you create and configure AI agents. What kind of agent would you like to build today?";
    
    setMessages([{
      id: '1',
      content: initialMessage,
      role: 'assistant',
      timestamp: new Date(),
    }]);
  }, [type]);

  const getIcon = () => {
    return type === 'journey' 
      ? <Workflow className="h-5 w-5 mr-2" />
      : <Bot className="h-5 w-5 mr-2" />;
  };

  const getTitle = () => {
    return type === 'journey' 
      ? 'Journey Assistant'
      : 'Agent Assistant';
  };

  const getColor = () => {
    return type === 'journey' 
      ? 'bg-monnai-blue/10'
      : 'bg-monnai-pink/10';
  };

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addAssistantMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'assistant',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!currentInput.trim()) return;
    
    addUserMessage(currentInput);
    setCurrentInput('');
    setIsThinking(true);
    
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      const userQuery = currentInput.toLowerCase();
      
      // Context-aware responses
      if (type === 'journey') {
        if (userQuery.includes('create') || userQuery.includes('new') || userQuery.includes('build')) {
          if (userQuery.includes('fraud') || userQuery.includes('detection')) {
            response = "I can help you create a fraud detection journey. Would you like me to generate a template with standard fraud detection components like device fingerprinting, transaction analysis, and risk assessment?";
            if (onCreateTemplate) {
              onCreateTemplate('fraud_detection', 'Fraud detection journey with multiple data sources and risk assessment model');
            }
          } else if (userQuery.includes('kyc') || userQuery.includes('know your customer') || userQuery.includes('verification')) {
            response = "I can set up a KYC verification journey for you. This typically includes ID verification, address validation, and identity risk assessment. Would you like me to create this template?";
            if (onCreateTemplate) {
              onCreateTemplate('kyc', 'KYC verification journey with document verification and risk assessment');
            }
          } else if (userQuery.includes('bank') || userQuery.includes('statement')) {
            response = "I can help you create a bank statement analysis journey. This will include components for income verification, cash flow analysis, and fraud detection. Should I generate this template for you?";
            if (onCreateTemplate) {
              onCreateTemplate('bank_statement', 'Bank statement analysis journey with financial data verification');
            }
          } else {
            response = "I can help you create a journey. Would you like a template for fraud detection, KYC verification, or bank statement analysis? Or would you prefer to start with a blank canvas?";
          }
        } else if (userQuery.includes('component') || userQuery.includes('node')) {
          response = "You can add components to your journey by dragging them from the toolbar. I recommend starting with data sources, then adding models for analysis, and finally adding decision rules or agents to take action on the results.";
        } else {
          response = "I can help you create and configure journeys for various use cases like fraud detection, KYC, or bank statement analysis. Would you like me to suggest a specific journey template?";
        }
      } else if (type === 'agent') {
        if (userQuery.includes('create') || userQuery.includes('new') || userQuery.includes('build')) {
          if (userQuery.includes('fraud') || userQuery.includes('review')) {
            response = "I can help you create a fraud review agent. This agent will analyze transaction patterns and flag suspicious activities. Would you like me to set up a basic configuration?";
            if (onCreateTemplate) {
              onCreateTemplate('fraud_agent', 'Fraud review agent with risk assessment capabilities');
            }
          } else if (userQuery.includes('kyc') || userQuery.includes('verification')) {
            response = "I can set up a KYC agent for you. This agent will verify identity documents and perform compliance checks. Should I create this template?";
            if (onCreateTemplate) {
              onCreateTemplate('kyc_agent', 'KYC agent with document verification capabilities');
            }
          } else if (userQuery.includes('bank') || userQuery.includes('statement')) {
            response = "I can help you create a bank statement analyzer agent. This agent will extract and analyze financial data from bank statements. Would you like me to generate this template?";
            if (onCreateTemplate) {
              onCreateTemplate('bank_statement_agent', 'Bank statement analyzer agent with financial data extraction');
            }
          } else {
            response = "I can help you create an agent. Would you like a template for fraud review, KYC verification, or bank statement analysis? Or would you prefer to start with a blank agent?";
          }
        } else if (userQuery.includes('configure') || userQuery.includes('setting')) {
          response = "Agent configuration involves setting up data sources, decision rules, and notification settings. You can use the visual builder to connect these components in a logical flow.";
        } else {
          response = "I can help you create and configure agents for various use cases like fraud review, KYC verification, or bank statement analysis. Would you like me to suggest a specific agent template?";
        }
      } else {
        response = "I can help with creating and configuring journeys and agents. What specific aspect would you like assistance with?";
      }
      
      addAssistantMessage(response);
      setIsThinking(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200",
            isOpen ? "bg-gray-200 hover:bg-gray-300" : "bg-primary hover:bg-primary/90"
          )}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Zap className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {/* Assistant Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden flex flex-col transition-all duration-200 ease-in-out max-h-[70vh]">
          {/* Header */}
          <div className={cn("p-4 flex items-center justify-between", getColor())}>
            <div className="flex items-center">
              {getIcon()}
              <h3 className="font-medium">{getTitle()}</h3>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "p-3 rounded-lg max-w-[85%]",
                    message.role === 'assistant' 
                      ? "bg-gray-100 text-gray-800" 
                      : "bg-primary text-primary-foreground ml-auto"
                  )}
                >
                  {message.content}
                </div>
              ))}
              {isThinking && (
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-[85%] flex items-center">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              )}
            </div>
          </ScrollArea>
          
          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Ask about ${type === 'journey' ? 'journeys' : 'agents'}...`}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={isThinking}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JourneyAgentAssistant;
