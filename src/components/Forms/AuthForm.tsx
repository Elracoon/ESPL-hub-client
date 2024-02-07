import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Blocks} from "lucide-react";

export default function AuthForm() {
  return (
      <section className="w-screen h-screen flex-col-center-center gap-10">
        <h1 className="flex-row-center-start gap-3 text-7xl">
          ESPL Hub
          <Blocks className="text-primary text size-20"/>
        </h1>
        <Tabs defaultValue="signin" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Créer un compte</TabsTrigger>
            <TabsTrigger value="login">Se connecter</TabsTrigger>
          </TabsList>
          <Register/>
          <Login/>
        </Tabs>
      </section>
  );
}
