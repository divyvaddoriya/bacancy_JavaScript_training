import { useState } from "react"
import InputElement from "../components/InputElement.tsx"


const Form1 = () => {

    const [name , setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [gender, setGender] = useState<string>("Male")
    const [hobby, setHobby] = useState<string[]>([])
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [creditCardNumber, setCreditCardNumber] = useState<number>(0)



    const handleSubmit  = (e : React.SubmitEvent<HTMLFormElement>)=>{

        e.preventDefault()

        console.log(name);
        console.log(email);
        console.log(gender);
        console.log(hobby);
        console.log(password);
        console.log(confirmPassword);
        console.log(creditCardNumber);

    }

    const handleReset= () => {
        setName('')
        setEmail('')
        setGender('Male')
        setHobby([])
        setPassword('')
        setConfirmPassword('')
        setCreditCardNumber(0)
    }

    const handleCheckBoxChange = (e :React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {

            setHobby((prev) => {
                if(e.target.checked) {
                return [...prev , e.target.value] 
            }
                return hobby.filter((item) => item !== e.target.value)
             })
            
            }

    return (



    <div>

<form onSubmit={handleSubmit} >

<InputElement label="Name" name="name" id="Name" type="text" value={name} onChange={(e) => setName(e.target.value) } placeholder="Enter Your Name"/>
<InputElement label="Email" name="email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Enter Your Email"/>

<InputElement label="Gender" name="Gender" id="gender" type="radio" value={gender} onChange={(e) => setGender(e.target.value) } options={[{value: "Male"} , {value: "Female"}]}  placeholder="select your gender"/>


<InputElement label="Hobby" name="Hobby" id="hobby" type="checkbox" value={hobby} onChange={handleCheckBoxChange} options={[{value: "Dancing"} , {value: "Walking"} , {value: "Reading"}]}  placeholder="select Your Hobby"/>
    

    <InputElement label="password" name="password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="enter your password"/>

    <InputElement label="confirm password" name="confirmpassword" id="confirmpassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) } placeholder="Confirm Your Password "/>

    <InputElement label="credit card number" name="creditnumber" id="number" type="creditnumber" value={creditCardNumber} onChange={(e) => setCreditCardNumber(Number(e.target.value)) } placeholder="Enter Your Credit Card Number"/>

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

export default Form1