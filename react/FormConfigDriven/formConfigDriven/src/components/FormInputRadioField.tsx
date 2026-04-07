import React, { useMemo } from 'react'
import type {  RadioInputPropType} from '../types/Form'
import { checkValidation, isRequired } from '../utils/validataionData'
import ErrorElement from './ErrorElement'

const FormInputRadioField = ({type , name , options , label , id ,formData ,  setFormData, error , setErrors , validation = [], value} :  RadioInputPropType) => {

   const isRequiredValue = useMemo(()=>{
    return isRequired(validation)
  }, [validation])


  const handleChange = (e : React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {

    const error = checkValidation(validation , e.target.value , formData)
    setErrors((prev) => ({...prev , [name] : error}))
    setFormData((prev) => ({...prev , [name] : e.target.value}))
  }

  return (
    <div>
      <label htmlFor={id}>
      {(isRequiredValue && <span style={{color: "red"}}>*</span> )}
       {label} : </label>

      <div id={id}>
      {options.map((option) => (
        <div key={option.name} >
        {option.name} :
      <input onChange={(e)=>handleChange(e)} value={option.value} type={type} checked={value === option.value}  name={name}  />
      </div>
      ))}
      </div>
      {error && <ErrorElement message={error}/>}
    </div>
  )
}

export default FormInputRadioField