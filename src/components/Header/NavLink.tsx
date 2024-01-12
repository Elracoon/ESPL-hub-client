import { FC } from "react";

import { TabsContent } from "@/components/ui/tabs";


type NavLinkProps = {
    value: string;
    title: string;
}

const NavLink : FC<NavLinkProps> = ( props : NavLinkProps ) => {
    return (
        <TabsContent value={ props.value } className="tabs-content-dashboard">
            <p>{ props.title }</p>
        </TabsContent>
    )
}


export default NavLink;