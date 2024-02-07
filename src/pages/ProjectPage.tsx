import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";

import { Icons } from "@/components/ui/icons";
import useStore from "@/lib/store";
import RedirectPageAuth from "@/pages/HomePage";
import { Button } from "@/components/ui/button";

export default function ProjectPage() {
  const { token, isLoading, setIsLoading, bearerToken } = useStore();
  const [nameProject, setNameProject] = useState("");
  const [descriptionProject, setDescriptionProject] = useState("");
  const [projectManagerName, setProjectManagerName] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [projectManagerEmail, setProjectManagerEmail] = useState("");
  const navigate = useNavigate();
  const { projectId } = useParams();

  if (!token) {
    return <RedirectPageAuth />;
  }

  const formatCreatedAtDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleProjectInfos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/projects/${projectId}`,
        {
          method: "GET",
          headers: {
            Authorization: bearerToken,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      data.createdAt = formatCreatedAtDate(data.createdAt);
      setNameProject(data.title);
      setDescriptionProject(data.description);
      setCreatedAt(data.createdAt);
      setProjectManagerName(data.projectManager);
      setProjectManagerEmail(data.managerEmail);
      setIsLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinProject = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/users/${projectId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: bearerToken,
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/");
      toast.success("Vous faîtes maintenant partie de l'aventure !");
      setIsLoading(false);
    } catch (error) {
      toast.error("Erreur lors de la demande de participation au projet");
      console.error("Erreur lors de la récupération des projets :", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeStatusProject = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/projects/status`,
        {
          method: "PATCH",
          headers: {
            Authorization: bearerToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ projectId: projectId, status: "finish" }),
        }
      );

      if (!response.ok) {
        console.error("Error:", response.status);
        toast.error("Vous n'avez pas les droits pour fermer ce projet");
      } else {
        navigate("/");
        toast.success("Le projet est maintenant terminé !");
      }
      setIsLoading(false);
    } catch (error) {
      toast.error("Erreur lors de la demande de participation au projet");
      console.error("Erreur lors de la récupération des projets :", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleProjectInfos();
  }, []);

  return (
    <section className="w-screen h-full p-4">
      <div className="tabs-content-dashboard">
        <div className="tabs-content-header">
          <div className="tabs-content-header-title rounded-lg w-12 h-12 hover:bg-secondary/80 flex-row-center-center hover:cursor-pointer">
            <Link to={"/"} className="w-12 h-12 flex-col-center-center">
              <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
            </Link>
          </div>
          <div className="my-10 flex-col-start-start gap-6">
            <h1 className="text-6xl font-semibold">{nameProject}</h1>
            <p className={`text-muted-foreground font-light text-base `}>
              Projet crée par {projectManagerName} le {createdAt}
            </p>
            <p className="text-xl font-normal max-w-10xl">
              {descriptionProject}
            </p>
          </div>
          <div className="w-full h-full flex-col-start-center gap-8 mt-12">
            <h2 className="text-4xl font-semibold">
              Envie de rejoindre l'aventure ?
            </h2>
            <div className="w-auto h-auto flex-row-start-start gap-4">
              <Button
                size={"lg"}
                onClick={handleJoinProject}
                disabled={isLoading}
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Postuler
              </Button>
              <Button
                size={"lg"}
                variant={"outline"}
                disabled={isLoading}
                onClick={() =>
                  (window.location.href = `mailto:${projectManagerEmail}`)
                }
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Contacter le créateur
              </Button>
              <Button
                size={"lg"}
                variant={"outline"}
                disabled={isLoading}
                onClick={handleChangeStatusProject}
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Fermer le projet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
