export class TypeUserDTO{
    public id: number;
    public description: string;

    public constructor(id?:number,description?:string){
        this.id = id;
        this.description = description;
    }
}