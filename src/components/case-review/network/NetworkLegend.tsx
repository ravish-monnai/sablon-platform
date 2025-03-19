
import { User, UserCheck, UserX, CreditCard, Building } from "lucide-react";

const NetworkLegend = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-3 my-3 p-2 bg-gray-50 rounded-md border">
      <div className="flex items-center">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 mr-1">
          <User className="h-4 w-4 text-blue-500" />
        </span>
        <span className="text-xs">Main User</span>
      </div>
      <div className="flex items-center">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 mr-1">
          <UserCheck className="h-4 w-4 text-green-500" />
        </span>
        <span className="text-xs">Safe User</span>
      </div>
      <div className="flex items-center">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 mr-1">
          <UserX className="h-4 w-4 text-red-500" />
        </span>
        <span className="text-xs">Risky User</span>
      </div>
      <div className="flex items-center">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 mr-1">
          <CreditCard className="h-4 w-4 text-purple-500" />
        </span>
        <span className="text-xs">Financial Entity</span>
      </div>
      <div className="flex items-center">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 mr-1">
          <Building className="h-4 w-4 text-indigo-500" />
        </span>
        <span className="text-xs">Business</span>
      </div>
    </div>
  );
};

export default NetworkLegend;
