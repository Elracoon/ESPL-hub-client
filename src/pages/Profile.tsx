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


export default function Profile() {
    const inputStyle = 'w-2/4 mb-2.5'
    const buttonStyle = 'w-1/4 mb-2.5'
    return (
        <div>
            <Label htmlFor="lastname">Nom :</Label>
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
                        <SelectItem value="dev">Développement Web</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="webmarket">WebMarketing</SelectItem>
                        <SelectItem value="webdesign">WebDesign</SelectItem>
                        <SelectItem value="creanum">Création Numérique</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className={inputStyle}>
                <Label htmlFor="theme" className={inputStyle}>Thème :</Label> <br/>
                <ModeToggle></ModeToggle> <br/>
            </div>
            <Button className={buttonStyle}> Déconnexion </Button> <br/>
            <Button variant={"destructive"} className={buttonStyle}> Supprimer son compte </Button>
        </div>
    )
}