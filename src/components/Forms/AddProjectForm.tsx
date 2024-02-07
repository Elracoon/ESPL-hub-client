import { useState, ChangeEvent } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import useStore from "@/lib/store";
import loading from "@/lib/loading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/ui/icons";

export default function AddProjectForm() {
  const { isLoading, setIsLoading, bearerToken } = useStore();
  const [responseString, setResponseString] = useState<string>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    setIsLoading(true);
    await loading(2000);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/projects/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: bearerToken,
          },
          body: JSON.stringify({
            title: title,
            description: description,
          }),
        }
      );

      if (response.ok) {
        navigate("/", { replace: true });
        toast.success("Projet créé avec succès");
      } else {
        console.error("Error:", response.status);
        toast.error("Erreur lors de la création du projet");
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"}>Create +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Créez un projet</DialogTitle>
          {responseString}
          <DialogDescription>Décrivez votre projet</DialogDescription>
        </DialogHeader>
        <div className="grid gap-5 py-4">
          <div className="flex-col-start-center gap-3">
            <Label htmlFor="title" className="text-right">
              Titre
            </Label>
            <Input
              name="title"
              placeholder="Titre"
              className="col-span-3"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="flex-col-start-center gap-3">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              name="description"
              className="col-span-3"
              placeholder="Description"
              value={description}
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleCreateProject}
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}{" "}
            Créer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
