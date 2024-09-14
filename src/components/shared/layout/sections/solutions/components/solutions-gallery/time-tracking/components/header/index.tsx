import { useSolutionsContext } from "@/src/context/solutions-context";
import { TimeTrackingDirection } from "@/src/types/time-tracking-direction";
import {
  BriefcaseBusiness,
  CalendarDays,
  Timer,
} from "lucide-react";

export default function TimeTrackingHeader({
  direction = "right",
}: TimeTrackingDirection) {
  const { isHover } = useSolutionsContext();
  const baseStyle = "flex-center px-3 rounded-md font-semibold gap-2";

  return (
    <ul
      className={`flex-center gap-2 ${
        direction === "left" ? "flex-row-reverse" : ""
      } flex-wrap`}
    >
      <li
        className={`${baseStyle} py-2 text-xs border border-red-400 text-red-400`}
      >
        <BriefcaseBusiness size={15} /> No Active Jobs!
      </li>
      <li
        className={`${baseStyle} py-2 text-xs border border-red-400 text-red-400`}
      >
        <CalendarDays size={15} /> No Schedule
      </li>

      <li
        className={`${baseStyle} py-1 shadow-lg ${
          isHover
            ? "bg-red-500 text-white text-sm"
            : "bg-transparent text-blue-500 text-xs"
        }`}
      >
        {!isHover ? (
          <>
            <Timer size={15} /> 02:32:12
          </>
        ) : (
          <>
            <span className="flex-center w-7 h-7 rounded-full bg-white">
              <span className="w-4 h-4 rounded-md bg-red-500"></span>
            </span>
            Stop
          </>
        )}
        
      </li>
    </ul>
  );
}
