import { useEffect, useState } from "react"
import {Table, TableHeader, TableBody, TableRow, TableCell} from "@/components/ui/table"
import {DropdownMenu, DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger, DropdownMenuSeparator} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import Nav from "@/components/Header/Nav"
import useStore from "@/lib/store"

export default function Notifications() {

    const { setHaveNotifs } = useStore()

    type notifs = {
        id: number,
        date: string,
        type: string,
        contenu: string
    }

    const notifs = [
        {
            id: 0,
            date: "04/01/2025",
            type: "Acceptation de votre projet",
            contenu: "Félicitations, votre nouveau projet \"Développement d'une application mobile avec Kotlin\" a été accepté par l'équipe pédagogique !"
        },
        {
            id: 1,
            date: "04/02/2025",
            type: "Nouveau feedback sur votre projet",
            contenu: "Vous avez un nouveau feddback sur votre projet \"Développement d'une application mobile avec Kotlin\""
        },
        {
            id: 2,
            date: "04/03/2025",
            type: "Nouveau participant à votre projet",
            contenu: "Léa Granier souhaite participer à votre projet \"Développement d'une application mobile avec Kotlin\""
        },
        {
            id: 3,
            date: "04/04/2025",
            type: "Acceptation de votre candidature",
            contenu: "Félicitations, vous avez été accepté pour participer au projet \"Développement d'une application mobile avec Kotlin\""
        }
    ];

    const [read, setRead] = useState<{ [id: number]: boolean }>(() => {
        const initialReadStatus: { [id: number]: boolean } = {};
        notifs.forEach((notif) => {
          initialReadStatus[notif.id] = false;
        });
        return initialReadStatus;
    });

    const toggleReadStatus = (id: number) => {
        setRead((prevStatus) => ({
          ...prevStatus,
          [id]: !prevStatus[id]
        }));
    };

    const getButton = (id: number) => {
        return read[id] === false ? (
            <DropdownMenuItem onClick={() => toggleReadStatus(id)}>Marquer comme lu</DropdownMenuItem>
        ) : (
            <DropdownMenuItem onClick={() => toggleReadStatus(id)}>Marquer comme non lu</DropdownMenuItem>
        );
    };
    
    useEffect(() => {
        const countRead = Object.values(read).filter((status) => status === false).length;
        if (countRead > 0){
            setHaveNotifs(true)
        } else{
            setHaveNotifs(false)
        };
    }, [read, setHaveNotifs]);
    
    
    return (
        <section className="w-screen h-full p-4">
            <Nav />
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
                                <TableCell className="w-1/6"/>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {notifs.map(({date, type, contenu, id}: notifs) => (
                                <TableRow>
                                    <TableCell>
                                        <p className="text-xl" key={id}>{date}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p key={id} className="text-primary font-semibold text-xl">{type}</p>
                                    </TableCell>
                                    <TableCell>
                                        <p className="text-xl" key={id}>{contenu}</p>
                                    </TableCell>
                                    <TableCell className="flex justify-center items-center">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger><Button size="sm" variant="ghost"><MoreHorizontal /></Button></DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                {getButton(id)}
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