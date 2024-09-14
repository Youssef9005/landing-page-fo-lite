import { ChevronDown, ChevronUp } from "lucide-react";
import { useSolutionsContext } from "@/src/context/solutions-context";

export default function MenuHeader() {
  const { menuOpen, setMenuOpen, selectedOption } = useSolutionsContext();

  function handleOpenMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  return (
    <div
      className="flex-between w-full p-3 border rounded-md cursor-pointer"
      onClick={handleOpenMenu}
    >
      <span
        className={`flex gap-x-2 font-medium ${selectedOption.hoverTextColor.replace(
          "hover:",
          ""
        )}`}
      >
        {selectedOption.icon} {selectedOption.text}
      </span>
      {menuOpen ? <ChevronUp /> : <ChevronDown />}
    </div>
  );
}
