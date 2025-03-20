
import { useCallback } from 'react';
import { toast } from "sonner";
import { getDefaultLabelForType, getDefaultDescriptionForType, getDefaultIconForType } from '../utils/nodeUtils';

export function useWorkflowDragDrop(setNodes: any, openNodeConfig?: (node: any) => void) {
  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      // Get the dropped element type
      const type = event.dataTransfer.getData('application/reactflow/type');
      
      if (!type) {
        console.error('No type data found in drag event');
        return;
      }

      // Get position where the element was dropped
      const reactFlowBounds = event.currentTarget.getBoundingClientRect();
      
      // Calculate position with offset for better visual placement
      const position = {
        x: event.clientX - reactFlowBounds.left - 75, // Center the node horizontally
        y: event.clientY - reactFlowBounds.top - 20,  // Adjust vertical position
      };

      // Get any additional data that was passed with the dragged item
      let additionalData = {};
      try {
        const dataString = event.dataTransfer.getData('application/reactflow/data');
        if (dataString) {
          additionalData = JSON.parse(dataString);
        }
      } catch (error) {
        console.error('Error parsing additional data:', error);
      }

      // Generate a unique node ID with more meaningful naming
      const timestamp = Date.now();
      const shortId = timestamp.toString().slice(-5);
      const newNodeId = `${type}-${shortId}`;

      // Create the new node with enhanced visual feedback
      const newNode = {
        id: newNodeId,
        type: 'default',
        position,
        data: {
          label: getDefaultLabelForType(type),
          type,
          icon: getDefaultIconForType(type),
          description: getDefaultDescriptionForType(type),
          ...additionalData,
        },
        // Add subtle animation effect for newly added nodes
        style: { 
          opacity: 0,
          animation: 'fadeIn 0.3s ease-in-out forwards',
        },
      };

      // Add the new node to the canvas
      setNodes((nds: any) => {
        const updatedNodes = nds.concat(newNode);
        return updatedNodes;
      });
      
      // Show detailed success toast with actionable hint
      const nodeLabel = getDefaultLabelForType(type);
      toast.success(`Added ${nodeLabel}`, {
        description: "Configure your new node",
        duration: 3000,
      });
      
      // Automatically open the config dialog for the new node
      if (openNodeConfig) {
        setTimeout(() => {
          openNodeConfig(newNode);
        }, 100); // Small delay to ensure node is rendered
      }
    },
    [setNodes, openNodeConfig]
  );

  const onNodeDragStart = useCallback((event: any, node: any) => {
    // This is a placeholder that could be used for visual feedback
    console.log('Node drag started:', node);
  }, []);

  return {
    onDragOver,
    onDrop,
    onNodeDragStart
  };
}
