import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionBottomTitle(props: Props) {
  return (
    <p className="flex-center flex-col md:flex-row text-xs text-gray-900 font-medium mt-2">
      {props.children}
      <ArrowRight
        color="white"
        className="w-8 h-6 rounded-lg bg-gray-700 p-1 mt-2 md:mt-0 md:ml-2"
      />
    </p>
  );
}
