import ResetPasswordUseCase from "../src/reset-password-use-case";
import EmailServiceHelper from "./helpers/EmailServiceHelper";

describe("Resent Password",()=>{
   
   let emailServiceHelper = new EmailServiceHelper()
   let resetPasswordUseCase = new ResetPasswordUseCase(emailServiceHelper.getEmailService())

   beforeEach(()=>{

    emailServiceHelper = new EmailServiceHelper()
    resetPasswordUseCase = new ResetPasswordUseCase(emailServiceHelper.getEmailService())
   
   })
    
   test("Reset Password Use Case Exists",()=>{
       
      expect(ResetPasswordUseCase).toBeInstanceOf(Function);
       
   })

   test("should sent message to correct email address",()=>{
     
       //Arrange   
       const sut = resetPasswordUseCase
        
       //Act
       sut.execute("mail@gmail.com")
        
       //Assert
       expect(emailServiceHelper.getEmailsSent()).toContain("mail@gmail.com")

       expect(emailServiceHelper.getEmailService).toBeCalled
   })


})

 
