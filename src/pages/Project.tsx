import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import UserMember from "@/components/Users/UserMember";

export default function Project() {
  return (
    <section className="w-screen h-full p-4">
      <div className="tabs-content-dashboard">
        <div className="tabs-content-header">
          <div className="tabs-content-header-title w-12 h-12 rounded-lg hover:bg-secondary/80 flex-row-center-center hover:cursor-pointer">
            <Link to={"/"}>
              <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
            </Link>
          </div>
          <div className="my-10 flex-col-start-start gap-5">
            <h1 className="text-6xl font-semibold">Projet</h1>
            <p className="text-muted-foreground font-light text-base">
              Projet crée par{" "}
              <span className="text-white hover:underline hover:cursor-pointer">
                Arthur
              </span>{" "}
              le <span className="text-white">20/05/2024</span>
            </p>
            <p className="text-xl font-normal max-w-10xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis molestiae, libero eum perferendis odio nobis vero nemo
              consectetur maiores suscipit amet nesciunt veniam repellendus
              natus exercitationem eaque atque fuga necessitatibus. Molestiae
              fuga necessitatibus commodi quia. Asperiores sed corporis deleniti
              nihil hic maiores quod nemo at adipisci aperiam, laudantium ipsa
              tenetur?
            </p>
          </div>
          <div className="w-full flex-col-start-start gap-5 py-10">
            <h2 className="text-3xl font-semibold">Compétences recherchées</h2>
            <div className="flex-row-center-start gap-3">
              <Badge variant={"outline"} className="text-md">
                dev
              </Badge>
              <Badge variant={"outline"} className="text-md">
                marketing
              </Badge>
              <Badge variant={"outline"} className="text-md">
                communication
              </Badge>
              <Badge variant={"outline"} className="text-md">
                seo
              </Badge>
            </div>
          </div>
          <div className="w-full flex-col-start-start gap-5 py-10">
            <h2 className="text-3xl font-semibold">Membres</h2>
            <div className="flex-row-center-start gap-3">
              <UserMember name="Broudoux" firstName="Arthur" avatar="A" />
              <UserMember name="Broudoux" firstName="Arthur" avatar="A" />
              <UserMember name="Broudoux" firstName="Arthur" avatar="A" />
              <UserMember name="Broudoux" firstName="Arthur" avatar="A" />
            </div>
          </div>
          <div className="w-full h-full flex-col-start-center gap-8 mt-12">
            <h2 className="text-4xl font-semibold">
              Envie de rejoindre l'aventure?
            </h2>
            <div className="w-auto h-auto flex-row-start-start gap-4">
              <Button size={"lg"}>Postuler</Button>
              <Button size={"lg"} variant={"outline"}>
                Contacter le créateur
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
