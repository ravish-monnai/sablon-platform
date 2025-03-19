
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CaseNotFound = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Case not found</h2>
        <p className="text-muted-foreground mt-2">The requested case could not be found.</p>
        <Button asChild className="mt-4">
          <Link to="/cases">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cases
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CaseNotFound;
