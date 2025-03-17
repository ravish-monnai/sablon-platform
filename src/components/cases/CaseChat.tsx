import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BrainCircuit, Send, Bot, User, Lightbulb } from "lucide-react";

interface CaseChatProps {
  caseData: any;
  onClose: () => void;
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

const CaseChat: React.FC<CaseChatProps> = ({ caseData, onClose }) => {
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
        content: `Hello! I'm your AI assistant for reviewing case ${caseData.id}. How can I help you with this ${caseData.journey.toLowerCase()} case?`,
        timestamp: new Date()
      }
    ]);
  }, [caseData.id, caseData.journey]);

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
    // Generate a contextual response based on user input and case data
    let aiResponse = "";
    
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("risk") || lowerInput.includes("score")) {
      aiResponse = `The risk score for this case is ${caseData.riskScore}/100, which is classified as ${caseData.riskLevel} risk. This is based on various factors including identity verification, behavioral analysis, and historical patterns.`;
    } 
    else if (lowerInput.includes("document") || lowerInput.includes("identity")) {
      aiResponse = `The customer has submitted a ${caseData.documents[0].type} for verification with a score of ${caseData.documents[0].score}/100. ${caseData.documents[0].verified ? "The document passed verification checks." : "There were some issues with document verification that require attention."}`;
    }
    else if (lowerInput.includes("recommend") || lowerInput.includes("suggest") || lowerInput.includes("decision")) {
      if (caseData.riskLevel === "Low") {
        aiResponse = "Based on the low risk profile (score: " + caseData.riskScore + ") and consistent verification data, I recommend approving this case. All identity checks passed successfully, and there are no significant anomalies detected.";
      } else if (caseData.riskLevel === "Medium") {
        aiResponse = "This case has a medium risk level (score: " + caseData.riskScore + "). I recommend additional verification steps before making a decision. While most checks passed, there are some inconsistencies that should be resolved first.";
      } else if (caseData.riskLevel === "High") {
        aiResponse = "This case shows a high risk profile (score: " + caseData.riskScore + "). I recommend a thorough manual review before making a decision, as several verification checks failed and there are notable anomalies in the user's behavior.";
      } else {
        aiResponse = "This case has a critical risk level (score: " + caseData.riskScore + "). Based on multiple failed verifications and significant anomalies, I recommend rejecting this case pending a full investigation.";
      }
    }
    else if (lowerInput.includes("anomaly") || lowerInput.includes("flag") || lowerInput.includes("suspicious")) {
      if (caseData.anomalyFlags.length > 0) {
        aiResponse = `The system detected ${caseData.anomalyFlags.length} anomalies: ${caseData.anomalyFlags.join(", ")}. These flags contributed to the risk assessment.`;
      } else {
        aiResponse = "No significant anomalies were detected for this case. The behavioral patterns align with expected usage.";
      }
    }
    else if (lowerInput.includes("summary") || lowerInput.includes("overview")) {
      aiResponse = `This is a ${caseData.riskLevel.toLowerCase()} risk case (score: ${caseData.riskScore}/100) in the ${caseData.journey} journey. The case was created on ${caseData.date} and is currently ${caseData.status.toLowerCase()}. ${caseData.reasoning}`;
    }
    else {
      aiResponse = `I'm analyzing this ${caseData.journey.toLowerCase()} case with a risk score of ${caseData.riskScore} (${caseData.riskLevel} risk). What specific aspect would you like me to help with? I can provide insights on risk factors, verification status, anomalies, or recommend actions.`;
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
    <div className="flex flex-col h-full pt-4">
      <div className="flex items-center space-x-2 mb-4">
        <BrainCircuit className="h-5 w-5 text-[#9b87f5]" />
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger className="w-full border-0 bg-gray-100 h-9">
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            {llmModels.map(model => (
              <SelectItem key={model.id} value={model.id}>
                <div className="flex flex-col">
                  <span>{model.name}</span>
                  <span className="text-xs text-muted-foreground">{model.provider}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator className="mb-4" />

      <div className="flex-1 overflow-y-auto mb-4 pr-2 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] rounded-lg p-3 ${
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
            <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-800">
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
        <div className="mb-4">
          <div className="bg-[#9b87f5]/10 rounded-md p-3 border border-[#9b87f5]/20 flex items-start">
            <Lightbulb className="h-5 w-5 mr-2 text-[#9b87f5] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs">
                You can ask about risk factors, identity verification, recommendation, anomalies or case summary.
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
          placeholder="Ask about this case..."
          className="flex-1"
          disabled={isTyping}
        />
        <Button onClick={sendMessage} disabled={!input.trim() || isTyping}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CaseChat;
