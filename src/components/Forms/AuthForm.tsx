import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthForm() {
  return (
    <section className="page my-52">
      <Tabs defaultValue="signin" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Créer un compte</TabsTrigger>
          <TabsTrigger value="login">Se connecter</TabsTrigger>
        </TabsList>
        <Register />
        <Login />
      </Tabs>
    </section>
  );
}
