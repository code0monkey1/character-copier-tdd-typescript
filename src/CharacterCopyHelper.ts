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

     public readChars(chars:string){
     
         chars.split('').forEach(char => {
              this.mockReadChar.mockReturnValueOnce(char)
            });
  
            this.mockReadChar.mockReturnValue('\n')
     }

     public getMockWriteChar(){
        return this.mockWriteChar;
     }

      public getMockReadChar(){
        return this.mockReadChar;
     }


}

export default CharacterCopyHelper;