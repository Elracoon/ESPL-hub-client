import {Table, TableHeader, TableBody, TableRow, TableCell} from "@/components/ui/table"
import {Button} from "@/components/ui/button"


export default function Notifications() {
    return (
        <section className="w-screen h-full p-4">
            <div className="tabs-content-dashboard">
                <Table>
                    <TableHeader className="w-full">
                        <TableRow className="text-stone-500 font-bold">
                            <TableCell className="w-1/4">
                                <p>Date</p>
                            </TableCell>
                            <TableCell>
                                <p>Message :</p>
                            </TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <p>12/12/2021</p>
                            </TableCell>
                            <TableCell>
                                <p>Test du message affiché par la notif</p>
                            </TableCell>
                            <TableCell>
                                <Button className="flex items-center" size="sm" variant="ghost">Supprimer</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
		</section>
    )
}