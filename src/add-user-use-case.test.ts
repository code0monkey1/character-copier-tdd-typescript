import { AddUserUseCase, EmailService } from "./add-user-use-case"

describe('add-user-use-case',()=>{

   describe('execute',()=>{
      
      test('AddUserCuseCase does exist',()=>{

        expect(AddUserUseCase).toBeInstanceOf(Function)
      })

      test('does exist',()=>{
        const userRequest={
          emailAddress:"chiranjeev@gmail.com",
          userName:"Chiranjeev"
        }
        // const emails:string[]=[]

        // const emailService:EmailService=jest.fn(
            
        //    emailAddress=>emails.push(emailAddress)
        // )

        // const sut = new AddUserUseCase(emailService)
           
      })
   })
})