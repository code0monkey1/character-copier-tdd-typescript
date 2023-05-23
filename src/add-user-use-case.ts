export interface AddUserRequest{
  emailAddress:string,
  userName:string
}

export interface EmailService{
   sendWelcomeLetter(emailAddress:string):void
}

export class AddUserUseCase{
   constructor(private emailService:EmailService){}

   public execute(addUserRequest:AddUserRequest){
    // check if userName is avialbable 
    // check if email address is available
    // add user

    this.emailService.sendWelcomeLetter(addUserRequest.emailAddress)
   }
}