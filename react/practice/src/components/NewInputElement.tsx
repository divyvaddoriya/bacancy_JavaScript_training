import {  useState, type InputHTMLAttributes } from "react"
import TagElement from "./TagElement"

type Option = {
  value: string
}

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  onAdd? :(value: string ) => void
  options?: Option[]
  handleRemove: (tagName: string) => void
}

const NewInputElement = ({
  name,
  type,
  onBlur,
  onChange,
  onAdd,
  placeholder,
  value,
  label,
  id,
  handleRemove,
  options = []
}: Props) => {

  const [tag , setTag ] = useState<string>("")

  return (
    <div>
      <br />

      <label htmlFor={id}>{label} :</label>

      {type !== "radio" && type !== "checkbox" && name!="skill" &&(
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}

    {type == "text" && name=="skill" && (
      <div id={id}>
 
        <input type={type} name={name} value={tag} onChange={(e) => setTag(e.target.value)} placeholder={placeholder} />
        <button onClick={() => onAdd!(tag)}>Add</button>

        {Array.isArray(value) && value?.map((tagName , i) => (
          <TagElement key={tagName.trim()} tagName={tagName} handleRemove={handleRemove}/>
))}
      </div>
    ) }


      {(type === "radio" || type === "checkbox") && (
        <div id={id}>
          {options.map((option) => {

            const isChecked =
              type === "checkbox"
                ? Array.isArray(value) && value.includes(option.value)
                : value === option.value

            return (
              <div key={option.value}>

                <label htmlFor={option.value}>
                  {option.value}
                </label>

                <input
                  type={type}
                  id={option.value}
                  name={name}
                  value={option.value}
                  checked={isChecked}
                  onChange={onChange}
                  onBlur={onBlur}
/>

              </div>
            )
          })}
        </div>
      )}

      <br />
    </div>
  )
}

export default NewInputElement