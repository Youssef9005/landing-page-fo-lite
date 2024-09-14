import { useSolutionsContext } from "@/src/context/solutions-context";
import { motion, AnimatePresence } from "framer-motion";
import StatusMessage from "../status-message";
import { X } from "lucide-react";

export default function OverlaySection() {
  const { setShowMsg, showMsg } = useSolutionsContext();

  function handleRemoveMsg() {
    setShowMsg({ show: false, projectStatus: "" });
  }

  return (
    <AnimatePresence>
      <div className="flex-center z-50 p-2 bg-gray-100/90 absolute inset-0 rounded-md">
        <motion.div
          className={`flex-between ${getBorderColor(
            showMsg.projectStatus
          )} ${getBackgroundColor(
            showMsg.projectStatus
          )} border p-4 w-full max-w-md rounded-md`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatusMessage projectStatus={showMsg.projectStatus} />
          <button
            aria-label="Close"
            className="flex-center p-1 rounded-full hover:bg-gray-200 transition duration-200"
            onClick={handleRemoveMsg}
          >
            <X size={18} className="text-black" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function getBorderColor(status: string) {
  if (status.includes("on")) return "border-green-500";
  if (status.includes("at")) return "border-yellow-500";
  return "border-red-500";
}

function getBackgroundColor(status: string) {
  if (status.includes("on")) return "bg-green-500/10";
  if (status.includes("at")) return "bg-yellow-500/10";
  return "bg-red-500/10";
}
