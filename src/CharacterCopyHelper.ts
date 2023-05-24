import { Destination, Source } from "./copier";

class CharacterCopyHelper{

    private mockWriteChar= jest.fn();
    private mockReadChar= jest.fn();


    public getSource():Source{
      
        return {

              readChar:this.mockReadChar
            
          }
    }

    public getDestination():Destination{
            
         return { 
           
              writeChar:this.mockWriteChar

            } 
     }

     public createSource(chars:string[]){
     
      chars.forEach(char => this.mockReadChar.mockReturnValueOnce(char));
  
      this.mockReadChar.mockReturnValue('\n')
      
     }

}

export default CharacterCopyHelper;