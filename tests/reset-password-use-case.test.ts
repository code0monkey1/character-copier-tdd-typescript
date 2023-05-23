import ResetPasswordUseCase from "../src/reset-password-use-case";
import EmailServiceHelper from "./helpers/EmailServiceHelper";

describe("Resent Password",()=>{
    
   test("Reset Password Use Case Exists",()=>{
       
      expect(ResetPasswordUseCase).toBeInstanceOf(Function)
       
   })

   test("should sent message to correct email address",()=>{
     
       //Arrange
       const emailServiceHelper= new EmailServiceHelper()
      
       const sut = new ResetPasswordUseCase(emailServiceHelper.getEmailService())
        
       //Act
       sut.execute("mail@gmail.com")
        
       //Assert
       expect(emailServiceHelper.getSentEmails()).toContain("mail@gmail.com")

       expect(emailServiceHelper.getEmailService).toBeCalled
   })


})

 
