export interface AddUserRequest{
  emailAddress:string,
  userName:string
}


export interface EmailService{
   sendWelcomeLetter(emailAddress:string):void
}