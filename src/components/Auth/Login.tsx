import React, { useState, ChangeEvent } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import useStore from "@/lib/store";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";

export default function Login() {
  const { setToken } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  async function loginUser(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:3000/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error:", response);
        toast.error(
          "Une erreur est survenue durant l'appel de l'API, veuillez réessayer"
        );
      } else {
        console.log("Success:", response);
        toast.success("Vous êtes maintenant connecté");
        setToken(data.token);
        navigate("/");
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error("Error:", error);
      toast.error("Une erreur est survenue, veuillez réessayer");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle>Se connecter</CardTitle>
          <CardDescription>Accédez à votre espace</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter yout password"
              onChange={handleChange}
              value={password}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={isLoading} onClick={loginUser}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Se connecter
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
