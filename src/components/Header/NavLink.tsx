import { FC } from "react";

import { TabsTrigger } from "@/components/ui/tabs";

type NavLinkProps = {
  value: string;
  title: string;
};

const NavLink: FC<NavLinkProps> = (props: NavLinkProps) => {
  return (
    <TabsTrigger value={props.value}>
      <p>{props.title}</p>
    </TabsTrigger>
  );
};

export default NavLink;
