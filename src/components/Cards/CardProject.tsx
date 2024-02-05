import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type CardProjectProps = {
  title: string;
  date: string;
  owner?: string;
  description: string;
  skills?: string[];
  id?: string;
};

const CardProject: FC<CardProjectProps> = (props) => {
  const maxLenghtDescription = 230;
  const lenghtDescription = (props: any) => {
    if (props.description.length > maxLenghtDescription) {
      return props.description.slice(0, maxLenghtDescription) + " ...";
    }
    return props.description;
  };

  return (
    <Link
      className="w-[31%] h-auto bg-background border-2 rounded-lg p-6 text-xl text-white font-medium"
      to={`/project/${props.id}`}
    >
      <p className="flex-row-center-start gap-2">
        {props.skills.map((tag, index) => (
          <Badge key={index} variant="outline" className="text-sm">
            {tag}
          </Badge>
        ))}
      </p>
      <h3 className="text-3xl pb-4 pt-2 font-bold">{props.title}</h3>
      <p className="text-muted-foreground font-light text-base">
        Projet crée par{" "}
        <span className="text-white hover:underline hover:cursor-pointer">
          {props.owner}
        </span>{" "}
        le <span className="text-white">{props.date}</span>
      </p>
      <p className="pt-6 pb-10 text-lg">{lenghtDescription(props)}</p>
      <Link to={`/project/${props.id}`}>
        <Button size={"lg"}>En savoir plus</Button>
      </Link>
    </Link>
  );
};

export default CardProject;
