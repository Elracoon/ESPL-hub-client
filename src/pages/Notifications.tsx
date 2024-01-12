import {Table, TableHeader, TableBody, TableRow, TableCell} from "@/components/ui/table"
import {Button} from "@/components/ui/button"


export default function Notifications() {
    return (
        <section className="w-screen h-full p-4">
            <div className="tabs-content-dashboard">
                <h1 className="uppercase text-white font-bold text-center text-4xl mb-8">Mes notifications</h1>
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
                        <TableRow>
                            <TableCell>
                                <p>04/02/2025</p>
                            </TableCell>
                            <TableCell>
                                <p>Acceptation de votre projet</p>
                            </TableCell>
                            <TableCell>
                                <p>Félicitations, votre nouveau projet "Développement d'un application mobile avec Kotlin" a été accepté par l'équipe pédagogique !</p>
                            </TableCell>
                            <TableCell className="flex justify-center">
                                <Button className="flex items-center" size="sm" variant="ghost">Supprimer</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
		</section>
    )
}