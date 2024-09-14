import React from "react";
import SolutionsHeader from "./components/solutions-header";
import SolutionsContent from "./components/solutions-content";

function SolutionsSection() {
  return (
    <section id="use-cases" className="p-3 flex-center mt-20">

      <div className="container mx-auto p-3 bg-gray-200 rounded-lg flex-center flex-col gap-y-4">
        <SolutionsHeader />
        <SolutionsContent />
      </div>
      
    </section>
  );
}

export default SolutionsSection;
