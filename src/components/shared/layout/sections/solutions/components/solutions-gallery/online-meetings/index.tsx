"use client";

import GalleryItem from "@/src/components/ui/solutions-box-item";
import { useInView } from "react-intersection-observer";
import MaleUserImage from "./components/male-user-image/index"
import FemaleUserImage from "./components/female-user-image/index"


function OnlineMeetings() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <GalleryItem
      className="col-span-7 lg-md:col-span-4"
      itemTitle="Online Meetings"
    >
      <div ref={ref} className="flex-center flex-wrap gap-x-3 gap-y-4">
        {inView && (
          <>
            <MaleUserImage />
            <FemaleUserImage />
          </>
        )}
      </div>
    </GalleryItem>
  );
}

export default OnlineMeetings;