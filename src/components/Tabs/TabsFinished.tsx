import { TabsContent } from "@/components/ui/tabs";
import HeaderTab from "@/components/Tabs/HeaderTab";
import CardProjectFinished from "@/components/Cards/CardProjectFinished";

export default function TabsFinished() {
  return (
    <TabsContent value="finished" className="tabs-content-dashboard">
      <div className="w-full h-auto pt-2 pb-10 text-2xl flex-col-start-start gap-4 font-semibold">
        <HeaderTab
          title="Terminés"
          description="Consultez les derniers projets terminés auxquels vous avez participé"
        />
      </div>
      <div className="flex-row-center gap-4">
        <CardProjectFinished
          title="Un très long titre pour faire un très long test"
          date="20/05/2004"
          description="Voici une énorme description ou je parle de ce super projet que tout le monde devrait rejoindre pour faire un super projet avec de supers technos qui va générer beaucpup d'argent vous devriez tous rejoindre ce projet genre vraiment"
          owner="Arthur"
        />
      </div>
    </TabsContent>
  );
}
