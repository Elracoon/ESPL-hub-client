import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function RedirectPageAuth() {
  return (
    <section className="w-screen h-screen flex-col-center-center gap-12">
      <h1 className="text-5xl max-w-5xl text-center font-semibold">
        Vous devez être connecté pour accéder à cette page
      </h1>
      <Link to={"/auth"}>
        <Button size={"lg"}>Se connecter</Button>
      </Link>
    </section>
  );
}
