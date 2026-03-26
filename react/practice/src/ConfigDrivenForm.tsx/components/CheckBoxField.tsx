import React from 'react'
import type { FormInputType } from '../Form'

const CheckBoxField = ({
    label ,
    id,
    name,
    index , 
    value,
    checked,
    disabled,
    readonly,
    onChange
} : FormInputType & {
    index : number ,
  onChange: (props: {
    id?: string
    value?: any
    checked: boolean
    index?: number
  }) => void
}) => {

    function handleChange (e : React.ChangeEvent<HTMLInputElement>) {
        onChange({id , value , checked:e.target.checked , index})
    }

  return (
    <div>
       
        <input type="checkbox" id={id} name={name} value={value} checked={checked} disabled={disabled} readOnly={readonly} onChange={handleChange}  />
        <label htmlFor={id}> 
            {label} :
        </label>
    </div>
  )
}

export default CheckBoxField