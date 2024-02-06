import HeaderTab from "@/components/Tabs/HeaderTab";
import CardProject from "@/components/Cards/CardProject";
import { TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

export default function TabsMain() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const response = await fetch("http://localhost:3000/projects/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <TabsContent value="projets" className="tabs-content-dashboard">
      <div className="w-full h-auto pt-2 pb-10 text-2xl flex-col-start-start gap-4 font-semibold">
        <HeaderTab
          title="Projets"
          description="Consultez les derniers projets publiés et commencez dès maintenant à répondre à des offres"
        />
      </div>
      <div className="flex-row-center gap-4 flex-wrap">
        {/* {projects.map((project) => (
          <CardProject
            title={project.title}
            date={project.date}
            description={project.description}
            owner={project.owner}
            skills={project.skills}
          />
        ))} */}
      </div>
    </TabsContent>
  );
}
