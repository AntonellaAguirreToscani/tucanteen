export class ProductDTO{
    public id: number;
    public name: string;
    public description: string;
    public image : string;
    public price: number;
    public category: string;

    public constructor(id?:number,name?:string,description?:string,image?:string,price?:number,category?:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.category = category;
    }
}