import HeaderTab from "@/components/Tabs/HeaderTab";
import CardProject from "@/components/Cards/CardProject";
import { TabsContent } from "@/components/ui/tabs";


export default function TabsMain() {
    return (
        <TabsContent value="projets" className="tabs-content-dashboard">
            <div className="w-full h-auto pt-2 pb-10 text-2xl flex-col-start-start gap-4 font-semibold">
                <HeaderTab title="Projets" description="Consultez les derniers projets publiés et commencez dès maintenant à répondre à des offres" />
            </div>
            <div className="flex-row-center gap-4">
                <CardProject title="Un très long titre pour faire un très long test" date="20/05/2004" description="Voici une énorme description ou je parle de ce super projet que tout le monde devrait rejoindre pour faire un super projet avec de supers technos qui va générer beaucpup d'argent vous devriez tous rejoindre ce projet genre vraiment " skills={["dev", "seo"]} />
                <CardProject title="Un très long titre pour faire un très long test" date="20/05/2004" description="Voici une énorme description ou je parle de ce super projet que tout le monde devrait rejoindre pour faire un super projet avec de supers technos qui va générer beaucpup d'argent vous devriez tous rejoindre ce projet genre vraiment " skills={["dev", "seo"]} />
            </div>
        </TabsContent>
    )
}
