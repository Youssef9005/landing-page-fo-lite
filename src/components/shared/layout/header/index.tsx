"use client";
import { useState } from "react";
import useWindowSize from "@/src/hooks/use-window-size";
import CotopiaLogo from "../../logo";
import { Menu, X } from "lucide-react";
import HeaderContent from "./header-content";
import { motion } from "framer-motion";

function Header() {
  const { windowSize } = useWindowSize();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbar() {
    setIsNavbarOpen(function(prev) {
      return !prev;
    });
  }

  const iconVariants = {
    open: { rotate: 360, opacity: 1, scale: 1 },
    closed: { rotate: 0, opacity: 1, scale: 1 },
  };

  return (
    <header className="relative w-full flex-between p-2">
      <CotopiaLogo logoTitle={true} />
      {windowSize.windowWidth <= 750 ? (
        <>
          <button
            onClick={toggleNavbar}
            className="h-8 w-8 rounded-full bg-slate-50 flex-center"
            aria-label={isNavbarOpen ? "Close navigation" : "Open navigation"}
          >
            <motion.div
              key={isNavbarOpen ? "x" : "menu"}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: isNavbarOpen ? 360 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {isNavbarOpen ? <X /> : <Menu />}
            </motion.div>
          </button>
          {isNavbarOpen && <HeaderContent />}
        </>
      ) : (
        <HeaderContent />
      )}
    </header>
  );
}

export default Header;
