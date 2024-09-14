import { Github } from "lucide-react";

export default function GitHubContainer() {
  const baseStyle = "absolute w-0 h-0";
  const rightArrow =
    "border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white left-full top-1/2 -translate-y-1/2";
  const bottomArrow =
    "border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white bottom-full left-1/2 -translate-x-1/2 top-full";

  return (
    <div className="relative flex-center gap-x-2 bg-white shadow-lg py-2 px-3 rounded-lg border border-gray-200">
      <Github className="bg-gray-700 w-8 h-8 rounded-lg p-1 text-white" />

      <span className="text-gray-700 font-medium text-lg">Start</span>

      <div className={`${baseStyle} ${rightArrow} hidden sm:block`} />
      <div className={`${baseStyle} ${bottomArrow} sm:hidden`} />
    </div>
  );
}
