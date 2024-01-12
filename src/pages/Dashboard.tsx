import { Tabs, TabsList } from "@/components/ui/tabs";

import NavLink from "@/components/Header/NavLink";
import TabsMain from "@/components/Tabs/TabsMain";
import TabsInProgress from "@/components/Tabs/TabsInProgress";
import TabsFinished from "@/components/Tabs/TabsFinished";


export default function Dashboard() {
	return (
		<section className="w-screen h-full p-4">
			<Tabs defaultValue="projets">
                <TabsList className="grid grid-cols-3 w-[400px]">
					<NavLink value="projets" title="Projets" />
					<NavLink value="inprogress" title="En cours" />
					<NavLink value="finished" title="Terminés" />
                </TabsList>
				<TabsMain />
				<TabsInProgress />
				<TabsFinished />
            </Tabs>
		</section>
  	)
}