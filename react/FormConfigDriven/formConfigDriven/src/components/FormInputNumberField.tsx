import React, { useMemo } from 'react'
import type { NumberInputPropType } from '../types/Form'
import { checkValidation, isRequired } from '../utils/validataionData'
import ErrorElement from './ErrorElement'

const FormInputNumberField = ({id , name ,label,type ,   placeholder ,value,formData , setFormData , setErrors , error , validation =[]} : NumberInputPropType) => {

const isRequiredValue = useMemo(()=>{
    return isRequired(validation)
  }, [validation])

  const handleChange = (e : React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {

    const error = checkValidation(validation , Number(e.target.value) , formData)
    setErrors((prev) => ({...prev , [name] : error}))
    setFormData((prev) => ({...prev , [name] : Number(e.target.value )}))
  }

  return (
    <div>
    <label htmlFor={id}>
      {(isRequiredValue && <span style={{color: "red"}}>*</span> )}
       {label} : </label>
        <input type={type} value={value} onChange={handleChange} name={name} placeholder={placeholder}/>
      {error && <ErrorElement message={error}/>}
    </div>
  )
}

export default FormInputNumberField