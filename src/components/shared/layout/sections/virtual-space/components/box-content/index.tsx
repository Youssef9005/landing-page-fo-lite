import React from "react";
import Image from "next/image";

interface ContentBoxProps {
  content: string;
  imageSrc: string;
  title: string;
}

function ContentBox({ content, imageSrc, title }: ContentBoxProps) {
  return (
    <div className="flex-between flex-col md:flex-row-reverse gap-5 p-5 w-full max-w-4xl rounded-lg bg-gray-50">
      <div className="relative w-full h-64 md:h-96 md:w-1/2">
        <Image
          src={imageSrc}
          alt="Virtual Space"
          layout="fill"
          objectFit="contain"
          className="rounded-md"
        />
      </div>

      <div className="flex-1 w-full text-center md:text-left">
        <h1 className="text-base font-medium">{content}</h1>
        <button className="my-5 rounded-lg text-white font-semibold text-sm bg-blue-700 py-3 px-5">
          Discover {title} preview
        </button>
      </div>
    </div>
  );
}

export default ContentBox;
