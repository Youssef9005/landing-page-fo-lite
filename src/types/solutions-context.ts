import { Dispatch, SetStateAction } from "react";
import { OptionType } from "./availability-levels-options";

export interface showMsgType {
  projectStatus: string;
  show: boolean;
}

export interface SolutionsContextType {
  setShowMsg: Dispatch<SetStateAction<showMsgType>>;
  showMsg: showMsgType;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  selectedOption: OptionType;
  setSelectedOption: Dispatch<SetStateAction<OptionType>>;
  setIsHover: Dispatch<SetStateAction<boolean>>;
  isHover : boolean;
}
