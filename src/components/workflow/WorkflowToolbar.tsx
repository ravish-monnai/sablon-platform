
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Edit2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ToolbarSection from './toolbar/ToolbarSection';
import getDataSourcesSection from './toolbar/DataSourcesSection';
import getModelsSection from './toolbar/ModelsSection';
import getRulesSection from './toolbar/RulesSection';
import getActionsSection from './toolbar/ActionsSection';
import getAgentsSection from './toolbar/AgentsSection';
import { WorkflowToolbarProps } from './toolbar/types';

const WorkflowToolbar: React.FC<WorkflowToolbarProps> = ({ 
  isPreviewMode, 
  togglePreviewMode 
}) => {
  const [isDataSourceDialogOpen, setIsDataSourceDialogOpen] = useState(false);
  const [selectedDataSourceType, setSelectedDataSourceType] = useState('');

  // Get all toolbar sections
  const dataSources = getDataSourcesSection();
  const models = getModelsSection();
  const rules = getRulesSection();
  const actions = getActionsSection();
  const agents = getAgentsSection();

  return (
    <div className="flex justify-between mb-2">
      <div className="flex flex-row space-x-2">
        <ToolbarSection 
          title={dataSources.title}
          icon={dataSources.icon}
          items={dataSources.items}
        />
        
        <ToolbarSection 
          title={models.title}
          icon={models.icon}
          items={models.items}
        />

        <ToolbarSection 
          title={rules.title}
          icon={rules.icon}
          items={rules.items}
        />

        <ToolbarSection 
          title={actions.title}
          icon={actions.icon}
          items={actions.items}
        />
        
        <ToolbarSection 
          title={agents.title}
          icon={agents.icon}
          items={agents.items}
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

      <Dialog open={isDataSourceDialogOpen} onOpenChange={setIsDataSourceDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Configure Data Source</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Configure your {selectedDataSourceType} data source here.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkflowToolbar;
