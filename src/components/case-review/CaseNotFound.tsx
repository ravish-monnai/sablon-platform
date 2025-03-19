
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";

const CaseNotFound = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)]">
      <div className="text-center max-w-md">
        <div className="h-24 w-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
          <FileQuestion className="h-12 w-12 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold">Case not found</h2>
        <p className="text-muted-foreground mt-2 mb-6">
          The requested case could not be found. It may have been deleted or the URL might be incorrect.
        </p>
        <Button asChild>
          <Link to="/cases" className="w-full">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cases
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CaseNotFound;
