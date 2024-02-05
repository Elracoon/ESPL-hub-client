import {Table, TableHeader, TableBody, TableRow, TableCell} from "@/components/ui/table"
import {Button} from "@/components/ui/button"


export default function Notifications() {
    return (
        <section className="w-screen h-full p-4">
            <div className="tabs-content-dashboard">
                {/* <h1 className="uppercase text-white font-bold text-center text-4xl mb-8">Mes notifications</h1> */}
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
                                <p className="text-primary">Acceptation de votre projet</p>
                            </TableCell>
                            <TableCell>
                                <p>Félicitations, votre nouveau projet "Développement d'une application mobile avec Kotlin" a été accepté par l'équipe pédagogique !</p>
                            </TableCell>
                            <TableCell className="flex justify-center">
                                <Button className="flex items-center" size="sm" variant="ghost">Supprimer</Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <p>04/02/2025</p>
                            </TableCell>
                            <TableCell>
                                <p className="text-primary">Nouveau feedback sur votre projet</p>
                            </TableCell>
                            <TableCell>
                                <p>Vous avez un nouveau feddback sur votre projet "Développement d'une application mobile avec Kotlin"</p>
                            </TableCell>
                            <TableCell className="flex justify-center">
                                <Button className="flex items-center" size="sm" variant="ghost">Supprimer</Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <p>04/02/2025</p>
                            </TableCell>
                            <TableCell>
                                <p className="text-primary">Nouveau participant à votre projet</p>
                            </TableCell>
                            <TableCell>
                                <p>Léa Granier souhaite participer à votre projet "Développement d'une application mobile avec Kotlin"</p>
                            </TableCell>
                            <TableCell className="flex justify-center">
                                <Button className="flex items-center" size="sm" variant="ghost">Supprimer</Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <p>04/02/2025</p>
                            </TableCell>
                            <TableCell>
                                <p className="text-primary">Acceptation de votre candidature</p>
                            </TableCell>
                            <TableCell>
                                <p>Félicitations, vous avez été accepté pour participer au projet "Développement d'une application mobile avec Kotlin"</p>
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