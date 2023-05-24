import { Destination, Source } from "./copier";

class CharacterCopyHelper{

    private mockWriteChar= jest.fn();
  


    public getDestination():Destination{
            
         return { 
           
              writeChar:this.mockWriteChar

            } 

     }

     public createSource(chars:string[]){

      const mockReadChar= jest.fn();
     
      chars.forEach(char => mockReadChar.mockReturnValueOnce(char));
  
      return {

              readChar:mockReadChar
            
          }

     }

     public getMockWriteChar(){
        return this.mockWriteChar;
     }

}

export default CharacterCopyHelper;