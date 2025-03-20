
import { useCallback } from 'react';
import { toast } from "sonner";
import { getDefaultLabelForType, getDefaultDescriptionForType, getDefaultIconForType } from '../utils/nodeUtils';

export function useWorkflowDragDrop(setNodes: any) {
  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      // Get the dropped element type
      const type = event.dataTransfer.getData('application/reactflow/type');
      
      if (!type) return;

      // Get position where the element was dropped
      const reactFlowBounds = event.currentTarget.getBoundingClientRect();
      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
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

      // Generate a unique node ID
      const newNodeId = `${type}-${Date.now()}`;

      // Create the new node
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
      };

      // Add the new node to the canvas
      setNodes((nds: any) => nds.concat(newNode));
      
      // Show success toast
      toast.success(`Added ${type} node to the journey`);
    },
    [setNodes]
  );

  const onNodeDragStart = useCallback(() => {
    // This is a placeholder for now
    // Could be used for visual feedback or tracking
  }, []);

  return {
    onDragOver,
    onDrop,
    onNodeDragStart
  };
}
