export class Sale{
    id: number;
    date : Date;
    descripcion: string; // refactorizar a Order[]
    total: number;

    constructor(_id:number,_date:Date,_descripcion:string,_total:number){
        this.id = _id;
        this.date = _date;
        this.descripcion = _descripcion;
        this.total = _total;
    }
    
}