import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: string;
}

const statusConfig: Record<string, { variant: string; className: string }> = {
  active: { variant: "default", className: "bg-green-500 hover:bg-green-600" },
  pending: { variant: "secondary", className: "bg-yellow-500 hover:bg-yellow-600 text-white" },
  confirmed: { variant: "default", className: "bg-blue-500 hover:bg-blue-600" },
  completed: { variant: "default", className: "bg-green-500 hover:bg-green-600" },
  cancelled: { variant: "destructive", className: "bg-red-500 hover:bg-red-600" },
  inactive: { variant: "secondary", className: "bg-slate-400 hover:bg-slate-500 text-white" },
  suspended: { variant: "destructive", className: "bg-orange-500 hover:bg-orange-600" },
  verified: { variant: "default", className: "bg-emerald-500 hover:bg-emerald-600" },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status.toLowerCase()] || statusConfig.pending;
  
  return (
    <Badge className={config.className}>
      {status}
    </Badge>
  );
}
