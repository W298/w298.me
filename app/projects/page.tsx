import ProjectCard from "../../components/ProjectCard";
import { CategoryData } from "../../components/interface/ProjectDataInterface";

async function getProjectData() {
  const projectDataResponse = await fetch(
    "https://gist.githubusercontent.com/W298/356810e641769c5be81a1b8f3e394936/raw/projectData.json",
    {
      cache: "force-cache",
    }
  );

  return projectDataResponse.json();
}

export default async function Page() {
  const projectData: CategoryData[] = await getProjectData();

  return (
    <div className="flex flex-col gap-16 pb-[85vh]">
      {projectData.map(({ categoryTitle, projectCardList }, index) => {
        return (
          <>
            {index != 0 && (
              <div className="my-4 bg-layer-200 w-full h-[1px]"></div>
            )}
            <div className="flex flex-col gap-5">
              <div className="text-xl font-bold">{categoryTitle}</div>
              {projectCardList.every(({ released }) => released != null) &&
                projectCardList.some(({ released }) => released) && (
                  <div className="font-semibold">Released</div>
                )}
              <div className="grid max-[1000px]:grid-cols-1 min-[1000px]:grid-cols-2 gap-8">
                {projectCardList
                  .filter(({ released }) => released)
                  .map((projectCardData) => {
                    return <ProjectCard data={projectCardData} />;
                  })}
              </div>
              {projectCardList.every(({ released }) => released != null) &&
                projectCardList.some(({ released }) => !released) && (
                  <div className="font-semibold pt-8">
                    Currently Developing 🛠️
                  </div>
                )}
              <div className="grid max-[1000px]:grid-cols-1 min-[1000px]:grid-cols-2 gap-8">
                {projectCardList
                  .filter(({ released }) => !released)
                  .map((projectCardData) => {
                    return <ProjectCard data={projectCardData} />;
                  })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
