import type { FormInputType } from '../Form'

const TextField = ({
    label = '',
    placeholder="",
    id="",
    value= "",
    error="",
    index, 
    disabled=false,
    readonly= false,
    onChange
} : FormInputType & {
    index : number ,
  onChange: (props: {
    id?: string
    value?: any
    checked?: boolean
    index?: number
  }) => void
}) => {

     function handleChange (event) {
        onChange({id , value: event.target.value ,   index})
    }

  return (
    <div>
        <label htmlFor={id}>
            {label} :
        </label>
        <input type='text' placeholder={placeholder} value={value} disabled={disabled} readOnly={readonly} onChange={handleChange} />

        {error != "" && 
        <div style={{color: "red"}}>
            {error}
        </div>
        }

    </div>
  )
}

export default TextField