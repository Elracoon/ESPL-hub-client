import HeaderTab from "@/components/Tabs/HeaderTab";
import CardProject from "@/components/Cards/CardProject";
import { TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import  useStore  from "@/lib/store";

export default function TabsMain() {
  const token = useStore();
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/projects", {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
    }
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
        {projects.map((project: { _id: string; title: string; createdAt: any; description: string; projectManager: string; competences: string[] }) => (
          <CardProject
            key={project._id}
            title={project.title}
            date={project.createdAt}
            description={project.description}
            owner={project.projectManager}
            skills={project.competences}
          />
        ))}
      </div>
    </TabsContent>
  );
}
