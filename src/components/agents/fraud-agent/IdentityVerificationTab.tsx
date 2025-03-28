
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const IdentityVerificationTab: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Identity Document Verification</h3>
      <p className="text-sm text-muted-foreground">
        Configure which identity documents the agent can request and verify.
      </p>
      
      <div className="space-y-4 mt-4">
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="id-passport" className="rounded border-gray-300" defaultChecked />
          <label htmlFor="id-passport" className="text-sm">Passport</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="id-drivers-license" className="rounded border-gray-300" defaultChecked />
          <label htmlFor="id-drivers-license" className="text-sm">Driver's License</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="id-national-id" className="rounded border-gray-300" defaultChecked />
          <label htmlFor="id-national-id" className="text-sm">National ID Card</label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="id-residence-permit" className="rounded border-gray-300" />
          <label htmlFor="id-residence-permit" className="text-sm">Residence Permit</label>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="id-biometrics" className="rounded border-gray-300" defaultChecked />
          <label htmlFor="id-biometrics" className="text-sm">Biometric Verification (Selfie)</label>
        </div>
      </div>

      <Separator className="my-4" />
      
      <h3 className="text-lg font-medium">Verification Methods</h3>
      <div className="mt-2 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-sm font-medium">Document Authenticity Check</h4>
            <p className="text-xs text-muted-foreground">Verify security features and detect forgeries</p>
          </div>
          <Select defaultValue="high">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Basic</SelectItem>
              <SelectItem value="medium">Standard</SelectItem>
              <SelectItem value="high">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-sm font-medium">Face Matching</h4>
            <p className="text-xs text-muted-foreground">Match selfie to ID document photo</p>
          </div>
          <Select defaultValue="high">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Basic</SelectItem>
              <SelectItem value="medium">Standard</SelectItem>
              <SelectItem value="high">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-sm font-medium">Liveness Detection</h4>
            <p className="text-xs text-muted-foreground">Ensure the person is physically present</p>
          </div>
          <Select defaultValue="medium">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Basic</SelectItem>
              <SelectItem value="medium">Standard</SelectItem>
              <SelectItem value="high">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerificationTab;
