class Copier{
   
  constructor( private readonly src:Source,private readonly dest:Destination){}


  get source():Source{
    return this.src
  }

  get destination(): Destination{
    return this.dest
  }

}

interface Source{
     
    readChar:()=>string;
}

interface Destination{

    writeChar:()=>string;

}


export default Copier;