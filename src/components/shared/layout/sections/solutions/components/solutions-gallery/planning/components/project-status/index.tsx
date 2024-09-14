import React from "react";
import { ProjectStatusType } from "@/src/types/planning-project-status";

export default function ProjectStatus({
  bgColor,
  title,
  className,
  onClick,
}: ProjectStatusType) {
  return (
    <div className="relative w-full md:w-auto cursor-pointer transition-all group" onClick={onClick}>
      <span
        className={`block w-full text-center ${className} text-sm border rounded-lg py-2 px-4 md:px-8 relative font-semibold capitalize transition-colors duration-300 group-hover:text-white`}
      >
        {title}
      </span>

      <span
        className={`absolute w-2 h-2 left-2 md:left-3 top-1/2 transform -translate-y-1/2 rounded-full transition-colors duration-300 ${bgColor} group-hover:bg-white`}
      ></span>
    </div>
  );
}
