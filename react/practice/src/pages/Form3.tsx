import { useState } from "react";
import InputElement from "../components/InputElement";
import ErrorElement from "../components/ErroElement";

type FormDataType = {
  name: string;
  age: number;
  email: string;
  gender: string;
  hobby: string[];
  password: string;
  confirmPassword: string;
  creditCardNumber: string;
};

type ErrorType = {
  [key: string]: string;
};

type FieldConfig = {
  label: string;
  name: keyof FormDataType;
  type: string;
  placeholder?: string;
  options?: { value: string }[];
};


const fields: FieldConfig[] = [
  { label: "Name", name: "name", type: "text", placeholder: "Enter name" },
  { label: "Age", name: "age", type: "number", placeholder: "Enter age" },
  { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
  {
    label: "Gender",
    name: "gender",
    type: "radio",
    options: [{ value: "Male" }, { value: "Female" }],
  },
  {
    label: "Hobby",
    name: "hobby",
    type: "checkbox",
    options: [{ value: "Dancing" }, { value: "Walking" }, { value: "Reading" }],
  },
  { label: "Password", name: "password", type: "password" },
  { label: "Confirm Password", name: "confirmPassword", type: "password" },
  {
    label: "Credit Card",
    name: "creditCardNumber",
    type: "text",
    placeholder: "Enter credit card",
  },
];

const Form3 = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    age: 0,
    email: "",
    gender: "Male",
    hobby: [],
    password: "",
    confirmPassword: "",
    creditCardNumber: "",
  });

  const [errors, setErrors] = useState<ErrorType>({});

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email required";
    if (!regex.test(value)) return "Invalid email";
    return "";
  };

  const validateAge = (value: number) => {
    if (!value) return "Age required";
    if (value <= 0) return "Age must be greater than 0";
    if (value > 120) return "Invalid age";
    return "";
  };

  const validateCard = (value: string) => {
    if (!value) return "Card required";
    if (!/^[0-9]+$/.test(value)) return "Digits only";
    if (value.length !== 12) return "Card must be 12 digits";
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormDataType,
  ) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: field === "age" ? Number(value) : value,
    }));

    let error = "";

    if (field === "email") error = validateEmail(value);
    else if (field === "age") error = validateAge(Number(value));
    else if (field === "creditCardNumber") error = validateCard(value);
    else if (field === "confirmPassword" && value !== formData.password)
      error = "Passwords do not match";
    else if (value == "") {
      error = field + " is required ";
    }
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      const hobbies = prev.hobby;

      if (checked) {
        return { ...prev, hobby: [...hobbies, value] };
      }

      return {
        ...prev,
        hobby: hobbies.filter((h) => h !== value),
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      age: 0,
      email: "",
      gender: "Male",
      hobby: [],
      password: "",
      confirmPassword: "",
      creditCardNumber: "",
    });

    setErrors({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <InputElement
              label={field.label}
              name={field.name}
              id={field.name}
              type={field.type}
              value={formData[field.name]}
              placeholder={field.placeholder}
              options={field.options}
              onChange={(e) =>
                field.type === "checkbox"
                  ? handleCheckbox(e)
                  : handleChange(e, field.name)
              }
            />

            <ErrorElement errorMsg={errors[field.name]} />
          </div>
        ))}

        <button type="submit">Submit</button>

        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Form3;
