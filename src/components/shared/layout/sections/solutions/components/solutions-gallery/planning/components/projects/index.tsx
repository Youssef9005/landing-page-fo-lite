import { useSolutionsContext } from "@/src/context/solutions-context";
import OverlaySection from "../overlay-section";
import ProjectStatus from "../project-status";

export default function ProjectsStatus() {
  const { showMsg, setShowMsg } = useSolutionsContext();

  function handleShowMsg(msgType: string) {
    setShowMsg({ show: true, projectStatus: msgType });
  }

  return (
    <div className="flex-center flex-wrap md:flex-row p-2 gap-7 md:gap-5 w-full">
      {showMsg.show && <OverlaySection />}

      <ProjectStatus
        title="on track"
        bgColor="bg-green-500"
        className="hover:bg-green-500 border-green-500 text-green-500"
        onClick={() => handleShowMsg("on track")}
      />

      <ProjectStatus
        title="at risk"
        bgColor="bg-yellow-500"
        className="hover:bg-yellow-500 border-yellow-500 text-yellow-500"
        onClick={() => handleShowMsg("at track")}
      />
      <ProjectStatus
        title="off track"
        bgColor="bg-red-500"
        className="hover:bg-red-500 border-red-500 text-red-500"
        onClick={() => handleShowMsg("off track")}
      />
    </div>
  );
}
