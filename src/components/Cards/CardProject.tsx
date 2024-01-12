import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


type CardProjectProps = {
    title: string;
    date: string;
    description: string;
    skills: string[];
    id?: string;
}

const CardProject : FC<CardProjectProps> = ( props ) => {

    const maxLenghtDescription = 230;
    const lenghtDescription = ( props:any ) => {
        if ( props.description.length > maxLenghtDescription ) {
            return props.description.slice(0, maxLenghtDescription) + ' ...';
        };
        return props.description;
    };

    return (
        <div className="w-[31%] h-auto bg-background border-2 rounded-lg p-6 text-xl text-white font-normal">
            <p className="flex-row-center-start gap-2">
                {props.skills.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-sm">{ tag }</Badge>
                        ))}
            </p>
            <h3 className="text-5xl pb-4 pt-2 font-semibold">{ props.title }</h3>
            <p className="text-muted-foreground font-light text-lg">Créé le : { props.date }</p>
            <p className="pt-6 pb-10 text-xl">{ lenghtDescription(props) }</p>
            <Link to={`/project/${props.id}`}>
                <Button size={"lg"}>En savoir plus</Button>
            </Link>
        </div>
    )
}


export default CardProject;
