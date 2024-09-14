export default function NumberContainer() {
  const baseStyle = "absolute w-0 h-0";
  const leftArrow =
    "border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white right-full top-1/2 -translate-y-1/2";
  const upArrow =
    "border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white left-1/2 -translate-x-1/2 bottom-full";

  return (
    <div className="relative text-gray-700 bg-white py-3 px-5 rounded-lg shadow-lg font-medium">
      25

      <div className={`${baseStyle} ${leftArrow} hidden sm:block`} />
      <div className={`${baseStyle} ${upArrow} sm:hidden`} />
    </div>
  );
}
