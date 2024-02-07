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

export default function TabsMain() {
  const cardsPerPage = 6;
  const { bearerToken, isLoading, setIsLoading } = useStore();
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/projects`,
        {
          method: "GET",
          headers: {
            Authorization: bearerToken,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setProjects(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const projectsCopy = Array.isArray(projects) ? projects.slice().reverse() : [];
  const projectsToDisplay = projectsCopy.slice(startIndex, endIndex);
  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const numTabsToShow = 3;

  let startTabIndex = currentPage - Math.floor(numTabsToShow / 2);
  let endTabIndex = startTabIndex + numTabsToShow - 1;
  startTabIndex = Math.max(1, startTabIndex);
  endTabIndex = Math.min(totalPages, endTabIndex);

  if (totalPages <= numTabsToShow) {
    startTabIndex = 1;
    endTabIndex = totalPages;
  } else {
    startTabIndex = Math.max(1, startTabIndex);
    endTabIndex = Math.min(totalPages, endTabIndex);

    if (currentPage <= Math.ceil(numTabsToShow / 2)) {
      startTabIndex = 1;
      endTabIndex = numTabsToShow;
    } else if (currentPage >= totalPages - Math.floor(numTabsToShow / 2)) {
      startTabIndex = totalPages - numTabsToShow + 1;
      endTabIndex = totalPages;
    }
  }

  const tabsToShow = Array.from(
    { length: endTabIndex - startTabIndex + 1 },
    (_, index) => startTabIndex + index
  );

  return (
    <TabsContent value="projets" className="tabs-content-dashboard">
      <div className="w-full h-auto pt-2 pb-10 text-2xl flex-col-start-start gap-4 font-semibold">
        <HeaderTab
          title="Projets"
          description="Consultez les derniers projets publiés et commencez dès maintenant à répondre à des offres"
        />
      </div>
      <div className="flex-row-center gap-4 flex-wrap">
        {projectsToDisplay.map(
          (project: {
            _id: string;
            title: string;
            createdAt: string;
            description: string;
            projectManager: string;
            competences: string;
          }) => {
            const dateObject = new Date(project.createdAt);
            const day = dateObject.getDate().toString().padStart(2, "0");
            const month = (dateObject.getMonth() + 1)
              .toString()
              .padStart(2, "0");
            const year = dateObject.getFullYear();
            const formattedDate = `${day}/${month}/${year}`;

            return (
              <CardProject
                key={project._id}
                id={project._id}
                title={project.title}
                date={formattedDate}
                description={project.description}
                owner={project.projectManager}
                skills={project.competences}
              />
            );
          }
        )}
      </div>
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer select-none"
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
                  className="cursor-pointer select-none"
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                className="cursor-pointer select-none"
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
