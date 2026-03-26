import React, { useMemo } from 'react'
import type {  TextInputPropType } from '../types/Form'
import ErrorElement from './ErrorElement'
import { checkValidation, isRequired } from '../utils/validataionData'

const FormInputTextField = ({id , label , type , name , placeholder='', error , setErrors  ,  validation = [] ,setFormData , value } : TextInputPropType) => {
  
   const isRequiredValue = useMemo(()=>{
    return isRequired(validation)
  }, [validation])


const handleChange = (e : React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
  
  if(error === undefined) {
    setFormData((prev) => ({ ...prev , [name] : e.target.value}))
    return    
  }
  

  let err = ""
  
  setFormData((prev) => {
    
    err = checkValidation(validation , e.target.value, {...prev , [name] : e.target.value})

    setErrors((error) => {
      
      const currentError = {...error}
      currentError.name = err
      return currentError 
    }

    )
    return  {...prev , [name] : e.target.value} })

  }

const handleOnBlur = (e : React.FocusEvent<HTMLInputElement, Element>) => {

 
  
  setFormData((prev) =>{ 

    const error = checkValidation(validation , e.target.value , {...prev , [name] : e.target.value})
    
    setErrors((prev) => ({...prev , [name] : error}))   
      
      return { ...prev , [name] : e.target.value}
    }
    )

  }

  return (
    <div>

      <label htmlFor={id}>
      {(isRequiredValue && <span style={{color: "red"}}>*</span> )}
      {label} : 
      </label>
      <input 
        id={id}
        type={type} 
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={(e) => handleOnBlur(e)}
        onChange={handleChange}
     />
    {error && <ErrorElement message={error}/>}
    </div>
  )
}

export default FormInputTextField