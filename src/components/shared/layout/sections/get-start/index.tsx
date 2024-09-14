import GetStartButton from "./get-start-button";
import GetStartImg from "./get-start-img";
import GetStartOverlay from "./get-start-overlay";
import GetStartTitle from "./get-start-title";

export default function GetStart() {
  return (
    <section id="#" className="w-full my-8 flex items-center flex-col gap-y-7">
      <GetStartTitle />
      <GetStartOverlay />
      <GetStartButton />
      <GetStartImg />
    </section>
  );
}
