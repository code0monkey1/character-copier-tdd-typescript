class Copier{
   
  constructor( private readonly src:Source,private readonly dest:Destination){}


  get source():Source{
    return this.src
  }

  get destination(): Destination{
    return this.dest
  }

   copy(){
     
    let char=this.src.readChar()
   
    while(this.isNotNewLineOrEmpty(char)){
      
         this.dest.writeChar(char)

         char=this.src.readChar()
    }
   
  }


  private isNotNewLineOrEmpty(character: string) {
    return character !== '\n' && character !== ''
  }
}

export interface Source{
     
    readChar:()=>string;
}

export interface Destination{

    writeChar:(c:string)=>void;

}


export default Copier;