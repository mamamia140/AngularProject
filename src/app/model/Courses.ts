export class Courses{
    constructor(private cCode:string, private cName:string, private cCredits:number){

    }
    get Code():string{
        return this.cCode;
    }
    set Code(value:string){
        this.cCode = value;
    }
    get Name():string{
        return this.cName;
    }
    set Name(value:string){
        this.cName = value;
    }
    get Credits():number{
        return this.cCredits;
    }
    set Credits(value:number){
        this.cCredits = value;
    }
}