import { Check, CircleAlert, CircleX } from "lucide-react";

interface StatusMessageProps {
  projectStatus: string;
}

export default function StatusMessage({ projectStatus }: StatusMessageProps) {
  const { icon, textColor, bgColor } = getStatusProps(projectStatus);

  return (
    <div className="flex-center gap-2">
      <span className={`flex-center w-7 h-7 rounded-full ${bgColor} text-white`}>
        {icon}
      </span>
      <span className={`${textColor} font-semibold text-lg`}>
        {getStatusText(projectStatus)}
      </span>
    </div>
  );
}

function getStatusProps(status: string) {
  if (status.includes("on")) {
    return {
      icon: <Check size={16} />,
      textColor: "text-green-600",
      bgColor: "bg-green-500",
    };
  }
  if (status.includes("at")) {
    return {
      icon: <CircleAlert size={16} />,
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-500",
    };
  }
  return {
    icon: <CircleX size={16} />,
    textColor: "text-red-600",
    bgColor: "bg-red-500",
  };
}

function getStatusText(status: string) {
  if (status.includes("on")) return "Success!";
  if (status.includes("at")) return "Keep Going!";
  return "Cancelled project!";
}
