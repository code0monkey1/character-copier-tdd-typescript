import CharacterCopyHelper from '../src/CharacterCopyHelper';
import Copier, { Destination, Source } from '../src/copier';

describe('character-copy',()=>{
    
    let characterCopyHelper=new CharacterCopyHelper();
    let copier = new Copier(characterCopyHelper.getSource(),characterCopyHelper.getDestination());

    beforeEach(()=>{

     characterCopyHelper=new CharacterCopyHelper();

     copier = new Copier(characterCopyHelper.getSource(),characterCopyHelper.getDestination())
    

    })
   
  describe('copy',()=>{


    describe('one character with newline',()=>{

          test
          .each([
            {char:'a'},
            {char:'b'},
            {char:'c'}
        ])('char: $char is returned',({char})=>{
      
            //Arrange
            const charWriter= characterCopyHelper.getMockWriteChar()        

            const sut = copier
            
            //Act
            characterCopyHelper.readChars(char)
            
            sut.copy()
          
            //Assert
            expect(charWriter).toBeCalledTimes(1)
            
            expect(charWriter).toHaveBeenCalledWith(char)
          
      })

    })
    describe('multiple characters with newline',()=>{
        
      test.each([
              {chars:['a','b']},
              {chars:['c','d']},
              {chars:['e','f']}
          ])('chars: $chars is returned',({chars})=>{
             
                 //Arrange
            const mockWriteChar= jest.fn()

            const mockReadChar= jest.fn()

            chars.forEach(char => {
              mockReadChar.mockReturnValueOnce(char)
            });
  
            mockReadChar.mockReturnValue('\n')

            const src:Source ={
              readChar:mockReadChar
            }

            const destination:Destination = { 
              writeChar:mockWriteChar
            } 

            const sut = new Copier(src,destination)
            //Act
            sut.copy()
            
              //Assert
          expect(mockWriteChar).toBeCalledTimes(chars.length)

          chars.forEach( char =>{
                      expect(mockWriteChar).toHaveBeenCalledWith(char)
          })
  
            
          })

     })


})

})