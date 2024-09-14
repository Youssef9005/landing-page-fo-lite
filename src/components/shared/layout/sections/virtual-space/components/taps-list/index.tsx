import React from "react";

interface ButtonListProps {
  items: { title: string }[];
  activeIndex: number;
  onClick: (index: number) => void;
}

export default function TapList({
  items,
  activeIndex,
  onClick,
}: ButtonListProps) {
  return (
    <ul className="flex-center flex-wrap gap-3 md:gap-7">
      {items.map((item, index) => (
        <li
          key={index}
          className={`font-medium cursor-pointer px-4 py-2 transition-all ${
            activeIndex === index
              ? "text-black border-b"
              : "hover:text-black text-gray-400"
          }`}
          onClick={() => onClick(index)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
