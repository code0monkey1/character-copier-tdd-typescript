import CharacterCopyHelper from '../src/CharacterCopyHelper';
import Copier from '../src/copier';

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
            const sut = copier
            
            //Act
            characterCopyHelper.createSource([char])
            
            sut.copy()
          
            //Assert
            expect(copier.destination.writeChar).toBeCalledTimes(1)
            expect(characterCopyHelper.getWrittenChars()).toEqual([char])
      })

    })
    describe('multiple characters with newline',()=>{
        
      test.each([
              {chars:['a','b']},
              {chars:['c','d']},
              {chars:['e','f']},
              {chars:['a','b','h','d','r','*','%','$','#']}
          ])('chars: $chars is returned',({chars})=>{
             
            //Arrange
            const destination= copier.destination
                
            //Act
            characterCopyHelper.createSource(chars);

            const sut = copier
            
            //Act
            sut.copy()
              
             //Assert
            // expect(destination.writeChar).toBeCalledTimes(chars.length)

           expect(destination.writeChar).toBeCalledTimes(chars.length)
           expect(characterCopyHelper.getWrittenChars()).toEqual(chars)
   
  
          })

     })

     describe('no characters with newline',()=>{
        
      test.each([
              {chars:''},
              {chars:''},
              {chars:''}
          ])('chars: $chars is returned',({chars})=>{
             
                 //Arrange
            const destination= characterCopyHelper.getDestination()        
                
            //Act
            characterCopyHelper.createSource([chars]);
            const sut = copier

            //Act
            sut.copy()
              
             //Assert
            expect(destination.writeChar).toBeCalledTimes(chars.length)

            expect(destination.writeChar).toHaveBeenCalledTimes(0)
  
          })

     })

      describe('no characters after new line are written',()=>{
        
      test.each([
              {chars:['a','\n','c','d']},
              {chars:['t','o','d','a','y','\n','r','w']},
              {chars:['f','u','n','\n','p','a','r','t','y']}
          ])('chars: $chars is returned',({chars})=>{
             
            //Arrange
            const destination= characterCopyHelper.getDestination()            
                
            //Act
            characterCopyHelper.createSource(chars);
            const sut = copier

            //Act
            sut.copy()
              
             //Assert
            expect(destination.writeChar)
            .toBeCalledTimes(chars.slice(0,chars.indexOf('\n')).length)
          
            chars
            .slice(chars.indexOf('\n'))
            .map(char => expect(destination.writeChar).not.toHaveBeenCalledWith(char))
  
          })

     })



})

})