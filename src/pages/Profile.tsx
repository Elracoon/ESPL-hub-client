import useStore from "@/lib/store";

import RedirectPageAuth from "@/pages/RedirectPageAuth";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Nav from "@/components/Header/Nav";

export default function Profile() {
  const { token, username, firstLetterUsername } = useStore();
  const inputStyle = "w-full my-2";

  if (!token) {
    return <RedirectPageAuth />;
  }
  return (
    <section className="w-full h-full">
      <Nav></Nav>
      <div className="tabs-content-dashboard flex-col-center-center text-center w-1-4 h-full gap-4">
        <div className="flex-col-center-center gap-4 mt-8">
          <Avatar>
            <AvatarFallback>{firstLetterUsername}</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-semibold">Hello {username} !</h1>
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="lastname"> Nom : </Label>
          <Input type="text" className={inputStyle} />
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="name">Prénom : </Label>
          <Input type="text" className={inputStyle} />
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="email">Email : </Label>
          <Input type="email" className={inputStyle} />
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="passworld">Mot de passe :</Label>
          <Input type="password" className={inputStyle} />
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="status">Statut</Label>
          <Select>
            <SelectTrigger className={inputStyle}>
              <SelectValue placeholder="Votre statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Statut</SelectLabel>
                <SelectItem value="student">Etudiant</SelectItem>
                <SelectItem value="teacher">Intervenant</SelectItem>
                <SelectItem value="company">Entreprise</SelectItem>
                <SelectItem value="association">Association</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-col-start-center w-1/4">
          <Label htmlFor="theme">Thème :</Label>
          <ModeToggle></ModeToggle>
        </div>
        <div className="flex-row-center-center w-1/4 gap-4">
          <Button size={"lg"}>Déconnexion</Button> <br />
          <Button variant={"destructive"} size={"lg"}>
            Supprimer son compte
          </Button>
        </div>
      </div>
    </section>
  );
}
