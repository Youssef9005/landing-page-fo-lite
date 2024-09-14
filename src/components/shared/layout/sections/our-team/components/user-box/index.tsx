import React from "react";
import Image from "next/image";

interface TeamBoxProps {
  imgSrc: string;
  name: string;
  job: string;
}

export default function UserBox({ imgSrc, name, job }: TeamBoxProps) {
  return (
    <div className="h-[350px] flex-center flex-col">
      <div className="relative w-full h-full">
        <Image
          src={imgSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="h-full w-full rounded-lg grayscale hover:grayscale-0 cursor-pointer transition-all duration-300"
        />

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-200 p-2 rounded-md w-11/12">
          <h1 className="text-lg font-medium">{name}</h1>
          <p className="text-sm text-gray-600">{job}</p>
        </div>
      </div>
    </div>
  );
}