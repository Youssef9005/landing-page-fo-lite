import { SectionTitleProps } from "@/src/types/sections-title";

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div className="flex-center flex-col gap-y-4">
      <span className="text-sm flex-center gap-x-3 p-2 shadow-xl rounded-xl bg-white w-fit font-medium">
        {props.children}
      </span>
      <h1 className="text-5xl font-medium">{props.mainTitle}</h1>
    </div>
  );
}
