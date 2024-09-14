"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { showMsgType, SolutionsContextType } from "../types/solutions-context";
import { OptionType } from "../types/availability-levels-options";
import { options } from "../components/shared/layout/sections/solutions/components/solutions-gallery/availability-levels/components/option-list";

const SolutionsContext = createContext<SolutionsContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export default function SolutionsWrapper({ children }: Props) {
  // Planning Component State
  const [showMsg, setShowMsg] = useState<showMsgType>({
    projectStatus: "",
    show: false,
  });

  // Availability Levels Component State
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0]);

  // Time Tracking Component State 
  const [isHover , setIsHover] = useState<boolean>(false)


  return (
    <SolutionsContext.Provider
      value={{
        showMsg,
        setShowMsg,
        menuOpen,
        setMenuOpen,
        selectedOption,
        setSelectedOption,
        isHover, 
        setIsHover
      }}
    >
      {children}
    </SolutionsContext.Provider>
  );
}

export function useSolutionsContext() {
  const context = useContext(SolutionsContext);

  if (context === undefined) {
    throw new Error(
      "useSolutionsContext must be used within a SolutionsWrapper"
    );
  }
  return context;
}
