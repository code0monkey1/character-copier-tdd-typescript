import { AddUserUseCase, EmailService } from "./add-user-use-case"

describe('add-user-use-case',()=>{

  //  describe('execute',()=>{
      
  //     test('AddUserCuseCase does exist',()=>{

  //       expect(AddUserUseCase).toBeInstanceOf(Function)
  //     })

  //     test('should send welcome letter',()=>{
  //       const userRequest={
  //         emailAddress:"chiranjeev@gmail.com",
  //         userName:"Chiranjeev"
  //       }

  //       const mockEmailService = new MockEmailService();

  //       const sut = new AddUserUseCase(mockEmailService)
        
  //       sut.execute(userRequest)

  //       sut.execute({
  //         emailAddress:"Crazy@gmail.com",
  //         userName:"Veeru"
  //       })
        
  //       expect(mockEmailService.wasSendWelcomeLetterCalled).toBeTruthy()
  //       expect(mockEmailService.sentEmails).toContain("Crazy@gmail.com")
        
  //     })
  //  })
    describe('execute using jest',()=>{
      
      test('AddUserCuseCase does exist',()=>{

        expect(AddUserUseCase).toBeInstanceOf(Function)
      })

      test('should send welcome letter',()=>{
        const userRequest={
          emailAddress:"chiranjeev@gmail.com",
          userName:"Chiranjeev"
        }

        const sentWelcomeEmailAddresses:string[]=[]

        const mockEmailService={
            sendWelcomeLetter:jest.fn(
              address => sentWelcomeEmailAddresses.push(address)
            )
        }

        const sut = new AddUserUseCase(mockEmailService)
        
        sut.execute(userRequest)

        sut.execute({
          emailAddress:"Crazy@gmail.com",
          userName:"Veeru"
        })

        expect(sentWelcomeEmailAddresses).toContain("Crazy@gmail.com")
        
      })
   })
})


        // class MockEmailService implements EmailService{
        //   public sentEmails:string[]=[]
        //   public  wasSendWelcomeLetterCalled:boolean=false;

        //   sendWelcomeLetter(emailAddress: string): void {
        //     this.wasSendWelcomeLetterCalled=true;
        //     this.sentEmails.push(emailAddress)
        //   }
          
        // }