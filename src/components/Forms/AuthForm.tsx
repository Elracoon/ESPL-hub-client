import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import useStore from "@/lib/store";
import loading from "@/lib/loading";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icons } from "@/components/ui/icons";

export default function AuthForm() {
  const { signIn, setUsername } = useStore();
  const [username, setUser] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "username":
        setUser(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "status":
        setStatus(e.target.value);
        break;
      default:
        break;
    }
  };

  async function createUser(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      signIn();
      navigate("/");
      setIsLoading(false);
      setUsername(firstName);
    }, 2000);

    const userValues = {
      username: username,
      name: name,
      firstName: firstName,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/add`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        console.error('Error:', response);
      } else {
        console.log('Success:', response);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <section className="page my-52">
      <Tabs defaultValue="signin" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Créer un compte</TabsTrigger>
          <TabsTrigger value="login">Se connecter</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>S'inscrire</CardTitle>
              <CardDescription>Nouveau ici ? Créez un compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Pseudo</Label>
                <Input
                  autoComplete="off"
                  id="username"
                  type="text"
                  value={username}
                  placeholder="Votre pseudo"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  autoComplete="off"
                  id="firstName"
                  type="text"
                  value={firstName}
                  placeholder="Votre prénom"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Nom</Label>
                <Input
                  autoComplete="off"
                  id="name"
                  type="text"
                  value={name}
                  placeholder="Votre nom"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  autoComplete="off"
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Votre email"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Saisissez un mot de passe"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="status">Statut</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
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
              <div className="space-y-1">
                <Label htmlFor="skills">Compétences</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Vos compétences" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Compétences</SelectLabel>
                      <SelectItem value="developpement">Développement</SelectItem>
                      <SelectItem value="ux/ui">UX / UI</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="communication">Communication</SelectItem>
                      <SelectItem value="design">Création Numérique</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={isLoading} onClick={createUser}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                S'inscrire
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Se connecter</CardTitle>
              <CardDescription>Accédez à votre espace</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter yout password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Se connecter
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
