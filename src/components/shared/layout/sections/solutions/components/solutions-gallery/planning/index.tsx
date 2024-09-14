import React from "react";
import GalleryItem from "@/src/components/ui/solutions-box-item";
import ProjectsStatus from "./components/projects";
import SectionBottomTitle from "@/src/components/ui/section-bottom-title";
import { useSolutionsContext } from "@/src/context/solutions-context";

export default function Planning() {
  const { showMsg } = useSolutionsContext();

  return (
    <GalleryItem itemTitle="Planning" className="col-span-7 lg-md:col-span-3">
      <div className="relative w-full h-full border rounded-lg p-3 flex flex-col gap-y-3">
        <h1 className="text-gray-800 font-medium text-base md:text-lg">
          What is your job&apos;s description?
        </h1>

        <textarea
          className="border rounded-md p-2 resize-none w-full"
          rows={4}
          placeholder="Tell us, how this project is going"
          value={showMsg.show ? "Dive into the dynamic world of UI design with our comprehensive guide that explores the principles, trends, and techniques shaping user interfaces today. Uncover the secrets behind" : ""}
        />

        <ProjectsStatus />
      </div>

      <SectionBottomTitle>
        Monitors how long tasks take, aiding in productivity and time management.
      </SectionBottomTitle>
    </GalleryItem>
  );
}
