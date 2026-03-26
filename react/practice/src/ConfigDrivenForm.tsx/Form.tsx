import React, { useState } from 'react'
import FormWrapper from './components/FormWrapper'

 
const Inputs : FormInputType[]  = [
    { 
        type: 'text', 
        label : 'First Name',
        placeholder : "Enter your first name",
        value: '',
        id: 'first_name',
        name: 'first_name',
        error: '',
        disabled: false, 
        readonly: false
     },
      { 
        type: 'text', 
        label : 'Last Name',
        placeholder : "Enter your last name",
        value: '',
        id: 'last_name',
        name: 'last_name',
        error: '',
        disabled: false, 
        readonly: false
     }
  ]

export  type FormInputType = {
    label : string ,

    placeholder: string ,
     type: string, 
        value: any,
        id: string,
        name: string,
        checked? : boolean,
        error: string
        disabled: boolean, 
        readonly: boolean
}

const Form = () => {
  
    const [inputs , setInputs] = useState<FormInputType[]>(structuredClone(Inputs))
 
    function onInputChange({id , index , value , checked} : {id?: string , index?: number , value? : unknown , checked? : boolean}) {
       
        const oldState = structuredClone(Inputs)

        if(oldState[index!].type == "checkbox") {
            oldState[index!].checked = checked
        }else{
            oldState[index!].value = value
        }
        setInputs(oldState)
        console.log(id , index , value , checked)
    }

    return (
    <div>
        <FormWrapper onInputChange={onInputChange} inputs={inputs} />
    </div>
  )
}

export default Form