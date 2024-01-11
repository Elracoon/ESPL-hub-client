import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Dashboard() {
	return (
		<section className="w-screen h-full p-4">
			<Tabs defaultValue="tab1">
                <TabsList className="grid grid-cols-3 w-[400px]">
                    <TabsTrigger value="tab1">Projets</TabsTrigger>
                    <TabsTrigger value="tab2">En cours</TabsTrigger>
                    <TabsTrigger value="tab2">Terminés</TabsTrigger>
                </TabsList>
				<TabsContent value="tab1" className="tabs-content-dashboard">
					<h1>test</h1>
				</TabsContent>
				<TabsContent value="tab2" className="tabs-content-dashboard">
					<h1>tab2</h1>
				</TabsContent>
				<TabsContent value="tab3" className="tabs-content-dashboard">
					<h1>tab3</h1>
				</TabsContent>
            </Tabs>
		</section>
  	)
}