import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import useStore from "@/lib/store";
import RedirectPageAuth from "@/pages/RedirectPageAuth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    bearerToken,
    username,
    firstLetterUsername,
    setToken,
    isLoading,
    setIsLoading,
  } = useStore();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
          Authorization: bearerToken,
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

  const handleChangeUserInfos = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleEditUser = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: bearerToken,
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
        }),
      });

      if (response.ok) {
        toast.success("Informations mises à jour avec succès");
      } else {
        console.error("Error:", response.status);
        toast.error("Erreur lors de la mise à jour des informations");
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const displayProfileInfos = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: bearerToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
      } else {
        console.error("Error:", response.status);
        toast.error("Erreur lors de la récupération des informations");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    displayProfileInfos();
  }, []);

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
          <Label htmlFor="firstName">Prénom : </Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full my-2 placeholder:text-muted-foreground text-muted-foreground focus:text-primary-foreground"
            value={firstName}
            defaultValue={firstName}
            placeholder={`${firstName}`}
            onChange={handleChangeUserInfos}
          />
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="lastName"> Nom : </Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full my-2 placeholder:text-muted-foreground text-muted-foreground focus:text-primary-foreground"
            value={lastName}
            defaultValue={lastName}
            placeholder={`${lastName}`}
            onChange={handleChangeUserInfos}
          />
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="email">Email : </Label>
          <Input
            type="email"
            className="w-full my-2 placeholder:text-muted-foreground text-muted-foreground focus:text-primary-foreground"
            id="email"
            name="email"
            value={email}
            defaultValue={email}
            placeholder={`${email}`}
            onChange={handleChangeUserInfos}
          />
        </div>
        <div className="flex-row-center-between w-1/4 gap-4">
          <Button size={"lg"} onClick={handleEditUser} variant={"outline"}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Modifier
          </Button>
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
