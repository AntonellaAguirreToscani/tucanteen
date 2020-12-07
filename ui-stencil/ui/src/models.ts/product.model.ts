export class Product{
    public id: number;
    public name: string;
    public description : string;
    public image : string;
    public price : number;
    public category : string;

    constructor(_id:number,_image:string,_description:string,_price:number,_category: string,_name: string) {
      this.id=_id;
      this.image=_image;
      this.description=_description;
      this.price=_price;
      this.name = _name;
    }

    static void():Product{
        return new Product(0,"","",0,"","");
    }  
}