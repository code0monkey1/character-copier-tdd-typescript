export interface EmailService{
  sendMessage(emailMessage:EmailMessage):void
}

export interface EmailMessage{
  subject:string,
  mailTo:string,
  message:string,
}