
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface ViewToggleProps {
  viewMode: "customer" | "internal";
  onViewModeChange: (value: string) => void;
}

const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
  return (
    <ToggleGroup type="single" value={viewMode} onValueChange={onViewModeChange}>
      <ToggleGroupItem value="customer" aria-label="Customer View">
        Customer Agents
      </ToggleGroupItem>
      <ToggleGroupItem value="internal" aria-label="Internal View">
        Monnai Agents
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ViewToggle
