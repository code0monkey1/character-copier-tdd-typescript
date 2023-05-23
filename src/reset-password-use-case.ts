export interface EmailService{
  sendMessage(emailMessage:EmailMessage):void
}

export interface EmailMessage{
  subject:string,
  mailTo:string,
  message:string,
}


export class ResetPasswordUseCase{

    constructor(private readonly emailService:EmailService){}
    
    public execute(emailAddress:string){
     
      const emailMessage:EmailMessage={
       mailTo:emailAddress,
       message:"Please reset your email password",
       subject:"Password Reset"

      }
      
      this.emailService.sendMessage(emailMessage)
    }
}