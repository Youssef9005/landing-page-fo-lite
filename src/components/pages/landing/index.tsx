import GetStart from "../../shared/layout/sections/get-start";
import OpenSource from "../../shared/layout/sections/open-source";
import OurTeamSection from "../../shared/layout/sections/our-team";
import SolutionsSection from "../../shared/layout/sections/solutions";
import VirtualSpaces from "../../shared/layout/sections/virtual-space";

export default function LandingPage() {
  return (
    <>
      <GetStart />
      <SolutionsSection />
      <OpenSource />
      <VirtualSpaces />
      <OurTeamSection />
    </>
  );
}
