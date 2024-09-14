import { motion } from "framer-motion";

interface MessageBubbleProps {
  text: string;
  position: string;
  delay: number;
}

function MessageBubble({ text, position, delay }: MessageBubbleProps) {
  return (
    <motion.span
      className={`w-28 bg-white text-gray-700 font-medium p-1 rounded-md absolute text-[10px] ${position}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {text}
    </motion.span>
  );
}

export default MessageBubble;
