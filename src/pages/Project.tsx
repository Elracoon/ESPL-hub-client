import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Badge } from "@/components/ui/badge";
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
                    <div className="my-10 flex-col-start-start gap-4">
                        <h1 className="text-6xl font-semibold">Projet</h1>
                        <p className="text-xl text-muted-foreground font-normal max-w-10xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestiae, libero eum perferendis odio nobis vero nemo consectetur maiores suscipit amet nesciunt veniam repellendus natus exercitationem eaque atque fuga necessitatibus. Molestiae fuga necessitatibus commodi quia. Asperiores sed corporis deleniti nihil hic maiores quod nemo at adipisci aperiam, laudantium ipsa tenetur?
                        </p>
                    </div>
                    <div className="w-full flex-col-start-start gap-5 py-10">
                        <h2 className="text-4xl font-semibold">Compétences recherchées</h2>
                        <div className="flex-row-center-start gap-3">
                            <Badge variant={"outline"} className="text-md">dev</Badge>
                            <Badge variant={"outline"} className="text-md">marketing</Badge>
                            <Badge variant={"outline"} className="text-md">communication</Badge>
                            <Badge variant={"outline"} className="text-md">seo</Badge>
                        </div>
                    </div>
                    <div className="w-full flex-col-start-start gap-5 py-10">
                        <h2 className="text-4xl font-semibold">Membres</h2>
                        <div className="flex-row-center-start gap-3">
                            <UserMember name="Broudoux" firstName="Arthur" avatar="A"  />
                            <UserMember name="Broudoux" firstName="Arthur" avatar="A" />
                            <UserMember name="Broudoux" firstName="Arthur" avatar="A" />
                            <UserMember name="Broudoux" firstName="Arthur" avatar="A"  />
                        </div>
                    </div>
                    <div className="flex-row-center-between">
                        <div className="w-2/4 h-auto"></div>
                        <div className="w-2/4 h-auto"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}