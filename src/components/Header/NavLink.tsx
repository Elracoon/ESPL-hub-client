import { FC } from "react";


type NavLinkProps = {
    title: string;
}

const NavLink : FC<NavLinkProps> = ( props : NavLinkProps ) => {
    return (
        <h1>{props.title}</h1>
    )
}


export default NavLink;