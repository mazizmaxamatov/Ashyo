import { MouseEventHandler, ReactNode } from "react";

export interface HeaderActionType {
    id?:number,
    icon:ReactNode,
    actionCounnt:number
    onclick?:MouseEventHandler<HTMLDivElement>
}
export interface HeaderSearchType{
    id:number;
    name:string;
    image:string;
    icon: string;
    parentCategoryId:number | null;
    createAT:string;
    updatedAt:string;
}