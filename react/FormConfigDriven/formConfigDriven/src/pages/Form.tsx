import React, { useState } from "react";
import type { CategoryWiseInputType, RegistryType } from "../types/Form";
import FormInputTextField from "../components/FormInputTextField";
import FormInputSelectField from "../components/FormInputSelectField";
import FormInputRadioField from "../components/FormInputRadioField";
import FormInputCheckboxField from "../components/FormInputCheckboxField";
import { initFormData } from "../utils/initializeData";
import FormInputNumberField from "../components/FormInputNumberField";
import { checkValidation } from "../utils/validataionData";

 const Inputs: CategoryWiseInputType[] = [
  {
    category: "Personal Information",
    fields: [
      {
        id: "firstname",
        label: "FirstName",
        required: false,
        name: "firstname",
        validation: [
          {
            type: "required",
            message: "Firstname is Required",
          },
          {
            type: "lt",
            value: 5,
            message: "minimum 5 letter required for firstname"
          }
        ],
        type: "text",
      },
      {
        id: "password",
        label: "Password",
        type: "password",
        required: false,
        name: "password",
        validation: [{ type: "required", message: "Password is Required" } , 
            {type: "regex" , regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/ , message: "the password should have a minimum length of 8 characters and includes at least one of each: lowercase letter, uppercase letter, number, and special character" },{type: "match" , fieldName: "confirmPassword" , message : "password does not match with confirm password"} 
        ],
      },
      {
        id: "confirmPassword",
        label: "ConfirmPassword",
        type: "password",
        required: false,
        name: "confirmPassword",
        validation: [
          { type: "required", message: "ConfirmPassword is Required" },
          {
            type: "match",
            fieldName: "password",
            message: "ConfirmPassword Does not match with the Your Password",
          },
        ],
        placeholder: "Confirm Your Password",
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        required: false,
        name: "email",
        validation: [
          { type: "required", message: "Email is Required" },
          {
            type: "regex",
            regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Email is Not Valid",
          },
        ],
        placeholder: "Enter Email",
      },
    ],
  },
  {
    category: "Extra Information",
    fields: [
      {
        id: "hobbies",
        label: "Hobbies",
        type: "checkbox",
        defaultValue: [],
        required: false,
        name: "hobbies",
        options: [
          { name: "dancing", value: "dancing"},
          { name: "reading", value: "reading" },
          { name: "singing", value: "singing" },
          { name: "coding", value: "coding" },
        ],validation: [
            {type: 'required' , message: "1 Hobby is Required"},
            {type: 'lt' , value: 1 , message: "1 Hobby is Required"}
        ]
      },
    ],
  },
  {
    id: "country",
    label: "Country",
    type: "select",
    defaultValue: "india",
    options: [
      { name: "india", value: "india" },
      { name: "USA", value: "USA" },
    ],
    name: "country",
    required: false,
  },
  {
    id: "gender",
    label: "Gender",
    type: "radio",
    required: false,
    name: "gender",
    options : [
        {name: "male" , value: "male" , checked: false},
        {name: "female" , value: "female" , checked: false},
    ],validation: [
        {type: "required" , message: "gender is required"}
    ]
  },
  
  {
    id: "age",
    label: "Age",
    type: "number",
    required: false,
    name: "age",
    defaultValue: 0,
    validation: [
        {type: "required" , message:"age is required"},
        {type: "min" , message: "age cant be less than 0" , value: 0},
        {type: "max" , message: "age should be realistic" , value: 120}
    ]
  },
  {
    id: "yesorno",
    type: "radio",
    name: "yesorno",
    label: "YES or No",
    options: [
        {name: "yes" , value: "yes" , checked : true},
        {name: "no" , value: "no" , checked : true},
    ],
    required: false
  }
];

const initialData = initFormData(Inputs) 

const Form = ({inputs , handleSubmit} : {inputs: CategoryWiseInputType[] , handleSubmit ?: ( formData : {[key : string] : string} ) => void}) => {

    const [formData , setFormData] = useState<{[key : string] : string | number | string [] | boolean}>(initialData)
    
    const [errors , setErrors] = useState<Record<string , string>>({})    

    const inputRegistry : RegistryType = {
    email: FormInputTextField ,
    password : FormInputTextField ,
    select : FormInputSelectField ,
    radio : FormInputRadioField,
    checkbox : FormInputCheckboxField ,
    text : FormInputTextField,
    number: FormInputNumberField
   }

   const onHandleSubmit = (e :  React.SubmitEvent<HTMLFormElement>) => {
    
    e.preventDefault()

    for(const data of inputs) {
        if("category" in data){
            data.fields.map((field) => {
                if(field.validation){
               const error = checkValidation(field.validation , formData[field.name] , formData)
               setErrors((prev) => ({...prev , [field.name] : error}))
            }
            })
        }else{
            if(data?.validation){
                const error = checkValidation(data.validation , formData[data.name] , formData )
                setErrors((prev) => ({...prev , [data.name] : error}))
            }
        }
    }

}

const handleReset = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setFormData(initialData)
}
   
  return <div>

    <form onSubmit={(e)=>onHandleSubmit(e)}>


    {inputs.map((input) => {   
        
        if("category" in input) {
            
            return <fieldset key={input.category}>

            <legend>{input.category}</legend>

            {input.fields.map((data) => {
                const FieldComponent = inputRegistry[data.type] as React.ComponentType<any>
                

                return <FieldComponent key={data.id} {...data} setFormData={setFormData} value={formData[data.name]} setErrors={setErrors} error={errors[data.name]} />
            })}

            </fieldset>
          
        }
        else{
            const FieldComponent = inputRegistry[input.type] as React.ComponentType<any>
            
            return  (
                <FieldComponent key={input.id} {...input} setFormData={setFormData} value={formData[input.name]} setErrors={setErrors} error={errors[input.name]}  />
            )
        }
    })}

    <button type="submit">Submit</button>
    <button type="reset" onClick={(e)=>handleReset(e)}>Reset</button>

    </form>
  </div>;
};

export {Inputs}

export default Form;
