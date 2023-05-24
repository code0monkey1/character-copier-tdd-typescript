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
              {chars:'ab'},
              {chars:'cd'},
              {chars:'ef'},
              {chars:'a,bhdr*%$#'}
          ])('chars: $chars is returned',({chars})=>{
             
                 //Arrange
            const charWriter= characterCopyHelper.getMockWriteChar()        
                
            //Act
            characterCopyHelper.readChars(chars);

            const sut = copier
            //Act
              sut.copy()
              
             //Assert
            expect(charWriter).toBeCalledTimes(chars.length)

            chars.split('').forEach( char =>{
                        expect(charWriter).toHaveBeenCalledWith(char)
             })
  
          })

     })

     describe('no characters with newline',()=>{
        
      test.each([
              {chars:''},
              {chars:''},
              {chars:''}
          ])('chars: $chars is returned',({chars})=>{
             
                 //Arrange
            const charWriter= characterCopyHelper.getMockWriteChar()        
                
            //Act
            characterCopyHelper.readChars(chars);
            // const sut = copier

            //Act
            // sut.copy()
              
             //Assert
            expect(charWriter).toBeCalledTimes(chars.length)

            expect(charWriter).toHaveBeenCalledTimes(0)
  
          })

     })

      describe('no characters after new line are written',()=>{
        
      test.each([
              {chars:'a\ncd'},
              {chars:'today\nrw'},
              {chars:'fun\nparty'}
          ])('chars: $chars is returned',({chars})=>{
             
            //Arrange
            const charWriter= characterCopyHelper.getMockWriteChar()        
                
            //Act
            characterCopyHelper.readChars(chars);
            const sut = copier

            //Act
            sut.copy()
              
             //Assert
            expect(charWriter)
            .toBeCalledTimes(chars.slice(0,chars.indexOf('\n')).length)
          
            chars
            .slice(chars.indexOf('\n'))
            .split('')
            .map(char => expect(charWriter).not.toHaveBeenCalledWith(char))
  
          })

     })



})

})