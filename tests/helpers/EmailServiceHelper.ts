import { EmailService } from "../../src/reset-password-use-case";

class EmailServiceHelper{
      
      private emailsSentTo:string[]=[]

      private emailService:EmailService=this.createMockEmailService(email=>this.emailsSentTo.push(email))
      
      private createMockEmailService(captureFn:(email:string)=>void):EmailService{
          
          return{

                sendMessage:jest.fn(
                 message=>captureFn(message.mailTo)
                )
            }

      }

      public getSentEmails(){
          return this.emailsSentTo;
      }

      public getEmailService():EmailService{
          return this.emailService;
      }
       
   }

   export default EmailServiceHelper;