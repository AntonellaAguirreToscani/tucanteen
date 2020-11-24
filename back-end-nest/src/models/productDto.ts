export class Product{
    public category : string;
    public id: number;
    public image : string;
    public description : string;
    public price : number;
    

    constructor(_category: string,_id:number,_image:string,_description:string,_price:number) {
      this.category = _category;
      this.id=_id;
      this.image=_image;
      this.description=_description;
      this.price=_price;
    }

    static void():Product{
        return new Product("",0,"","",0);
    }  
}