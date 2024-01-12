import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import NavLink from "@/components/Header/NavLink";


export default function Dashboard() {
	return (
		<section className="w-screen h-full p-4">
			<Tabs defaultValue="tab1">
                <TabsList className="grid grid-cols-3 w-[400px]">
                    <TabsTrigger value="tab1">Projets</TabsTrigger>
                    <TabsTrigger value="tab2">En cours</TabsTrigger>
                    <TabsTrigger value="tab3">Terminés</TabsTrigger>
                </TabsList>
				<NavLink value="tab1" title="test1" />
				<NavLink value="tab2" title="test2" />
				<NavLink value="tab3" title="test3" />
            </Tabs>
		</section>
  	)
}