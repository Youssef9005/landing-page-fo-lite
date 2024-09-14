"use client";
import GalleryItem from "@/src/components/ui/solutions-box-item";
import SectionBottomTitle from "@/src/components/ui/section-bottom-title";
import OptionList from "./components/option-list/index";
import MenuHeader from "./components/menu-header";

export default function AvailabilityLevels() {
  return (
    <GalleryItem
      itemTitle="Availability Levels"
      className="col-span-7 lg-md:col-span-2"
    >
      <div className="container flex-between flex-col h-full">
        <div className="w-full flex-center flex-col gap-y-5">
          <MenuHeader />

          <OptionList />
        </div>

        <SectionBottomTitle>
          The ability to video call, voice chat, and send texts is available for
          you.
        </SectionBottomTitle>
      </div>
    </GalleryItem>
  );
}
