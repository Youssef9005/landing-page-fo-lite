import { TimeTrackingDirection } from "@/src/types/time-tracking-direction";

export default function CardStatusContent({ direction = "right" } : TimeTrackingDirection) {
  return (
    <ul className={`flex-center gap-y-3 p-2 text-xs flex-wrap ${direction === "left" ? "flex-row-reverse" : ""}`}>
      
      <li className={`font-semibold flex-center flex-col px-5 ${direction === "right" ? "md:border-r" : ""}`}>
        <span className="text-gray-500 font-medium">Average / Day</span>
        <span>
          05:12:30 <span className="text-red-500">-1%</span>
        </span>
      </li>

      <li className="font-semibold flex-center flex-col md:border-r px-5">
        <span className="text-gray-500 font-medium">Month Total</span>
        <span>123:32:12</span>
      </li>

      <li className={`font-semibold flex-center flex-col px-5 ${direction === "left" ? "md:border-r" : ""}`}>
        <span className="text-blue-500 font-medium">Today Total</span>
        <span className="text-blue-500">02:32:12</span>
      </li>
    </ul>
  );
}
