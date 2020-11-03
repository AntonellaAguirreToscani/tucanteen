export class Product{
    public id: number;
    public image : string;
    public description : string;
    public price : number;
    public category : string;

    constructor(_id:number,_image:string,_description:string,_price:number,_category: string) {
      this.id=_id;
      this.image=_image;
      this.description=_description;
      this.price=_price;
    }

    static void():Product{
        return new Product(0,"","",0,"");
    }  
}