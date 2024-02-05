import { TabsContent } from "@/components/ui/tabs";
import CardProject from "../Cards/CardProject";

export default function TabsInProgress() {
    return (
        
        <TabsContent value="inprogress" className="tabs-content-dashboard">
            
            <div className="flex justify-around items-center text-stone-800 text-[95px] font-semibold font-['Poppins'] uppercase leading-[55px] mb-10">
                <span>EN COURS</span>
                <div className="flex gap-4">
                <select className="border border-gray-300 rounded-md px-4 py-2 w-45 h-10" style={{
                            maxHeight: "200px", 
                            fontSize: "14px" 
                        }}>
                        <option value="date">Trier par date</option>
                        <option value="titre">Trier par titre</option>
                        <option value="skills">Trier par compétences</option>
                    </select>
                    
                    <button className="px-4 py-2 bg-orange-600 rounded-md justify-center items-center gap-2.5 flex">
                        <div className="text-white text-sm font-medium font-['Inter'] leading-tight">Trier</div>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
            <CardProject title="Projet en cours" date="31-08-2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget risus commodo, accumsan ipsum vitae, bibendum nunc. Vivamus imperdiet aliquam urna, et dictum tellus tristique id. Etiam tempor tristique enim, quis congue enim scelerisque et. Maecenas convallis malesuada enim sit amet mollis. Nunc ullamcorper eu tellus quis rutrum. Curabitur quis bibendum orci. Sed et ultricies orci. Curabitur tempus non metus vitae lacinia. Mauris at lobortis odio." skills="Développement" id="123" />
            {}
            <CardProject title="Projet en cours" date="01-07-2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget risus commodo, accumsan ipsum vitae, bibendum nunc. Vivamus imperdiet aliquam urna, et dictum tellus tristique id. Etiam tempor tristique enim, quis congue enim scelerisque et. Maecenas convallis malesuada enim sit amet mollis. Nunc ullamcorper eu tellus quis rutrum. Curabitur quis bibendum orci. Sed et ultricies orci. Curabitur tempus non metus vitae lacinia. Mauris at lobortis odio." skills="Marketing" id="123" />
            {}
            <CardProject title="Projet en cours" date="11-11-2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget risus commodo, accumsan ipsum vitae, bibendum nunc. Vivamus imperdiet aliquam urna, et dictum tellus tristique id. Etiam tempor tristique enim, quis congue enim scelerisque et. Maecenas convallis malesuada enim sit amet mollis. Nunc ullamcorper eu tellus quis rutrum. Curabitur quis bibendum orci. Sed et ultricies orci. Curabitur tempus non metus vitae lacinia. Mauris at lobortis odio." skills="Design" id="123" />
            {}
             <CardProject title="Projet en cours" date="24-12-2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget risus commodo, accumsan ipsum vitae, bibendum nunc. Vivamus imperdiet aliquam urna, et dictum tellus tristique id. Etiam tempor tristique enim, quis congue enim scelerisque et. Maecenas convallis malesuada enim sit amet mollis. Nunc ullamcorper eu tellus quis rutrum. Curabitur quis bibendum orci. Sed et ultricies orci. Curabitur tempus non metus vitae lacinia. Mauris at lobortis odio." skills="UX/UI" id="123" />
            {}
            <CardProject title="Projet en cours" date="01-01-2024" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget risus commodo, accumsan ipsum vitae, bibendum nunc. Vivamus imperdiet aliquam urna, et dictum tellus tristique id. Etiam tempor tristique enim, quis congue enim scelerisque et. Maecenas convallis malesuada enim sit amet mollis. Nunc ullamcorper eu tellus quis rutrum. Curabitur quis bibendum orci. Sed et ultricies orci. Curabitur tempus non metus vitae lacinia. Mauris at lobortis odio." skills="Développement" id="123" />
            {}
            <CardProject title="Projet en cours" date="05-02-2024" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget risus commodo, accumsan ipsum vitae, bibendum nunc. Vivamus imperdiet aliquam urna, et dictum tellus tristique id. Etiam tempor tristique enim, quis congue enim scelerisque et. Maecenas convallis malesuada enim sit amet mollis. Nunc ullamcorper eu tellus quis rutrum. Curabitur quis bibendum orci. Sed et ultricies orci. Curabitur tempus non metus vitae lacinia. Mauris at lobortis odio." skills="Communication" id="123" />
            {}
            </div>
        </TabsContent>
    ) 
}