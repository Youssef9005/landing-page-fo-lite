import { ChevronLeft, ChevronRight, Plus, Share } from "lucide-react";
import Image from "next/image";

export default function GetStartImg() {
  const spanColors = ["bg-red-500", "bg-yellow-500", "bg-green-500"];
  const baseStyle = "flex-center gap-x-2"

  return (
    <div className="relative flex-center w-full mt-20">
      <div className="w-4/5 bg-white absolute bottom-full p-4 rounded-t-xl border flex-between">
        
        {/* LEFT SIDE */}
        <div className="flex-center gap-x-2">
          {spanColors.map((color) => (
            <span key={color} className={`w-4 h-4 ${color} rounded-full p-1`}></span>
          ))}
          <div className={baseStyle}>
            <ChevronLeft color="gray" />
            <ChevronRight color="gray" opacity="0.5" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={baseStyle}>
          <Share color="gray" size={20} />
          <Plus color="gray" size={20} />
        </div>
      </div>

      <Image
        src="/assets/images/get-start.png"
        alt="Home Image"
        width={1400}
        height={1400}
        className="w-4/5 h-auto border rounded-b-xl"
      />
    </div>
  );
}
