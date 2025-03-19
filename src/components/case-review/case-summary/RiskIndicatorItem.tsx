
import { UserCheck, UserX } from "lucide-react";

interface RiskIndicatorItemProps {
  name: string;
  status: "pass" | "flag";
  details: string;
}

const RiskIndicatorItem = ({ name, status, details }: RiskIndicatorItemProps) => {
  return (
    <div className="flex items-start p-2 border rounded-md">
      {status === "pass" ? (
        <UserCheck className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
      ) : (
        <UserX className="h-5 w-5 mr-2 text-amber-500 mt-0.5" />
      )}
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{details}</p>
      </div>
    </div>
  );
};

export default RiskIndicatorItem;
