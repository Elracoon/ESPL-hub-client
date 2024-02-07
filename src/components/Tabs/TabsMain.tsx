import HeaderTab from "@/components/Tabs/HeaderTab";
import CardProject from "@/components/Cards/CardProject";
import { TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import useStore from "@/lib/store";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const cardsPerPage = 6;

export default function TabsMain() {
  const token = useStore();
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  var bearer = 'Bearer ' + token.token;

  const getProjects = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/add`, {
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

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const projectsToDisplay = projects.slice(startIndex, endIndex);
  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const numTabsToShow = 3;
  let startTabIndex = currentPage - Math.floor(numTabsToShow / 2);
  let endTabIndex = startTabIndex + numTabsToShow - 1;
  startTabIndex = Math.max(1, startTabIndex);
  endTabIndex = Math.min(totalPages, endTabIndex);
  const tabsToShow = Array.from({ length: endTabIndex - startTabIndex + 1 }, (_, index) => startTabIndex + index);

  return (
    <TabsContent value="projets" className="tabs-content-dashboard">
      <div className="w-full h-auto pt-2 pb-10 text-2xl flex-col-start-start gap-4 font-semibold">
        <HeaderTab
          title="Projets"
          description="Consultez les derniers projets publiés et commencez dès maintenant à répondre à des offres"
        />
      </div>
      <div className="flex-row-center gap-4 flex-wrap">
        {projectsToDisplay.map((project: {_id: string, title: string, createdAt: string, description: string, projectManager: string, competences: string}) => {
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
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              />
            </PaginationItem>
            {tabsToShow.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </TabsContent>
  );
}
