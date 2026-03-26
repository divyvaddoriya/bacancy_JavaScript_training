import { type InputHTMLAttributes } from "react"

type Option = {
  value: string
}

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  options?: Option[]
}

const InputElement = ({
  name,
  type,
  onChange,
  placeholder,
  value,
  label,
  id,
  options = []
}: Props) => {

  return (
    <div>
      <br />

      <label htmlFor={id}>{label} :</label>

      {type !== "radio" && type !== "checkbox" && (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}


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

export default InputElement