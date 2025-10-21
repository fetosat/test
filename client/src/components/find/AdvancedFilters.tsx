import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Clock, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface FilterState {
  searchType: "normal" | "location";
  radius: number;
  priceRange: [number, number];
  timeRange: string;
  orderBy: string;
}

interface AdvancedFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export function AdvancedFilters({ filters, onFiltersChange }: AdvancedFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const activeFilterCount = [
    filters.searchType === "location",
    filters.priceRange[0] > 0 || filters.priceRange[1] < 1000,
    filters.timeRange !== "all",
    filters.orderBy !== "recent",
  ].filter(Boolean).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-48 z-20"
    >
      <Card className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border-white/20 shadow-lg shadow-sky-400/10">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-sky-400" />
              <CardTitle className="text-lg">Advanced Filters</CardTitle>
              {activeFilterCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <Badge variant="secondary" className="bg-sky-500/20 text-sky-400">
                    {activeFilterCount}
                  </Badge>
                </motion.div>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 w-8 p-0"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <X className={isExpanded ? "w-4 h-4" : "w-4 h-4 rotate-45"} />
              </motion.div>
            </Button>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-sky-400" />
                      <Label htmlFor="location-search" className="text-sm font-medium">
                        Location-based Search
                      </Label>
                    </div>
                    <Switch
                      id="location-search"
                      checked={filters.searchType === "location"}
                      onCheckedChange={(checked) =>
                        updateFilter("searchType", checked ? "location" : "normal")
                      }
                    />
                  </div>

                  <AnimatePresence>
                    {filters.searchType === "location" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 space-y-2"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Radius</span>
                          <span className="font-medium text-sky-400">{filters.radius} km</span>
                        </div>
                        <Slider
                          value={[filters.radius]}
                          onValueChange={([value]) => updateFilter("radius", value)}
                          min={1}
                          max={50}
                          step={1}
                          className="w-full"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <Label className="text-sm font-medium">Price Range</Label>
                  </div>
                  <div className="pl-6 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        EGP {filters.priceRange[0]} - EGP {filters.priceRange[1]}
                      </span>
                    </div>
                    <Slider
                      value={filters.priceRange}
                      onValueChange={(value) => updateFilter("priceRange", value as [number, number])}
                      min={0}
                      max={1000}
                      step={10}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <Label className="text-sm font-medium">Time Range</Label>
                  </div>
                  <Select
                    value={filters.timeRange}
                    onValueChange={(value) => updateFilter("timeRange", value)}
                  >
                    <SelectTrigger className="w-full bg-white/5 border-white/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Time</SelectItem>
                      <SelectItem value="open_now">Open Now</SelectItem>
                      <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 6 PM)</SelectItem>
                      <SelectItem value="evening">Evening (6 PM - 12 AM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Order By</Label>
                  <Select
                    value={filters.orderBy}
                    onValueChange={(value) => updateFilter("orderBy", value)}
                  >
                    <SelectTrigger className="w-full bg-white/5 border-white/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="rating">Highest Rating</SelectItem>
                      <SelectItem value="reviews">Most Reviews</SelectItem>
                      <SelectItem value="distance">Nearest</SelectItem>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="customers">Most Customers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {activeFilterCount > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() =>
                        onFiltersChange({
                          searchType: "normal",
                          radius: 10,
                          priceRange: [0, 1000],
                          timeRange: "all",
                          orderBy: "recent",
                        })
                      }
                    >
                      Clear All Filters
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
