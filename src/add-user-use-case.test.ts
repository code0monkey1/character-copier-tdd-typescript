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

        class MockEmailService implements EmailService{

          public  wasSendWelcomeLetterCalled:boolean=false;

          sendWelcomeLetter(emailAddress: string): void {
            this.wasSendWelcomeLetterCalled=true;
            emails.push(emailAddress)
          }
          
        }
      
        const mockEmailService = new MockEmailService();

        const sut = new AddUserUseCase(mockEmailService)
        
        sut.execute(userRequest)
        
        expect(mockEmailService.wasSendWelcomeLetterCalled).toBeTruthy()
      
      })
   })
})