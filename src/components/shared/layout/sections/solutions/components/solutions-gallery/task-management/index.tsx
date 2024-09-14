"use client";
import GalleryItem from "@/src/components/ui/solutions-box-item";
import BarChart from "./components/chart";
import SectionBottomTitle from "@/src/components/ui/section-bottom-title";

export default function TaskManagement() {
  return (
    <GalleryItem
      itemTitle="Task Management"
      className="col-span-7 lg-md:col-span-2"
    >
      <div className="flex flex-col h-full p-2 gap-y-4">
        <div className="flex-1">
          <BarChart />
        </div>


        <SectionBottomTitle>
          Monitors how long tasks take, aiding in productivity and time
          management.
        </SectionBottomTitle>
      </div>
    </GalleryItem>
  );
}
