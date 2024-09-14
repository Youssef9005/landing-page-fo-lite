import { GalleryItemType } from "@/src/types/solutions-box-item";

function GalleryItem({ itemTitle, className, children , onMouseEnter , onMouseLeave}: GalleryItemType) {
  return (
    <div
      className={`border bg-white rounded-lg shadow-lg p-4 md:p-5 ${className} flex flex-col gap-y-4 w-full h-full`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h1 className="text-xl md:text-2xl font-medium">{itemTitle}</h1>
      {children}
    </div>
  );
}

export default GalleryItem;
