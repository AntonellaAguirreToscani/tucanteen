export class Sale{
   public id: number;
   public date : Date;
   public descripcion: string;
   public total: number;

    constructor(_id:number,_date:Date,_total:number,_descripcion?:string){
        this.id = _id;
        this.date = _date;
        this.descripcion = _descripcion;
        this.total = _total;
    }
    static void(): Sale {
        return new Sale(0,new Date(''),0,'');
    }
}