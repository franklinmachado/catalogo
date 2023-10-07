export type Springpage<T> = {
    content:T[];
    last:boolean;
    totalElement:number;
    totalPages:number;
    size:number;
    number:number;
    first:boolean;
    numberOfElements?:number;
    empty:boolean;
}