import React from "react";
import SectionTitle from "@/src/components/ui/sections-title";
import { Grid2X2 } from "lucide-react";

function SolutionsHeader() {
  return (
    <div className="flex-center flex-col gap-y-3 text-center">
      
      <SectionTitle mainTitle="We Deliver Solutions">
        <Grid2X2 /> Cotopia Tools
      </SectionTitle>
      
      <p className="text-base font-medium text-gray-800 mt-3 md:mt-4 lg:mt-5 xl:mt-3">
        Cotopia is a virtual space that provides you all the tools needed to
        <br /> communicate, work, and create fully remotely.
      </p>

    </div>
  );
}

export default SolutionsHeader;
