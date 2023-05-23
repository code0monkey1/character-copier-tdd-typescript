export interface EmailService{
  sendMessage(emailMessage:EmailMessage):void
}

export interface EmailMessage{
  subject:string,
  mailTo:string,
  message:string,
}


class ResetPasswordUseCase{

    constructor(private readonly emailService:EmailService){}
    
    public execute(emailAddress:string){
     
      const emailMessage:EmailMessage={
       mailTo:emailAddress,
       message:"Whatever",
       subject:"Hello"
      }
      
      this.emailService.sendMessage(emailMessage)
    }
}


export default ResetPasswordUseCase;