import { FC } from "react";


type CardProjectProps = {
    title: string;
}

const Card : FC<CardProjectProps> = ( props ) => {
    return (
        <h1>{ props.title }</h1>
    )
}


export default Card;
