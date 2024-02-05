import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Button } from  '@/components/ui/button'
import  { ModeToggle } from "@/components/ui/mode-toggle";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {useState} from "react";


export default function Profile() {

    const inputStyle = 'w-1/4 mb-2.5 mt-2.5'
    const buttonStyle = 'w-4/5 mb-2.5 px-10'
    return (
        <div className="tabs-content-dashboard flex-col-center text-center">
                <Avatar>
                    <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <Label htmlFor="lastname" className={"mt-2.5"}>Nom :</Label>
                <Input type="text" className={inputStyle}/>
                <Label htmlFor="name">Prénom : </Label>
                <Input type="text" className={inputStyle}/>
                <Label htmlFor="email">Email : </Label>
                <Input type="email" className={inputStyle}/>
                <Label htmlFor="passworld">Mot de passe :</Label>
                <Input type="password" className={inputStyle}/>
                <Label htmlFor="statut">Statut :</Label>
                <Select>
                    <SelectTrigger className={inputStyle}>
                        <SelectValue placeholder="Choisir une compétence à ajouter"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="dev" >Développement Web</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="communication">Communication</SelectItem>
                            <SelectItem value="ux-ui">UX-UI</SelectItem>
                            <SelectItem value="creanum">Création Numérique</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <div className="flex">
                    <Badge className={"bg-blue-500 mx-2"}>Développement Web</Badge>
                    <Badge className={"bg-green-500 mx-2"}>Marketing</Badge>
                    <Badge className={"bg-red-500 mx-2"}>Communication</Badge>
                    <Badge className={"bg-yellow-500 mx-2 "}>UX-UI</Badge>
                    <Badge className={"bg-purple-500 mx-2"}>Création Numérique</Badge>
                </div>
                <div className="mb-2.5">
                    <Label htmlFor="theme">Thème :</Label> <br/>
                    <ModeToggle></ModeToggle> <br/>
                </div>
                <div>
                    <Button className={buttonStyle}> Déconnexion </Button> <br/>
                    <Button variant={"destructive"} className={buttonStyle}> Supprimer son compte </Button>
                </div>
        </div>
    )
}