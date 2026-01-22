// A generator function is defined using the function* syntax (note the asterisk). Inside the function, you use the yield keyword to pause execution and "send back" a value to the caller

function* generate(){
    let signin = singin()
    if(signin == true) {
        yield "sign in successfully"
        let sent  = EmailSend()

        if(sent) {
            yield "email send for verification purpose"

            let verify = verifyOTP()
        
            if(verify) yield "your account has been verified succesfully"
        
            else yield "verification unsuccesfull"
        
        }else {
            yield "email is not sent"
        }
    
    }else{
    
        yield "unsccessfull sign in"
    
    }

}