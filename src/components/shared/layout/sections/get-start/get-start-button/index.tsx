import { MoveRight } from "lucide-react";

export default function GetStartButton() {
  return (
    <button className="py-3 px-6 rounded-lg bg-main-color transition-colors hover:bg-second-color text-white font-semibold flex-center gap-x-3">
      Try Cotopia now <MoveRight />
    </button>
  );
}
