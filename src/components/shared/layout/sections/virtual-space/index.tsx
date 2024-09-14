"use client";
import React, { useState } from "react";
import { Package } from "lucide-react";
import ContentBox from "./components/box-content";
import { virtualSpaceContentList as contentList } from "@/src/utils/virtual-space-content";
import TapList from "./components/taps-list";

export default function VirtualSpaces() {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseStyle =
    "absolute top-1/2 none md:flex hidden md:block -translate-x-1/2 z- w-80 h-80 rounded-full p-2 shadow-3xl";

  function handleButtonClick(index: number) {
    setActiveIndex(index);
  }

  return (
    <section id="virtual-space" className="relative p-10 flex-center flex-col gap-y-10 bg-gray-200 w-full">
      <div className="flex-center flex-col gap-y-7 text-center">
        <div className="grid-overlay w-full z-10 -translate-x-1/2"></div>

        <div
          className={`${baseStyle} right-20  bg-main-color/40 shadow-main-color`}
        ></div>
        <div
          className={`${baseStyle} left-[400px]  bg-main-color/40 shadow-main-color`}
        ></div>

        <span className="flex-center gap-x-3 p-2 shadow-xl rounded-xl bg-white w-fit font-medium z-50">
          <Package size={20} /> Ready-to-use
        </span>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Pre-Made Virtual Space
        </h1>
      </div>

      <div className="w-full max-w-4xl flex-center flex-col gap-y-5 bg-white p-3 rounded-lg shadow-md z-50">
        <TapList
          items={contentList}
          activeIndex={activeIndex}
          onClick={handleButtonClick}
        />

        <ContentBox
          title={contentList[activeIndex].title}
          content={contentList[activeIndex].content}
          imageSrc={contentList[activeIndex].imagesSrc}
        />
      </div>
    </section>
  );
}
