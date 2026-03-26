import { useState } from "react"
import InputElement from "../components/InputElement.tsx"
import ErroElement from "../components/ErroElement.tsx"


const Form2 = () => {

    const [name , setName] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    const [email, setEmail] = useState<string>("")
    const [gender, setGender] = useState<string>("Male")
    const [hobby, setHobby] = useState<string[]>([])
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [creditCardNumber, setCreditCardNumber] = useState<string>("")

   type ErrorType = {
  nameError: string
  emailError: string
  ageError: string
  genderError: string
  hobbyError: string
  confirmPasswordError: string
  passwordError: string
  creditCardNumberError: string
}

const [errors, setErrors] = useState<ErrorType>({
  nameError: "",
  emailError: "",
  ageError: "",
  genderError: "",
  hobbyError: "",
  passwordError: "",
  confirmPasswordError: "",
  creditCardNumberError: ""
})

    const handleSubmit  = (e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()

        console.log(name);
        console.log(email);
        console.log(age)
        console.log(gender);
        console.log(hobby);
        console.log(password);
        console.log(confirmPassword);
        console.log(creditCardNumber);

    }

    const handleReset= () => {
        setName('')
        setEmail('')
        setAge(0)
        setGender('Male')
        setHobby([])
        setPassword('')
        setConfirmPassword('')
        setCreditCardNumber("")
    }

    const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) return "Email is required";

  if (!emailRegex.test(value)) {
    return "Invalid email format";
  }

  return "";
};

const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    const error = validateEmail(value)
    setErrors((prev) => (
        {...prev , emailError : error }
    ))
}

const validateAge = (value : number) => {
    if(!value) return "enter your age"
    
    if(value <=0 ) return "Age must be greater than 0"

    if(value > 120) return "Age seems invalid"
    return ''
}
const handleAgeChange = (e :  React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const value = e.target.value
    const err = validateAge(Number(value))
setAge(Number(value))
   setErrors((prev) => (
        {...prev , ageError : err }
    ))
}

const validateCreditCardNumber = (value :string) => {

    const cardRegex = /^[0-9]+$/

    if(!value) {
        return "credit card number is required"
    }

    if(!cardRegex.test(value)){
        return "card must contain only digits"
    }

    if(value.length !== 12 ) {
        return "credit card number must be 12 digits"
    }

    return ""
}

const handleCreditCardChange = (e :  React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {

    const value = e.target.value
    const error = validateCreditCardNumber(value)

    setCreditCardNumber(value)
    setErrors((prev) => (
        {...prev , creditCardNumberError : error}
    ))
}   

const validateConfirmPassword = (value : string) =>  {
    if(!value) return "confirm password can not be empty"

    if(value !== password) return "confirm password does not match with the password"
return ""
}

const handleConfirmPasswordChange= (e : React.ChangeEvent<HTMLInputElement, HTMLInputElement>) =>{
    const value = e.target.value
    const err = validateConfirmPassword(value)
    setConfirmPassword(value)
    setErrors((prev)=>({
        ...prev , confirmPasswordError: err
    }))
}


    const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {

            setHobby((prev) => {
                if(e.target.checked) {
                return [...prev , e.target.value] 
            }
                return hobby.filter((item) => item !== e.target.value)
             })
            
            }

const handleChange = (e : React.ChangeEvent<HTMLInputElement, HTMLInputElement>, setValue : React.Dispatch<React.SetStateAction<string>>, setErrors : React.Dispatch<React.SetStateAction<ErrorType>> ,ErrName : string,  nameMsg : string) => {
  const value = e.target.value;
  setValue(value)
  if (value === "") {
    setErrors((err) => ({
      ...err,
      [ErrName]: nameMsg
    }));
  } else {
    setErrors((err) => ({
      ...err,
      [ErrName] : ""
    }));
  }
}

    return (



    <div>

<form onSubmit={handleSubmit} >

<InputElement label="Name" name="name" id="Name" type="text" value={name} onChange={(e) => handleChange(e ,setName , setErrors ,"nameError", "name should not be empty")} placeholder="Enter Your Name"/>

 <ErroElement errorMsg={errors.nameError}/>  

<InputElement label="Age" name="age" id="age" type="number" value={age} onChange={(e) => handleAgeChange(e)} placeholder="Enter Your Age"/>

 <ErroElement errorMsg={errors.ageError}/>  

<InputElement label="Email" name="email" id="email" type="email" value={email} onChange={(e) => handleEmailChange(e) } placeholder="Enter Your Email"/>

 <ErroElement errorMsg={errors.emailError}/>  

<InputElement label="Gender" name="Gender" id="gender" type="radio" value={gender}  onChange={(e) => handleChange(e ,setGender , setErrors ,"genderError" , "gender should be selected") }  options={[{value: "Male"} , {value: "Female"}]}  placeholder="select your gender"/>
 
 <ErroElement errorMsg={errors.genderError}/>  


<InputElement label="Hobby" name="Hobby" id="hobby" type="checkbox" value={hobby} onChange={handleCheckBoxChange} options={[{value: "Dancing"} , {value: "Walking"} , {value: "Reading"}]}  placeholder="select Your Hobby"/>
    

    <InputElement label="password" name="password" id="password" type="password" value={password} onChange={(e) => handleChange(e ,setPassword , setErrors ,"passwordError" , "password should be entered") }  placeholder="enter your password"/>

 <ErroElement errorMsg={errors.passwordError}/>  
    
    <InputElement label="confirm password" name="confirmpassword" id="confirmpassword" type="password" value={confirmPassword} onChange={(e) => handleConfirmPasswordChange(e)} placeholder="Confirm Your Password "/>

 <ErroElement errorMsg={errors.confirmPasswordError}/>  
    
    <InputElement label="credit card number" name="creditnumber" id="number" type="text" value={creditCardNumber}onChange={(e) => handleCreditCardChange(e)}  placeholder="Enter Your Credit Card Number"/>
 <ErroElement errorMsg={errors.creditCardNumberError}/>  

    <button type="submit">
        Submit
    </button>

    <button type="reset" onClick={handleReset}>
        Reset
    </button>

</form>

    </div>
    
)
}

export default Form2