import ResetPasswordUseCase, { EmailMessage, EmailService } from "../src/reset-password-use-case"

describe("Resent Password",()=>{
    
   test("Reset Password Use Case Exists",()=>{
       
      expect(ResetPasswordUseCase).toBeInstanceOf(Function)
       
   })

   test("should sent message to correct email address",()=>{
     
       //Arrange
        const emailsSentTo:string[]=[]
        
        // const emailService:EmailService = {
        //   sendMessage:jest.fn(
        //     emailMessage=>emailsSentTo.push(emailMessage.mailTo)
        //     )
        //    }
          
        const emailService:EmailService = createMockEmailService( email=>emailsSentTo.push(email))
      
        const sut = new ResetPasswordUseCase(emailService)
        
          //Act
        sut.execute("mail@gmail.com")
        
          //Assert
         expect(emailsSentTo).toContain("mail@gmail.com")


         expect(emailService.sendMessage).toBeCalled
   })

   function createMockEmailService(captureFn:(email:string)=>void):EmailService{
          return{

            sendMessage:jest.fn(
               message=>captureFn(message.mailTo)
            )
          }
   }


})