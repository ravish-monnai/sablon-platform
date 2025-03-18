
import React, { useState } from 'react';
import { X, MessageSquareText, Bot, Zap, Layers, Database, Workflow, BrainCircuit } from 'lucide-react';
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

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! I\'m your AI Assistant. I can help you create and configure AI journeys, agents, models, and data sources. What would you like to work on today?',
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const location = useLocation();

  // Determine the current context based on URL
  const getCurrentContext = () => {
    const path = location.pathname;
    if (path.includes('ai-journeys')) return 'journey';
    if (path.includes('ai-agents')) return 'agent';
    if (path.includes('models')) return 'model';
    if (path.includes('data')) return 'data';
    return 'general';
  };

  const contextMap = {
    journey: {
      icon: <Workflow className="h-5 w-5 mr-2" />,
      title: 'AI Journey Assistant',
      color: 'bg-monnai-blue/10'
    },
    agent: {
      icon: <Bot className="h-5 w-5 mr-2" />,
      title: 'AI Agent Assistant',
      color: 'bg-monnai-pink/10'
    },
    model: {
      icon: <BrainCircuit className="h-5 w-5 mr-2" />,
      title: 'Model Assistant',
      color: 'bg-violet-500/10'
    },
    data: {
      icon: <Database className="h-5 w-5 mr-2" />,
      title: 'Data Source Assistant',
      color: 'bg-monnai-yellow/10'
    },
    general: {
      icon: <MessageSquareText className="h-5 w-5 mr-2" />,
      title: 'AI Assistant',
      color: 'bg-gray-100'
    }
  };

  const currentContext = getCurrentContext();
  const { icon, title, color } = contextMap[currentContext];

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
      if (currentContext === 'journey') {
        if (userQuery.includes('create') || userQuery.includes('new')) {
          response = 'To create a new AI journey, start by clicking the "Create Journey" button. You can then use our drag-and-drop workflow editor to connect data sources, models, and agent nodes. Would you like to see a template for fraud detection, KYC, or underwriting?';
        } else if (userQuery.includes('test') || userQuery.includes('deploy')) {
          response = 'For testing a journey, use the "Preview" mode in the workflow editor. This will simulate the journey with test data. Once you\'re satisfied, deploy it as a template first for internal testing before exposing it to customers.';
        } else {
          response = 'I can help with creating, testing, and deploying AI journeys. Would you like suggestions for journey templates or best practices for journey design?';
        }
      } else if (currentContext === 'agent') {
        if (userQuery.includes('create') || userQuery.includes('new')) {
          response = 'To create a new AI agent, click "Deploy Agent" and select the type of agent you need (e.g., Fraud Review, KYC, Underwriting). I can help you configure the agent\'s parameters and decision logic.';
        } else if (userQuery.includes('configure') || userQuery.includes('train')) {
          response = 'Agent configuration involves setting up data sources, decision thresholds, and notification rules. Would you like me to suggest optimal settings based on your use case?';
        } else {
          response = 'I can help with creating and configuring AI agents for various use cases. What specific aspect of agent configuration are you interested in?';
        }
      } else if (currentContext === 'model') {
        if (userQuery.includes('create') || userQuery.includes('new')) {
          response = 'To create a new model, select either a binary classifier, multi-class classifier, or regression model. I can help you with feature selection and hyperparameter tuning.';
        } else if (userQuery.includes('evaluate') || userQuery.includes('performance')) {
          response = 'Model evaluation should focus on metrics like precision, recall, and F1 score for classification, or RMSE for regression. Would you like me to suggest a validation strategy?';
        } else {
          response = 'I can assist with model creation, feature engineering, evaluation, and deployment. What stage of the model lifecycle are you working on?';
        }
      } else if (currentContext === 'data') {
        if (userQuery.includes('connect') || userQuery.includes('source')) {
          response = 'To connect a new data source, use the "Add Data Source" button. I can help you configure the connection parameters and validate the data schema.';
        } else if (userQuery.includes('quality') || userQuery.includes('clean')) {
          response = 'Data quality is crucial for AI performance. I recommend implementing validation rules, handling missing values, and normalizing fields. Would you like specific recommendations for your data?';
        } else {
          response = 'I can help with data source integration, quality assessment, transformation, and enrichment. What aspect of data management are you focused on?';
        }
      } else {
        response = 'I can help with various aspects of AI implementation including journeys, agents, models, and data. What specific area would you like assistance with?';
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
          <div className={cn("p-4 flex items-center justify-between", color)}>
            <div className="flex items-center">
              {icon}
              <h3 className="font-medium">{title}</h3>
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
                placeholder="Ask about AI workflows..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={isThinking}>
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
