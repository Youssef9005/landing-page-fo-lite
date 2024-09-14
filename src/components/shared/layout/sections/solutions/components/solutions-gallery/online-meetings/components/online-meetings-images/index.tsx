import Image from "next/image";
import React, { ReactNode } from "react";

interface MeetingsImageProps {
  children: ReactNode;
  imageSrc: string;
}

function MeetingsImage({ children, imageSrc }: MeetingsImageProps) {
  return (
    <div className="relative md:top-14">
      <Image
        src={imageSrc}
        alt="User Avatar Image"
        width={315}
        height={200}
        className="object-cover rounded-md"
      />
      {children}
    </div>
  );
}

export default MeetingsImage;
