
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BrainCircuit, Send, Bot, User, Lightbulb, X, Search, MousePointerClick, Target } from "lucide-react";

interface TransactionAIChatProps {
  onClose: () => void;
  initialAnalysis?: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const llmModels = [
  { id: "gpt-4o", name: "GPT-4o", provider: "OpenAI" },
  { id: "gpt-4o-mini", name: "GPT-4o Mini", provider: "OpenAI" },
  { id: "llama-3.1-70b", name: "Llama 3.1 70B", provider: "Meta" },
  { id: "claude-3-opus", name: "Claude 3 Opus", provider: "Anthropic" },
  { id: "claude-3-sonnet", name: "Claude 3 Sonnet", provider: "Anthropic" },
  { id: "mixtral-8x7b", name: "Mixtral 8x7B", provider: "Mistral AI" }
];

const TransactionAIChat: React.FC<TransactionAIChatProps> = ({ onClose, initialAnalysis }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("gpt-4o");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add initial system message
    setMessages([
      {
        role: "assistant",
        content: "Hello! I'm your AI assistant for analyzing transaction data. How can I help you today?",
        timestamp: new Date()
      }
    ]);

    // If an initial analysis was requested, simulate that question
    if (initialAnalysis) {
      setTimeout(() => {
        const analysisMessage = {
          role: "user" as const,
          content: `Run ${initialAnalysis} on our transaction data`,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, analysisMessage]);
        setIsTyping(true);
        
        // Simulate AI response after a delay
        setTimeout(() => {
          generateAIResponse(analysisMessage.content);
          setIsTyping(false);
        }, 1500);
      }, 500);
    }
  }, [initialAnalysis]);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      role: "user" as const,
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response with delay
    setTimeout(() => {
      generateAIResponse(input);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string) => {
    // Generate a contextual response based on user input
    let aiResponse = "";
    
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("pattern") || lowerInput.includes("identify pattern")) {
      aiResponse = "Based on my analysis of transaction patterns, I've identified several recurring behaviors:\n\n1. **Recurring Time Patterns**: 38% higher transaction volume on Fridays, with peak hours between 12-2pm and 6-8pm\n\n2. **Sequential Micro-Transactions**: Multiple small transactions (under $20) from the same source within 30-minute windows\n\n3. **Journey-Amount Correlation**: Identity Verification journeys have a 73% higher average transaction value than Account Opening journeys\n\n4. **Device-Journey Pattern**: Mobile transactions are 2.4x more common in Transaction Monitoring journeys than desktop\n\nWould you like me to investigate any of these patterns further?";
    } 
    else if (lowerInput.includes("anomaly") || lowerInput.includes("unusual")) {
      aiResponse = "I've detected several anomalies in the transaction data:\n\n- Transaction TRX-004 shows unusual behavior with failed status and very high risk\n- There's a 215% increase in high-risk transactions in the Identity Verification journey\n- The Average transaction value for Risk Assessment is significantly higher than historical norms\n\nI recommend investigating these anomalies further. Would you like me to elaborate on any specific point?";
    }
    else if (lowerInput.includes("trend") || lowerInput.includes("analysis")) {
      aiResponse = "Looking at transaction trends across your data:\n\n- Transaction volume has increased by 27% month-over-month\n- The average risk score has decreased from Medium to Low (improvement)\n- Completed transactions have risen by 12% across all journeys\n- Account Opening journey shows the most consistent growth pattern\n\nThis suggests overall positive system performance with improved risk management.";
    }
    else if (lowerInput.includes("forensic") || lowerInput.includes("deep analysis")) {
      aiResponse = "My forensic analysis of the transactions reveals:\n\n- Several transactions (including TRX-003) contain unusual metadata fields\n- There appears to be a connection between specific high-risk transactions across different journeys\n- Transaction TRX-004 exhibits characteristics consistent with known fraud patterns\n\nI recommend flagging these transactions for manual review and possibly updating detection rules to capture similar patterns in the future.";
    }
    else if (lowerInput.includes("help") || lowerInput.includes("capabilities")) {
      aiResponse = "I can help you analyze transaction data in several ways:\n\n- Identify patterns and correlations in transaction behavior\n- Detect anomalies and unusual activities\n- Analyze trends and performance over time\n- Conduct forensic investigations for specific transactions\n- Generate reports and visualization recommendations\n\nFeel free to ask about any of these capabilities or specific transactions you're interested in!";
    }
    else {
      aiResponse = "I can analyze your transaction data to provide insights on patterns, anomalies, trends, and help with forensic investigation. What specific aspect of the transactions would you like me to analyze?";
    }

    // Add AI response
    setMessages(prev => [...prev, {
      role: "assistant",
      content: aiResponse,
      timestamp: new Date()
    }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const selectedModelData = llmModels.find(model => model.id === selectedModel);

  return (
    <div className="flex flex-col h-full pt-2 relative">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="h-5 w-5 text-[#9b87f5]" />
          <h3 className="font-medium">Transaction AI Assistant</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="mb-2">
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger className="w-full border-0 bg-gray-100 h-8 text-xs">
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            {llmModels.map(model => (
              <SelectItem key={model.id} value={model.id} className="text-xs">
                <div className="flex flex-col">
                  <span>{model.name}</span>
                  <span className="text-xs text-muted-foreground">{model.provider}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator className="mb-3" />

      <div className="flex-1 overflow-y-auto mb-4 pr-2 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[85%] rounded-lg p-3 ${
              message.role === "user" 
                ? "bg-[#9b87f5] text-white" 
                : "bg-gray-100 text-gray-800"
            }`}>
              <div className="flex items-center mb-1">
                {message.role === "user" ? (
                  <>
                    <span className="text-xs font-medium mr-auto">You</span>
                    <User className="h-3 w-3 ml-1" />
                  </>
                ) : (
                  <>
                    <Bot className="h-3 w-3 mr-1" />
                    <span className="text-xs font-medium mr-auto">AI Assistant</span>
                  </>
                )}
                <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
              </div>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-lg p-3 bg-gray-100 text-gray-800">
              <div className="flex items-center mb-1">
                <Bot className="h-3 w-3 mr-1" />
                <span className="text-xs font-medium mr-auto">AI Assistant</span>
                <span className="text-xs opacity-70">{formatTime(new Date())}</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {messages.length > 1 && (
        <div className="mb-3">
          <div className="bg-[#9b87f5]/10 rounded-md p-2 border border-[#9b87f5]/20 flex items-start">
            <Lightbulb className="h-4 w-4 mr-2 text-[#9b87f5] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs">
                Try asking about transaction patterns, anomalies, trends, or request a forensic analysis.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex space-x-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about transactions..."
          className="flex-1 h-9"
          disabled={isTyping}
        />
        <Button size="sm" onClick={sendMessage} disabled={!input.trim() || isTyping}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TransactionAIChat;
