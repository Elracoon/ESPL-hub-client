import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import useStore from "@/lib/store";

import RedirectPageAuth from "@/pages/RedirectPageAuth";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Nav from "@/components/Header/Nav";
import { Icons } from "@/components/ui/icons";

export default function Profile() {
  const {
    token,
    username,
    firstLetterUsername,
    setToken,
    isLoading,
    setIsLoading,
  } = useStore();
  const navigate = useNavigate();

  if (!token) {
    return <RedirectPageAuth />;
  }

  const handleDeleteAccount = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (response.ok) {
        navigate("/");
        toast.success("Compte supprimé avec succès");
        setToken("");
        setIsLoading(false);
      } else {
        console.error("Error:", response.status);
        toast.error("Erreur lors de la suppression du compte");
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeconnetUser = async () => {
    setIsLoading(true);
    setToken("");
    navigate("/");
    setIsLoading(false);
  };

  return (
    <section className="w-screen h-full p-4">
      <Nav></Nav>
      <div className="tabs-content-dashboard flex-col-center-center text-center w-1-4 h-full gap-4">
        <div className="flex-col-center-center gap-4 mt-8">
          <Avatar>
            <AvatarFallback>{firstLetterUsername}</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-semibold">Hello {username} !</h1>
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="lastname"> Nom : </Label>
          <Input type="text" className="w-full my-2" />
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="name">Prénom : </Label>
          <Input type="text" className="w-full my-2" />
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="email">Email : </Label>
          <Input type="email" className="w-full my-2" />
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="passworld">Mot de passe :</Label>
          <Input type="password" className="w-full my-2" />
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="status">Statut</Label>
          <Select>
            <SelectTrigger className="w-full my-2">
              <SelectValue placeholder="Votre statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Statut</SelectLabel>
                <SelectItem value="student">Etudiant</SelectItem>
                <SelectItem value="teacher">Intervenant</SelectItem>
                <SelectItem value="company">Entreprise</SelectItem>
                <SelectItem value="association">Association</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="theme">Thème :</Label>
          <ModeToggle></ModeToggle>
        </div>
        <div className="flex-row-center-center w-1/4 gap-4">
          <Button size={"lg"} onClick={handleDeconnetUser}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Déconnexion
          </Button>
          <AlertDialog>
            <AlertDialogTrigger>
              {" "}
              <Button variant={"destructive"} size={"lg"}>
                Supprimer son compte
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Êtes-vous sur ?</AlertDialogTitle>
                <AlertDialogDescription>
                  Cette action est irréversible, vous ne pourrez pas récupérer
                  votre compte une fois supprimé
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteAccount}>
                  Supprimer son compte
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
}
