import GalleryItem from "@/src/components/ui/solutions-box-item";
import UserTracking from "./components/user-tracking";
import { useSolutionsContext } from "@/src/context/solutions-context";

export default function TimeTracking() {
  const {setIsHover } = useSolutionsContext();

  return (
    <GalleryItem
      itemTitle="Time Tracking"
      className="col-span-7 lg-md:col-span-3 overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex-center flex-col gap-12">
        <UserTracking
          src="/assets/images/time-tracking/male-user-on.png"
          direction="right"
        />
        <UserTracking
          src="/assets/images/time-tracking/female-user-on.png"
          direction="left"
        />
      </div>
    </GalleryItem>
  );
}
