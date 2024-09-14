import { TimeTrackingDirection } from "@/src/types/time-tracking-direction";
import CardStatusContent from "../card-status-content";
import CardStatusHeader from "../card-status-header";

export default function CardStatus({ direction = "right" }: TimeTrackingDirection) {
  return (
    <div className="w-full shadow-lg rounded-md p-2 border">
      <CardStatusHeader direction={direction} />
      <CardStatusContent direction={direction} />
    </div>
  );
}
