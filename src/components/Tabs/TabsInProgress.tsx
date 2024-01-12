import { TabsContent } from "@/components/ui/tabs";
import CardProject from "../Cards/CardProject";

export default function TabsInProgress() {
    return (
        
        <TabsContent value="inprogress" className="tabs-content-dashboard">
            
            <div className="text-stone-800 text-[95px] font-semibold font-['Poppins'] uppercase leading-[55px]">EN COURS</div>
            <div className="w-96 h-9 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="w-96 justify-start items-start gap-2 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="self-stretch pl-3 pr-14 py-2 bg-white rounded-md border border-slate-300 justify-start items-center inline-flex">
                            <div className="text-slate-900 text-sm font-normal font-['Inter'] leading-tight">Développement web</div>
                        </div>
                    </div>
                    <div className="px-4 py-2 bg-orange-600 rounded-md justify-center items-center gap-2.5 flex">
                        <div className="text-white text-sm font-medium font-['Inter'] leading-tight">Trier</div>
                    </div>
                </div>
                <div></div>
            </div>
            <CardProject title="Projet en cours" date="2024-01-12" description="Description du projet en cours" skills="React, TypeScript" id="123" />
            {/* Utilisez CardProject comme bon vous semble avec les props nécessaires */}
            <CardProject title="Projet en cours" date="2024-01-12" description="Description du projet en cours" skills="React, TypeScript" id="123" />
            {/* Utilisez CardProject comme bon vous semble avec les props nécessaires */}
            <CardProject title="Projet en cours" date="2024-01-12" description="Description du projet en cours" skills="React, TypeScript" id="123" />
            {/* Utilisez CardProject comme bon vous semble avec les props nécessaires */}
        </TabsContent>
    ) 
}