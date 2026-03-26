import type { FormInputType } from '../Form'
import CheckBoxField from './CheckBoxField'
import TextField from './TextField'

const FormWrapper = ({inputs , onInputChange}: {inputs : FormInputType[] , onInputChange : ( {id , index , value , checked} :{id?: string , index?: number , value? : any , checked? : boolean})=> void}) => {
  return (
    <div>
        {inputs.map((input : FormInputType , index : number) => {
          if (input.type === 'checkbox' ){
            return <CheckBoxField onChange={onInputChange} index={index} key={input.id} {...input}/>
          }

          return <TextField onChange={onInputChange} index={index} key={input.id} {...input}/>
        })}
    </div>
  )
}

export default FormWrapper