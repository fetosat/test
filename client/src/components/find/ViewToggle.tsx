import { Button } from "@/components/ui/button";
import { Grid3x3, List, Map } from "lucide-react";
import { ViewMode } from "@/pages/Find";

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  return (
    <div className="flex gap-1 bg-muted p-1 rounded-lg">
      <Button
        size="sm"
        variant={viewMode === "grid" ? "default" : "ghost"}
        onClick={() => onViewModeChange("grid")}
        data-testid="button-view-grid"
        className="gap-2"
      >
        <Grid3x3 className="w-4 h-4" />
        <span className="hidden sm:inline">Grid</span>
      </Button>
      <Button
        size="sm"
        variant={viewMode === "list" ? "default" : "ghost"}
        onClick={() => onViewModeChange("list")}
        data-testid="button-view-list"
        className="gap-2"
      >
        <List className="w-4 h-4" />
        <span className="hidden sm:inline">List</span>
      </Button>
      <Button
        size="sm"
        variant={viewMode === "map" ? "default" : "ghost"}
        onClick={() => onViewModeChange("map")}
        data-testid="button-view-map"
        className="gap-2"
      >
        <Map className="w-4 h-4" />
        <span className="hidden sm:inline">Map</span>
      </Button>
    </div>
  );
}
