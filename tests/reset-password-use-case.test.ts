import ResetPasswordUseCase, { EmailMessage, EmailService } from "../src/reset-password-use-case"

describe("Resent Password",()=>{
    
   test("Reset Password Use Case Exists",()=>{
       
      expect(ResetPasswordUseCase).toBeInstanceOf(Function)
       
   })

   test("should sent message to correct email address",()=>{
     
       //Arrange
        const emailsSent:EmailMessage[]=[]
        
        const emailService:EmailService = {
          sendMessage:jest.fn(
            emailMessage=>emailsSent.push(emailMessage)
            )
           }
          
        const sut = new ResetPasswordUseCase(emailService)
        
          //Act
          sut.execute("mail@gmail.com")
        
          //Assert
         expect(emailsSent.map(email=>email.mailTo)).toContain("mail@gmail.com")


         expect(emailService.sendMessage).toBeCalled
   })


})