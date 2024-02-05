import { FC } from "react";

type CardProjectFinishedProps = {
  title: string;
  date: string;
  owner: string;
  description: string;
  id?: string;
};

const CardProjectFinished: FC<CardProjectFinishedProps> = (props) => {
  const maxLenghtDescription = 230;
  const lenghtDescription = (props: any) => {
    if (props.description.length > maxLenghtDescription) {
      return props.description.slice(0, maxLenghtDescription) + " ...";
    }
    return props.description;
  };

  return (
    <div className="w-[31%] h-auto bg-background border-2 rounded-lg p-6 text-xl text-white font-medium">
      <h3 className="text-3xl pb-4 pt-2 font-bold">{props.title}</h3>
      <p className="text-muted-foreground font-light text-base">
        Projet terminé le <span className="text-white">{props.date}</span> par{" "}
        <span className="text-white hover:underline hover:cursor-pointer">
          {props.owner}
        </span>{" "}
      </p>
      <p className="py-6 text-lg">{lenghtDescription(props)}</p>
    </div>
  );
};

export default CardProjectFinished;
