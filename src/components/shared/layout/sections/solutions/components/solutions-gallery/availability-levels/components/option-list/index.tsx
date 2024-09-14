import { motion } from "framer-motion";
import OptionListItem from "../option-list-item";
import { useSolutionsContext } from "@/src/context/solutions-context";
import { OptionType } from "@/src/types/availability-levels-options";
import { Mic, TypeOutline, Video } from "lucide-react";

const variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.5 },
  },
};


export const options: OptionType[] = [
  {
    icon: <Video />,
    text: "Video Call",
    color: "text-gray-300",
    hoverTextColor: "hover:text-main-color",
    hoverBgColor: "hover:bg-main-color/15",
  },
  {
    icon: <Mic />,
    text: "Voice Call",
    color: "text-gray-300",
    hoverTextColor: "hover:text-red-500",
    hoverBgColor: "hover:bg-red-500/15",
  },
  {
    icon: <TypeOutline />,
    text: "Text Message",
    color: "text-gray-300",
    hoverTextColor: "hover:text-yellow-500",
    hoverBgColor: "hover:bg-yellow-500/15",
  },
];

export default function OptionList() {
  const { menuOpen } = useSolutionsContext();

  return (
    <motion.ul
      className="flex flex-col gap-y-3 border rounded-md overflow-hidden w-full"
      initial="closed"
      animate={menuOpen ? "open" : "closed"}
      variants={variants}
    >
      {options.map((option) => (
        <OptionListItem key={option.text} option={option} />
      ))}
    </motion.ul>
  );
}
