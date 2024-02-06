import HeaderTab from "@/components/Tabs/HeaderTab";
import CardProject from "@/components/Cards/CardProject";
import { TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import  useStore  from "@/lib/store";

export default function TabsMain() {
  const token = useStore();
  const [projects, setProjects] = useState([]);
  var bearer = 'Bearer ' + token.token;

  const getProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/projects", {
        method: "GET",
        headers: {
          "Authorization": bearer,
          "Content-Type": "application/json",
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
        {projects.map((project: {_id: string, title: string, createdAt: string, description: string, projectManager: string, competences: string}) => {
        const dateObject = new Date(project.createdAt);
        const day = dateObject.getDate().toString().padStart(2, '0');
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObject.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
          return (
            <CardProject
              key={project._id}
              title={project.title}
              date={formattedDate}
              description={project.description}
              owner={project.projectManager}
              skills={project.competences}
            />
          );
        })}
      </div>
    </TabsContent>
  );
}
