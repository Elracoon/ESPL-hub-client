import { FC } from "react";
import { useTheme } from "@/config/theme-provider";

type CardProjectFinishedProps = {
  title: string;
  date: string;
  owner: string;
  description: string;
  id?: string;
};

const maxLengthDescription = 130;

const lengthDescription = (description: string) => {
  if (description.length > maxLengthDescription) {
    return description.slice(0, maxLengthDescription) + " ...";
  }
  return description;
};

const CardProjectFinished: FC<CardProjectFinishedProps> = (props) => {
  const { theme } = useTheme();

  return (
      <div className={`w-[31%] h-auto bg-background border-2 rounded-lg p-6 text-xl font-medium ${
          theme === "light" ? "text-black" : "text-white"
      }`}>
        <h3 className="text-3xl pb-4 pt-2 font-bold">{props.title}</h3>
        <p className="text-muted-foreground font-light text-base">
          Projet terminé le{" "}
          <span className={theme === "light" ? "text-black" : "text-white"}>
          {props.date}
        </span>{" "}
          par{" "}
          <span className="hover:underline hover:cursor-pointer">
          {props.owner}
        </span>{" "}
        </p>
        <p className="py-6 text-lg">{lengthDescription(props.description)}</p>
      </div>
  );
};

export default CardProjectFinished;
