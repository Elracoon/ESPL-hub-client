import { FC } from "react";

type HeaderTabProps = {
  title: string;
  description: string;
};

const HeaderTab: FC<HeaderTabProps> = (props: HeaderTabProps) => {
  return (
    <div className="w-full h-auto pt-2 pb-10 text-xl flex-col-start-start gap-4 font-semibold">
      <h1 className="text-5xl">{props.title}</h1>
      <p className="font-normal text-muted-foreground">{props.description}</p>
    </div>
  );
};

export default HeaderTab;
