import { AddUserUseCase, EmailService } from "./add-user-use-case"

describe('add-user-use-case',()=>{

   describe('execute',()=>{
      
      test('AddUserCuseCase does exist',()=>{

        expect(AddUserUseCase).toBeInstanceOf(Function)
      })

      test('should send welcome letter',()=>{
        const userRequest={
          emailAddress:"chiranjeev@gmail.com",
          userName:"Chiranjeev"
        }
  
        const emails:string[]=[]

            class UserEmailService implements EmailService{
          
          sendWelcomeLetter(emailAddress: string): void {
            emails.push(emailAddress)
          }
          
        }
      
        const userEmailService = new UserEmailService();

        const sut = new AddUserUseCase(userEmailService)
        
        sut.execute(userRequest)

        expect(emails).toContain(userRequest.emailAddress)
         
      })
   })
})