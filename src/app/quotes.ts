export class Quotes {
    // author!: string;
    // quote!: string;
    // description!:any;

   showDescription:boolean;
   constructor(public author:string, public quote:string, public description:string, public dateCreated:Date) {
       this.showDescription=false;
   }
}

