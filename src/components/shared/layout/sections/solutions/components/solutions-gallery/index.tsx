"use client";
import SolutionsWrapper from "@/src/context/solutions-context";
import AvailabilityLevels from "./availability-levels";
import OnlineMeetings from "./online-meetings";
import Planning from "./planning";
import TaskManagement from "./task-management";
import TimeTracking from "./time-tracking";

function SolutionsGallery() {
  return (
    <SolutionsWrapper>
      <div className="container p-4 mx-auto flex flex-col gap-5 lg-md:grid lg-md:grid-cols-7 lg-md:gap-5">
        <OnlineMeetings />
        <TimeTracking/>
        <TaskManagement />
        <AvailabilityLevels />
        <Planning />
      </div>
    </SolutionsWrapper>
  );
}

export default SolutionsGallery;
