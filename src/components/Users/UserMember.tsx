import { FC } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";


type UserMemeberProps = {
    name: string;
    firstName: string;
    avatar: string;
    role?: string;
};

const UserMember: FC<UserMemeberProps> = (props) => {
    return (
        <div className={`flex-row-center-start gap-3 border-2 rounded-lg p-4 hover:bg-secondary/80 
            ${props.role === "marketing" ? "border-green-500" : "border-border"}
            ${props.role === "seo" ? "border-red-500" : "border-border"}
            ${props.role === "communication" ? "border-yellow-500" : "border-border"}
            ${props.role === "dev" ? "border-purple-500" : "border-border"}
            `}>
            <div className="w-12 h-12 rounded-full bg-background flex-row-center-center">
                <Avatar>
                    <AvatarFallback>{props.avatar}</AvatarFallback>
                </Avatar>
            </div>
            <p className="text-xl">
                {props.firstName} {props.name}
            </p>
        </div>
    )
}


export default UserMember;
