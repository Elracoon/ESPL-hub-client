import { TabsContent } from "@/components/ui/tabs";
import HeaderTab from "@/components/Tabs/HeaderTab";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import CardProject from "@/components/Cards/CardProject";

export default function TabsInProgress() {
  return (
    <TabsContent value="inprogress" className="tabs-content-dashboard">
      <div className="w-full h-auto pt-2 pb-10 text-2xl flex-row-center-between gap-4 font-semibold">
        <HeaderTab
          title="En cours"
          description="Consultez les projets sur lesquels vous travaillez actuellement et gérez les tâches associées à ces projets."
        />
        <div className="flex gap-4 flex-row-center-center w-auto">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Trier par :" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filtres</SelectLabel>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="title">Titre</SelectItem>
                <SelectItem value="skills">Compétence</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full flex-row-center-start">
        <CardProject
          title="test"
          date="20/05/2004"
          description="test test test test test test test test"
          skills={["dev", "seo"]}
        />
      </div>
    </TabsContent>
  );
}
