import { forwardRef, type InputHTMLAttributes } from "react"

type Option = { value: string }

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  options?: Option[]
}

const InputElement = forwardRef<HTMLInputElement, Props>(({
  name, type, onChange,  placeholder, label, id, options = []
}, ref) => {

  return (
    <div>
      <br />
      <label htmlFor={id}>{label} :</label>

      {type !== "radio" && type !== "checkbox" && (
        <input
          ref={ref}     
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        
        />
      )}

      {(type === "radio" || type === "checkbox") && (
        <div id={id}>
          {options.map((option) => (
            <div key={option.value}>
              <label htmlFor={option.value}>{option.value}</label>
              <input
                ref={ref}  
                type={type}
                id={option.value}
                name={name}
                value={option.value}
                onChange={onChange}

              />
            </div>
          ))}
        </div>
      )}

      <br />
    </div>
  )
})

export default InputElement