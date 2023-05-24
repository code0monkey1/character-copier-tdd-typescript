import { Destination, Source } from "./copier";

class CharacterCopyHelper{

    private mockReadChar= jest.fn();
    private writtenChars:string[]=[]

    public getWrittenChars(){
        return  this.writtenChars
    }

    public getSource():Source{
      
        return {

              readChar:this.mockReadChar
            
          }
    }

    public getDestination():Destination{

         return { 
           
              writeChar:jest.fn((c)=>this.writtenChars.push(c))

            } 
     }

     public createSource(chars:string[]){
     
      chars.forEach(char => this.mockReadChar.mockReturnValueOnce(char));
  
      this.mockReadChar.mockReturnValue('\n')
      
     }

}

export default CharacterCopyHelper;