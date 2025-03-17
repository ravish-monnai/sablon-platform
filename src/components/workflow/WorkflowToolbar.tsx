
import React from 'react';
import { Button } from '@/components/ui/button';
import { Database, Brain, Users, Eye, Edit2 } from 'lucide-react';
import DraggableItem from './DraggableItem';

interface WorkflowToolbarProps {
  isPreviewMode: boolean;
  togglePreviewMode: () => void;
}

const WorkflowToolbar: React.FC<WorkflowToolbarProps> = ({ 
  isPreviewMode, 
  togglePreviewMode 
}) => {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex flex-row space-x-2">
        <DraggableItem 
          type="datasource" 
          icon={<Database className="text-monnai-yellow mr-2" size={16} />}
          label="Data Source"
        />
        <DraggableItem 
          type="model" 
          icon={<Brain className="text-monnai-pink mr-2" size={16} />}
          label="Model"
        />
        <DraggableItem 
          type="agent" 
          icon={<Users className="text-monnai-blue mr-2" size={16} />}
          label="Agent"
        />
      </div>
      <Button variant="outline" size="sm" onClick={togglePreviewMode}>
        {isPreviewMode ? (
          <>
            <Edit2 className="mr-2 h-4 w-4" /> Edit
          </>
        ) : (
          <>
            <Eye className="mr-2 h-4 w-4" /> Preview
          </>
        )}
      </Button>
    </div>
  );
};

export default WorkflowToolbar;
