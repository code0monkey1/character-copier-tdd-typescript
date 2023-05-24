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

     public readCharsArray(arr:string[]){


     }


}