import { motion } from "framer-motion";
import TimeTrackingHeader from "../header";
import CardStatus from "../card-status";
import UserImage from "../user-image";
import { TimeTrackingDirection } from "@/src/types/time-tracking-direction";
import { useSolutionsContext } from "@/src/context/solutions-context";

interface Props extends TimeTrackingDirection {
  src: string;
}

export default function UserTracking({ src, direction }: Props) {
  const {isHover} = useSolutionsContext();

  return (
    <motion.div
      initial={direction === "left" ? { x: -300 } : { x: 100 }}
      animate={{ x: 0 }}

      whileHover={{
        x: direction === "left" ? (isHover ? 100 : 0) : (isHover ? -100 : 0),
        scale: isHover ? 1.05 : 1
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`flex-center flex-col ${
        direction === "left" ? "md:flex-row-reverse" : "md:flex-row"
      } gap-x-4 gap-y-10 relative`}
    >
      <motion.div
        className="flex flex-col gap-3 z-10"

        style={{ 
          scale: isHover ? 1.1 : 1,
          x: direction === "left" ? (isHover ? 50 : 0) : (isHover ? -50 : 0)
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <TimeTrackingHeader direction={direction} />

        <motion.div style={{ scale: isHover ? 1.1 : 1 }}>
          <CardStatus direction={direction} />
        </motion.div>
      </motion.div>

      <UserImage src={src} alt="User Image" />
    </motion.div>
  );
}
