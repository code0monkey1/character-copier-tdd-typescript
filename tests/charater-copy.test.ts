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
            expect(characterCopyHelper.getWrittenChars()).toStrictEqual([char])
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
                
            //Act
            characterCopyHelper.createSource(chars);

            const sut = copier
            
            //Act
            sut.copy()
              
             //Assert
            // expect(destination.writeChar).toBeCalledTimes(chars.length)

            expect(characterCopyHelper.getWrittenChars()).toStrictEqual(chars)
   
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
            expect(destination.writeChar).toHaveBeenCalledTimes(0)
  
          })

     })

      describe('no characters after new line are written',()=>{
        
      test.each([
        
              {
                chars:['a','\n','c','d'],
                expected:['a']
              },
              { 
                chars:['t','o','d','a','y','\n','r','w'],
                expected:['t','o','d','a','y']
              },
              {
                chars:['f','u','n','\n','p','a','r','t','y'],
                expected:['f','u','n']
              }

          ])('chars: $chars returns $expected',({chars,expected})=>{
             
            //Arrange       
            characterCopyHelper.createSource(chars);
            const sut = copier

            //Act
            sut.copy()
              
             //Assert
            expect(characterCopyHelper.getWrittenChars())
            .toStrictEqual(expected)

     
        
          })

     })



})

})
