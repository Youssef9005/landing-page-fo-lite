export default function GetStartOverlay() {
  const baseStyle =
    "absolute top-[81%] hidden lg:block -z-50 w-80 h-80 rounded-full p-1 shadow-3xl";

  return (
    <>
      <div className="grid-overlay w-1/2 -z-50"></div>
      <div
        className={`${baseStyle} right-52 bg-main-color/40 shadow-main-color`}
      ></div>
      <div
        className={`${baseStyle} left-52 bg-second-color/40 shadow-second-color`}
      ></div>
    </>
  );
}
