import React, { useMemo } from 'react'
import type { SelectInputPropType } from '../types/Form'
import { checkValidation, isRequired } from '../utils/validataionData'
import ErrorElement from './ErrorElement'

const FormInputSelectField = ({id , name , options , value , label, error , setErrors , formData, validation=[]  , setFormData} : SelectInputPropType) => {
  
 const isRequiredValue = useMemo(()=>{
    return isRequired(validation)
  }, [validation])

    const handleChange = (e : React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        const error = checkValidation(validation ,e.target.value , formData) 
        setErrors((prev) => ({...prev , [name] : error}))
        setFormData((prev) => ({...prev , [name] : e.target.value}))
    }

    return (
    <div>

    <label htmlFor={id}>

      {(isRequiredValue && <span style={{color: "red"}}>*</span> )}
      {label} :
    
    </label>

        <select name={name} id={id} onChange={(e) => handleChange(e)}  defaultValue={value}> 
            {options.map((option) => (
                    <option key={option.name}  value={option.value} id={option.name}>
                        {option.value}
                    </option >
            ))}
        </select>

          {error && <ErrorElement message={error}/>}

    </div>
  )
}

export default FormInputSelectField