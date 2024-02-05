import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Blocks } from "lucide-react";

import useStore from "@/lib/store";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

export default function Nav() {
  const [firstLetterUsername, setFirstLetterUsername] = useState("");
  const { firstName } = useStore();
  const [firstLetterFirstName, setFirstLetterFirstName] = useState('');
  const { haveNotifs } = useStore()

  useEffect(() => {
      if (firstName && firstName.length > 0) {
          setFirstLetterFirstName(firstName.charAt(0).toUpperCase());
      };
  }, [firstName]);

  const haveUnreadNotifs = () => {
      return (haveNotifs === true) ? (
          <div>
              <Bell />
              <div className="absolute right-0 bottom-0 h-4 w-4 bg-primary rounded-full"></div>
          </div>
      ) : (
          <Bell />
      );
  }

  return (
    <nav className="w-full h-32 py-4 px-6 flex-row-center-between">
        <div className="flex-row-center-center">
            <h1 className="text-5xl font-semibold">
                <Link to={"/"}>ESPL Hub</Link>
            </h1>
        </div>
        <div className="flex-row-center-between gap-4">
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Create +</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[450px]">
                    <DialogHeader>
                        <DialogTitle>Créez un projet</DialogTitle>
                        <DialogDescription>
                            Décrivez votre projet
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-5 py-4">
                        <div className="grid grid-cols-4 items-center gap-5">
                            <Label htmlFor="nameProject" className="text-right">Titre</Label>
                            <Input id="nameProject" placeholder="Titre" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-5">
                            <Label htmlFor="goalsProject" className="text-right">Objectifs</Label>
                            <Input id="goalsProject" placeholder="Objectifs" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-5">
                            <Label htmlFor="skillsProject" className="text-right">Compétences</Label>
                            <Input id="skillsProject" placeholder="Compétences recherchées" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-start gap-5">
                            <Label htmlFor="skillsProject" className="text-right">Description</Label>
                            <Textarea name="description" className="col-span-3" placeholder="Description" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Créer</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Link to={"/notifications"}>
                <div className="flex-col-center-center rounded-full h-10 w-10 relative">
                    {haveUnreadNotifs()}
                </div>
            </Link>
            <Link to={"/profile"}>
                <Avatar>
                    <AvatarFallback>{ firstLetterFirstName }</AvatarFallback>
                </Avatar>
            </Link>
        </div>
    </nav>
  );
}
