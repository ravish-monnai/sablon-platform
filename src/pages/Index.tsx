
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-3xl px-4">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/b63e774c-c6a1-4d5e-b720-9c788bb548f2.png" 
            alt="Monnai Brand Colors" 
            className="mx-auto w-full max-w-lg"
          />
        </div>
        
        <h1 className="text-5xl font-bold mb-6">
          <span className="monnai-gradient-text">Monnai</span> AI Risk Decisioning
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Low-code platform for building, deploying, and monitoring AI-powered risk decisioning workflows
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate("/")}
            className="bg-monnai-blue hover:bg-monnai-blue/90 text-white"
          >
            Go to Dashboard
          </Button>
          
          <Button 
            onClick={() => navigate("/ai-journeys")}
            className="monnai-gradient-bg hover:opacity-90 text-white border-none"
          >
            Explore AI Journeys
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full bg-monnai-blue mb-4 flex items-center justify-center text-white">1</div>
            <h3 className="text-xl font-semibold mb-2">Build</h3>
            <p className="text-gray-600">Create AI-powered decisioning workflows with our intuitive no-code builder</p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full bg-monnai-pink mb-4 flex items-center justify-center text-white">2</div>
            <h3 className="text-xl font-semibold mb-2">Deploy</h3>
            <p className="text-gray-600">Deploy your models to production with one click</p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full bg-monnai-yellow mb-4 flex items-center justify-center text-white">3</div>
            <h3 className="text-xl font-semibold mb-2">Monitor</h3>
            <p className="text-gray-600">Track performance and make data-driven decisions</p>
          </div>
        </div>
        
        <div className="mt-12 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Font Showcase</h2>
          
          <div className="text-left space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Rockford Sans Light</h3>
              <p className="font-light">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-light">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-light">1234567890 ±!@#$%^&*()_+-=™</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Rockford Sans Regular</h3>
              <p className="font-normal">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-normal">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-normal">1234567890 ±!@#$%^&*()_+-=™</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Rockford Sans Bold</h3>
              <p className="font-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-bold">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-bold">1234567890 ±!@#$%^&*()_+-=™</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Rockford Sans Extrabold</h3>
              <p className="font-extrabold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-extrabold">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-extrabold">1234567890 ±!@#$%^&*()_+-=™</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Rockford Sans Heavy (Black)</h3>
              <p className="font-black">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-black">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-black">1234567890 ±!@#$%^&*()_+-=™</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
