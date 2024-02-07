import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Blocks } from "lucide-react";

export default function RedirectPageAuth() {
  return (
    <section className="w-screen h-screen flex-col-center-center gap-12">
      <div className="flex">
        <div className=" flex flex-col-center-center gap-10">
          <h1 className="flex-row-center-start gap-3 text-8xl">
            ESPL Hub
            <Blocks className="text-primary text size-20" />
          </h1>
          <h2 className={"text-center text-4xl font-normal"}>
            {" "}
            La plateforme pour vos projets par{" "}
          </h2>
          <img
            src="https://www.groupe-eduservices.fr/sites/default/files/wysiwyg/ESPL-logo-2020.png"
            className={"w-1/4 mt-5"}
          />
          <Link to={"/auth"}>
            <Button size={"lg"} className={"mt-28"}>
              Se connecter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
