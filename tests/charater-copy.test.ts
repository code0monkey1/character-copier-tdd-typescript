import Copier, { Destination, Source } from '../src/copier'

describe('character-copy',()=>{
   
  describe('copy',()=>{
       
    describe('one character with newline',()=>{

          test
          .each([
            {char:'a'},
            {char:'b'},
            {char:'c'}
        ])('char: $char is returned',({char})=>{
      
            //Arrange
            const mockWriteChar= jest.fn()
                                    
            const mockReadChar= jest.fn()
                                    .mockReturnValueOnce(char)
                                    .mockReturnValue('\n')

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
            expect(mockWriteChar).toBeCalledTimes(1)
            
            expect(mockWriteChar).toHaveBeenCalledWith(char)
        
          
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
            //expect(mockWriteChar).toBeCalledTimes(2)
            expect(mockWriteChar).toHaveBeenCalledWith(chars[0])
            expect(mockWriteChar).toHaveBeenCalledWith(chars[1])
            
          })

     })


})

})