import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";


type CardProjectProps = {
    title: string;
    date: string;
    description: string;
    skills: string;
    id: string;
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
        <div className="w-[91%] bg-white rounded-sm p-2">
            <h1 className="text-white bg-black rounded-sm p-2 text-3xl">{ props.title }</h1>
            <div className="flex justify-between my-2 items-center">
                <p className="text-black text-xs">Créé le : { props.date }</p>
                <p className="text-white bg-black rounded-sm p-1 text-xs">{ props.skills }</p>
            </div>
            <p className="text-black mb-3 text-sm">{ lenghtDescription(props) }</p>
            <Link to={`/project/${props.id}`}>
                <Button>En savoir plus</Button>
            </Link>
        </div>
    )
}


export default CardProject;
