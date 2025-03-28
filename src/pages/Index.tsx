
import { LinkStatus } from "@/components/ui/link-status";
import MonnaiLogo from "@/components/branding/MonnaiLogo";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl px-4">
        <div className="mb-12 text-left">
          <MonnaiLogo size="lg" />
        </div>
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 p-4 bg-gradient-to-r from-monnai-yellow/10 via-monnai-pink/10 to-monnai-blue/10 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome to <span className="monnai-gradient-text">Monnai AI Risk Decisioning</span>
            </h2>
          </div>
          
          <h1 className="text-5xl font-bold mb-2">
            <span className="monnai-gradient-text">Tapping Into Global Potential</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Low-code platform for building, deploying, and monitoring AI-powered risk decisioning workflows
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <LinkStatus 
              href="/"
              className="bg-monnai-blue hover:bg-monnai-blue/90 text-white"
              isActive={true}
              tooltip="Go to the main dashboard"
            >
              Go to Dashboard
            </LinkStatus>
            
            <LinkStatus 
              href="/ai-journeys"
              className="monnai-gradient-bg hover:opacity-90 text-white border-none"
              isActive={true}
              tooltip="Explore AI Journeys"
            >
              Explore AI Journeys
            </LinkStatus>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-monnai-yellow mb-4 flex items-center justify-center text-white">1</div>
              <h3 className="text-xl font-semibold mb-2">Build</h3>
              <p className="text-gray-600">Create AI-powered decisioning workflows with our intuitive no-code builder</p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-monnai-pink mb-4 flex items-center justify-center text-white">2</div>
              <h3 className="text-xl font-semibold mb-2">Deploy</h3>
              <p className="text-gray-600">Deploy your models to production with one click</p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-monnai-blue mb-4 flex items-center justify-center text-white">3</div>
              <h3 className="text-xl font-semibold mb-2">Monitor</h3>
              <p className="text-gray-600">Track performance and make data-driven decisions</p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <LinkStatus 
              href="/models"
              variant="outline"
              isActive={true}
              tooltip="View all risk models"
            >
              Explore Models
            </LinkStatus>
            <LinkStatus 
              href="/ai-agents"
              variant="outline"
              isActive={true}
              tooltip="Configure AI agents"
            >
              AI Agents
            </LinkStatus>
            <LinkStatus 
              href="/data"
              variant="outline"
              isActive={true}
              tooltip="Manage data sources"
            >
              Data Sources
            </LinkStatus>
            <LinkStatus 
              href="/cases"
              variant="outline"
              isActive={false}
              tooltip="Case management coming soon"
            >
              Cases
            </LinkStatus>
            <LinkStatus 
              href="/settings"
              variant="outline"
              isActive={false}
              tooltip="Settings page coming soon"
            >
              Settings
            </LinkStatus>
          </div>
          
          <div className="mt-16 p-8 border rounded-lg">
            <img 
              src="/lovable-uploads/639f8d6d-e32b-431b-bf17-9f48e456b151.png" 
              alt="Monnai Logo with Slogan" 
              className="mx-auto max-w-full h-auto mb-8"
            />
            
            <div className="text-left max-w-2xl mx-auto">
              <p className="text-sm text-gray-600 mb-6">
                The logo, symbol and slogan combination can be used in black, white or in a
                gradient. When used in a gradient, treat all elements as a single entity. Colors
                should flow as presented here: horizontal, from yellow to blue.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-monnai-yellow/20 rounded-lg flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-monnai-yellow rounded-full mb-2"></div>
                  <span className="text-sm">#fb9400</span>
                </div>
                
                <div className="p-4 bg-monnai-pink/20 rounded-lg flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-monnai-pink rounded-full mb-2"></div>
                  <span className="text-sm">#ff00aa</span>
                </div>
                
                <div className="p-4 bg-monnai-blue/20 rounded-lg flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-monnai-blue rounded-full mb-2"></div>
                  <span className="text-sm">#5100ff</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Font Showcase: Rockford Sans</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-lg font-semibold">Rockford Sans Light</h4>
                  <p className="font-light">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="font-light">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="font-light">1234567890 ±!@#$%^&*()_+-=™</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold">Rockford Sans Regular</h4>
                  <p className="font-normal">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="font-normal">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="font-normal">1234567890 ±!@#$%^&*()_+-=™</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold">Rockford Sans Bold</h4>
                  <p className="font-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="font-bold">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="font-bold">1234567890 ±!@#$%^&*()_+-=™</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold">Rockford Sans Extrabold</h4>
                  <p className="font-extrabold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="font-extrabold">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="font-extrabold">1234567890 ±!@#$%^&*()_+-=™</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
