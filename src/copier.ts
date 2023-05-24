class Copier{
   
  constructor( private readonly src:Source,private readonly dest:Destination){}


  get source():Source{
    return this.src
  }

  get destination(): Destination{
    return this.dest
  }

   copy(){
     
    let character='@'
   
      do{
        
         const character=this.src.readChar()

         if(character==='\n' || character==='')break;
         
         this.dest.writeChar(character)
      }
      while(character!=='\n');
  }

}

export interface Source{
     
    readChar:()=>string;
}

export interface Destination{

    writeChar:(c:string)=>void;

}


export default Copier;