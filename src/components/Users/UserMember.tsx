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
    <div
      className={`flex-row-center-start gap-3 border-2 rounded-lg p-4 
            ${props.role === "marketing" ? "border-green-500 hover:bg-green-400 hover:text-white" : "border-border"}
            ${props.role === "dev" ? "border-blue-500 hover:bg-blue-400 hover:text-white" : "border-border"}
            ${props.role === "communication" ? "border-red-500 hover:bg-red-400 hover:text-white" : "border-border"}
            ${props.role === "creanum" ? "border-purple-500 hover:bg-purple-400 hover:text-white" : "border-border"}
            ${props.role === "ux" ? "border-yellow-500 hover:bg-yellow-400 hover:text-white" : "border-border"}
            `}
    >
      <div className="w-10 h-10 rounded-full bg-background flex-row-center-center">
        <Avatar>
          <AvatarFallback>{props.avatar}</AvatarFallback>
        </Avatar>
      </div>
      <p className="text-lg">
        {props.firstName} {props.name}
      </p>
    </div>
  );
};

export default UserMember;
