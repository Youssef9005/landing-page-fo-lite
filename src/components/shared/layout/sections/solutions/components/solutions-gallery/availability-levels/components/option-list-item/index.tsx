import classNames from "classnames";
import { OptionType } from "@/src/types/availability-levels-options";
import { useSolutionsContext } from "@/src/context/solutions-context";

interface OptionListItemProps {
  option: OptionType;
}


export default function OptionListItem({ option }: OptionListItemProps) {
  const { setMenuOpen, setSelectedOption } = useSolutionsContext();
  const baseStyle =
    "p-3 flex gap-x-2 font-semibold transition-colors duration-300";

  const handleSelectOption = (option: OptionType) => {
    setSelectedOption(option);
    setMenuOpen(false);
    console.log(option.color, option.hoverTextColor, option.hoverBgColor);
  };

  return (
    <li
      className={classNames(
        baseStyle,
        option.color,
        option.hoverTextColor,
        option.hoverBgColor
      )}
      onClick={() => handleSelectOption(option)}
    >
      {option.icon} {option.text}
    </li>
  );
}
