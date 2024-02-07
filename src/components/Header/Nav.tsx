import { Link } from "react-router-dom";
import { Bell, Blocks } from "lucide-react";

import useStore from "@/lib/store";
import AddProjectForm from "@/components/Forms/AddProjectForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const { firstLetterUsername } = useStore();
  const { haveNotifs } = useStore();

  const haveNotifications = () => {
    return haveNotifs === true ? (
      <div>
        <Bell />
        <div className="absolute right-0 top-0 h-4 w-4 bg-primary rounded-full"></div>
      </div>
    ) : (
      <Bell />
    );
  };

  return (
    <nav className="w-full h-32 py-4 px-6 flex-row-center-between">
      <div className="flex-row-center-center">
        <h1 className="text-2xl font-semibold">
          <Link to={"/"} className="flex-row-center-start gap-3">
            ESPL Hub
            <Blocks className="text-primary text-3xl" />
          </Link>
        </h1>
      </div>
      <div className="flex-row-center-between gap-4">
        <AddProjectForm />
        <ModeToggle />
        <Link to={"/notifications"}>
          <Button
            variant="outline"
            className="flex-col-center-center rounded-lg border-[1px] w-12 h-12 relative hover:bg-secondary/80"
          >
            {haveNotifications()}
          </Button>
        </Link>
        <Link to={"/profile"}>
          <Avatar>
            <AvatarFallback>{firstLetterUsername}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </nav>
  );
}
