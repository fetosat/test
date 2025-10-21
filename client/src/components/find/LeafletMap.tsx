import { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, CircleMarker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { motion } from "framer-motion";
import type { Business } from "@/lib/findMockData";
import { categories } from "@/lib/findMockData";
import { useTheme } from "@/contexts/ThemeContext";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface LeafletMapProps {
  results: Business[];
  userLocation?: { lat: number; lng: number } | null;
}

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  
  return null;
}

function createCategoryIcon(category: string) {
  const categoryData = categories.find(cat => cat.id === category);
  const colorClass = categoryData?.color || "from-gray-500 to-gray-700";
  
  const gradientColors: Record<string, string> = {
    "from-blue-500 to-blue-700": "#3b82f6",
    "from-orange-500 to-red-500": "#f97316",
    "from-purple-500 to-pink-500": "#a855f7",
    "from-indigo-500 to-purple-600": "#6366f1",
    "from-yellow-500 to-orange-600": "#eab308",
    "from-green-500 to-teal-500": "#10b981",
    "from-red-500 to-pink-500": "#ef4444",
    "from-gray-600 to-gray-800": "#4b5563",
  };
  
  const color = gradientColors[colorClass] || "#6b7280";
  
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
}

export function LeafletMap({ results, userLocation }: LeafletMapProps) {
  const { theme } = useTheme();
  const [requestingLocation, setRequestingLocation] = useState(false);
  const [currentUserLocation, setCurrentUserLocation] = useState<{ lat: number; lng: number } | null>(
    userLocation || null
  );

  const center: [number, number] = useMemo(() => {
    if (currentUserLocation) {
      return [currentUserLocation.lat, currentUserLocation.lng];
    }
    if (results.length > 0) {
      const avgLat = results.reduce((sum, r) => sum + r.lat, 0) / results.length;
      const avgLng = results.reduce((sum, r) => sum + r.lng, 0) / results.length;
      return [avgLat, avgLng];
    }
    return [30.0444, 31.2357];
  }, [results, currentUserLocation]);

  const tileLayerUrl = theme === "dark" 
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const tileLayerAttribution = theme === "dark"
    ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  const requestUserLocation = () => {
    setRequestingLocation(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setRequestingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setRequestingLocation(false);
        }
      );
    } else {
      setRequestingLocation(false);
    }
  };

  return (
    <div className="relative h-[600px] rounded-2xl overflow-hidden border border-border">
      <MapContainer
        center={center}
        zoom={12}
        className="h-full w-full z-0"
        zoomControl={true}
      >
        <MapController center={center} />
        <TileLayer
          key={theme}
          attribution={tileLayerAttribution}
          url={tileLayerUrl}
        />

        <MarkerClusterGroup
          chunkedLoading
          maxClusterRadius={50}
          spiderfyOnMaxZoom={true}
          showCoverageOnHover={false}
          zoomToBoundsOnClick={true}
        >
          {results.map((business) => (
            <Marker
              key={business.id}
              position={[business.lat, business.lng]}
              icon={createCategoryIcon(business.category)}
            >
              <Popup className="custom-popup" maxWidth={300}>
                <Card className="border-0 shadow-none">
                  <div className="p-3 space-y-2">
                    <h3 className="font-bold text-lg">{business.name}</h3>
                    <p className="text-sm text-muted-foreground">{business.nameAr}</p>
                    
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{business.rating}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-sky-400 mt-0.5" />
                        <span>{business.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-emerald-400" />
                        <span>{business.phone}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      {business.distance} away
                    </div>
                  </div>
                </Card>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>

        {currentUserLocation && (
          <CircleMarker
            center={[currentUserLocation.lat, currentUserLocation.lng]}
            radius={12}
            pathOptions={{
              fillColor: "#3b82f6",
              fillOpacity: 0.8,
              color: "white",
              weight: 3,
            }}
          >
            <Popup>
              <div className="text-center p-2">
                <p className="font-semibold">Your Location</p>
              </div>
            </Popup>
          </CircleMarker>
        )}
      </MapContainer>

      {!currentUserLocation && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 z-[1000]"
        >
          <Button
            onClick={requestUserLocation}
            disabled={requestingLocation}
            className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
            size="sm"
          >
            <Navigation className="w-4 h-4 mr-2" />
            {requestingLocation ? "Getting Location..." : "Use My Location"}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
