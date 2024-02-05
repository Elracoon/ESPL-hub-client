import React from "react"
import {Table, TableHeader, TableBody, TableRow, TableCell} from "@/components/ui/table"
import {DropdownMenu, DropdownMenuContent,DropdownMenuItem, DropdownMenuRadioGroup,
    DropdownMenuRadioItem,DropdownMenuTrigger, DropdownMenuSeparator} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"


export default function Notifications() {
    const [position, setPosition] = React.useState("not-read")

    type notifs = {
        date: string,
        type: string,
        contenu: string
    }

    const notifs = [
        {
            date: "04/01/2025",
            type: "Acceptation de votre projet",
            contenu: "Félicitations, votre nouveau projet \"Développement d'une application mobile avec Kotlin\" a été accepté par l'équipe pédagogique !"
        },
        {
            date: "04/02/2025",
            type: "Nouveau feedback sur votre projet",
            contenu: "Vous avez un nouveau feddback sur votre projet \"Développement d'une application mobile avec Kotlin\""
        },
        {
            date: "04/03/2025",
            type: "Nouveau participant à votre projet",
            contenu: "Léa Granier souhaite participer à votre projet \"Développement d'une application mobile avec Kotlin\""
        },
        {
            date: "04/04/2025",
            type: "Acceptation de votre candidature",
            contenu: "Félicitations, vous avez été accepté pour participer au projet \"Développement d'une application mobile avec Kotlin\""
        }
    ]
    


    return (
        <section className="w-screen h-full p-4">
            <div className="tabs-content-dashboard">
            <h1 className="text-6xl font-semibold mb-7">Projet</h1>
                <Table>
                    <TableHeader className="w-full">
                        <TableRow className="text-stone-500 font-bold">
                            <TableCell className="w-1/6">
                                <p>Date :</p>
                            </TableCell>
                            <TableCell className="w-1/5">
                                <p>Type :</p>
                            </TableCell>
                            <TableCell className="w-2/5">
                                <p>Contenu :</p>
                            </TableCell>
                            <TableCell className="w-1/5"/>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {notifs.map(({date, type, contenu}: notifs) => (
                            <TableRow>
                                <TableCell>
                                    <p key={date}>{date}</p>
                                </TableCell>
                                <TableCell>
                                    <p key={type} className="text-primary font-semibold">{type}</p>
                                </TableCell>
                                <TableCell>
                                    <p key={contenu}>{contenu}</p>
                                </TableCell>
                                <TableCell className="flex justify-center">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger><Button className="flex items-center" size="sm" variant="ghost"><MoreHorizontal /></Button></DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                                <DropdownMenuRadioItem value="not-read">Marquer comme non lu</DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="read">Marquer comme lu</DropdownMenuRadioItem>
                                            </DropdownMenuRadioGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-primary font-bold">Supprimer</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))} 
                    </TableBody>
                </Table>
            </div>
		</section>
    )
}