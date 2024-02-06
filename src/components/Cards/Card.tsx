import { FC } from "react";


type CardProps = {
    title: string;
};

const Card : FC<CardProps> = ( props ) => {
    return (
        <div className="flex-col-center-center h-20 w-20">
            <h2>{ props.title }</h2>
        </div>
    );
};


export default Card;
