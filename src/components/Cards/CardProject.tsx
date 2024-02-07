import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/config/theme-provider";

type CardProjectProps = {
  id: string;
  title: string;
  date: string;
  owner: string;
  description: string;
  skills: string;
};

const CardProject: FC<CardProjectProps> = (props) => {
  const { theme } = useTheme();
  const maxLenghtDescription = 230;

  const lengthDescription = (description: string) => {
    if (description.length > maxLenghtDescription) {
      return description.slice(0, maxLenghtDescription) + " ...";
    }
    return description;
  };

  return (
    <Link
      className={`w-[31%] h-auto bg-background border-2 rounded-lg p-6 text-xl font-medium ${
        theme === "light" ? "text-black" : "text-white"
      }`}
      to={`/projects/${props.id}`}
    >
      <h3 className="text-3xl pb-2 pt-2 font-bold">{props.title}</h3>
      <p className="text-muted-foreground font-light text-base">
        Projet créé par{" "}
        <span className={theme === "light" ? "text-black" : "text-white"}>
          {props.owner}
        </span>{" "}
        le{" "}
        <span className={theme === "light" ? "text-black" : "text-white"}>
          {props.date}
        </span>
      </p>
      <p className="pt-6 pb-10 text-lg font-light">
        {lengthDescription(props.description)}
      </p>
      <Link to={`/projects/${props.id}`}>
        <Button size="lg">En savoir plus</Button>
      </Link>
    </Link>
  );
};

export default CardProject;
