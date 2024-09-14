import { Minus, MoveDiagonal } from "lucide-react";

export default function CardStatusHeader({ direction = "right" }) {
  return (
    <div className={`flex-between gap-y-2 p-2 border-b flex-wrap ${direction === "left" ? "flex-row-reverse" : ""}`}>
      
      <div className="flex-center gap-2">
        <span className="bg-yellow-600 p-1 rounded-full">
          <Minus size={15} color="white" />
        </span>
        <span className="bg-green-400 p-1 rounded-md">
          <MoveDiagonal size={15} color="white" />
        </span>
      </div>

      <span className="text-gray-400 font-medium text-base">Time Tracking</span>
    </div>
  );
}
