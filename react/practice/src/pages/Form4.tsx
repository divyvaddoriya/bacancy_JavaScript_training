import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import ErrorElement from "../components/ErroElement"
import HookFormInput from "../components/HookFormInput"



// schema validation form with the zod library 


const formSchema = z.object({

name: z.string().min(1,"Name is required"),

age: z.coerce
.number()
.min(1,"Age must be greater than 0")
.max(120,"Invalid age"),

email: z.email("Invalid Email"),

gender: z.enum(["Male","Female"]),

hobby: z.array(z.string()).min(1,"Select at least one hobby"),

password: z.string().min(6,"Password must be at least 6 characters"),

confirmPassword: z.string(),

creditCardNumber: z
.string()
.regex(/^[0-9]{12}$/,"Credit card must be 12 digits")

})
.refine((data)=>data.password===data.confirmPassword,{
message:"Passwords do not match",
path:["confirmPassword"]
})


const Form4 = () => {

const {
register,
handleSubmit,
formState:{errors},
} = useForm({
resolver:zodResolver(formSchema),
// mode:""
defaultValues:{
hobby:[]
}
})

const handleFormSubmit = (data : any)=>{
console.log(data)
}

return (

<div>

<form onSubmit={handleSubmit(handleFormSubmit)}>

<HookFormInput
label="Name"
type="text"
{...register("name")}
/>
<ErrorElement errorMsg={errors.name?.message} />

<HookFormInput
label="Age"
type="number"
{...register("age",{valueAsNumber:true})}
/>
<ErrorElement errorMsg={errors.age?.message} />

<HookFormInput
label="Email"
type="email"
{...register("email")}
/>
<ErrorElement errorMsg={errors.email?.message} />

<HookFormInput
label="Gender"
type="radio"
options={[
{value:"Male"},
{value:"Female"}
]}
{...register("gender")}
/>
<ErrorElement errorMsg={errors.gender?.message} />

< HookFormInput
label="Hobby"
type="checkbox"
options={[
{value:"Dancing"},
{value:"Walking"},
{value:"Reading"}
]}
{...register("hobby")}
/>
<ErrorElement errorMsg={errors.hobby?.message} />

<HookFormInput
label="Password"
type="password"
{...register("password")}
/>
<ErrorElement errorMsg={errors.password?.message} />

<HookFormInput
label="Confirm Password"
type="password"
{...register("confirmPassword")}
/>
<ErrorElement errorMsg={errors.confirmPassword?.message} />

<HookFormInput
label="Credit Card"
type="text"
{...register("creditCardNumber")}
/>

<ErrorElement errorMsg={errors.creditCardNumber?.message} />

<button type="submit">Submit</button>

</form>

</div>

)
}

export default Form4