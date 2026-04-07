import React, { useMemo } from 'react'
import type {  CheckBoxInputPropType } from '../types/Form'
import { checkValidation, isRequired } from '../utils/validataionData'
import ErrorElement from './ErrorElement'
const FormInputCheckboxField = ({type , name , options , label ,formData, id , setFormData ,error , setErrors , validation = [] ,  value : DefaultValue } :  CheckBoxInputPropType)=> {

  const isRequiredValue = useMemo(()=>{
    return isRequired(validation)
  }, [validation])

  const handleChange = (e : React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    
    if(error == undefined) return; 

    const {value , checked } = e.target 
    let data ;
    if(checked) {
    data =  [...DefaultValue ,value ]
    }else{
      data = DefaultValue.filter((val) => val != value )
    }
    console.log(data);

    const err = checkValidation(validation , data ,formData)
    setErrors((prev) => ({...prev , [name] : err}))
    setFormData((prev) => ({...prev , [name] : data }))
  }

  const handleOnBlur = (e : React.FocusEvent<HTMLInputElement , HTMLInputElement>) => {
  
    if(error == undefined){
      const error = checkValidation(validation , e.target.value , formData)
      setErrors((prev) => ({...prev , [name] : error})) 
    }
  
  }


  return (
    <div>
      <label htmlFor={id}>
      {(isRequiredValue && <span style={{color: "red"}}>*</span> )}
         {label} :  </label>

      <div id={id}>
      {options.map((option) => (
        <div key={option.name} >
        {option.name} :
      <input onChange={handleChange} onBlur={handleOnBlur} value={option.value} type={type} checked={DefaultValue.includes(option.value)}  name={name}  />
      </div>
      ))}
      </div>

      {error && <ErrorElement message={error}/>}

    </div>
  )
}

export default FormInputCheckboxField