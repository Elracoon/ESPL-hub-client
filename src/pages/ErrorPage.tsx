import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="w-screen h-screen flex-col-center-center gap-8">
      <h1 className="text-5xl font-semibold">Error 404</h1>
      <p className="text-xl font-normal">Page not found</p>
      <Link to={"/"}>
        <Button size="lg">Accueil</Button>
      </Link>
    </div>
  );
}
