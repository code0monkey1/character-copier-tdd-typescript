class Copier{
   
    constructor( readonly src:Source,readonly dest:Destination){}

}

interface Source{
     
    readChar:()=>string;
}

interface Destination{

  writeChar:()=>string;
}

export default Copier;