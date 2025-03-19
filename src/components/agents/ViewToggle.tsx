
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface ViewToggleProps {
  viewMode: "customer" | "internal";
  onViewModeChange: (value: string) => void;
}

const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
  return (
    <ToggleGroup 
      type="single" 
      value={viewMode} 
      onValueChange={onViewModeChange}
      className="w-full border rounded-md"
    >
      <ToggleGroupItem 
        value="customer" 
        aria-label="Customer View"
        className="w-1/2 text-xs"
      >
        Customer
      </ToggleGroupItem>
      <ToggleGroupItem 
        value="internal" 
        aria-label="Internal View"
        className="w-1/2 text-xs"
      >
        Monnai
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ViewToggle
