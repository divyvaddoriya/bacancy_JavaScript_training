import { useState } from "react";
// import InputElement from "../components/InputElement"
import ErrorElement from "../components/ErroElement";
import NewInputElement from "../components/NewInputElement";

// functional input form with the on change , on blur and on submit element

type FormDataType = {
  name: string;
  age: number;
  email: string;
  gender: string;
  hobby: string[];
  FatherName?: string;
  MotherName?: string;
  password: string;
  skill: string[];
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
  defaultValue?: string;
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
    defaultValue: "Male",
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
  {
    label: "Skills",
    name: "skill",
    type: "text",
    placeholder: "Enter Skill",
  },
];

const Form5 = () => {
  const [handleEvent, setHandleEvent] = useState<
    "onSubmit" | "onBlur" | "onChange"
  >("onChange");

  const [formData, setFormData] = useState<FormDataType>({
    age: 0,
    email: "",
    name: "",
    gender: "Male",
    FatherName: "",
    MotherName: "",
    hobby: [],
    skill: [],
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

  const validateField = (field: keyof FormDataType, value: any) => {
    let error = "";

    if (field === "email") error = validateEmail(value);
    else if (field === "age") error = validateAge(Number(value));
    else if (field === "creditCardNumber") error = validateCard(value);
    else if (field === "confirmPassword" && value !== formData.password)
      error = "Passwords do not match";
    else if (!value || (Array.isArray(value) && value.length === 0))
      error = `${field} is required`;

    return error;
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

    if (handleEvent === "onChange") {
      const error = validateField(field, value);

      setErrors((prev) => ({
        ...prev,
        [field]: error,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    field: keyof FormDataType,
  ) => {
    if (handleEvent !== "onBlur") return;

    const value = e.target.value;

    const error = validateField(field, value);

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

  const validateForm = () => {
    const newErrors: ErrorType = {};

    Object.entries(formData).forEach(([key, value]) => {
      const field = key as keyof FormDataType;

      const error = validateField(field, value);

      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (handleEvent === "onSubmit") {
      const isValid = validateForm();

      if (!isValid) return;
    }

    const { FatherName, MotherName, ...updatedformData } = formData;

    console.log(
      formData.gender == "Male"
        ? { ...updatedformData, FatherName }
        : { ...updatedformData, MotherName },
    );
  };
  const handleReset = () => {
    setFormData({
      name: "",
      age: 0,
      email: "",
      FatherName: "",
      MotherName: "",
      gender: "Male",
      hobby: [],
      skill: [],
      password: "",
      confirmPassword: "",
      creditCardNumber: "",
    });

    setErrors({});
  };

  const handleRemoveTag = (tagName: string) => {
    const values = formData.skill.filter((t) => t != tagName);

    setFormData((prev) => ({ ...prev, skill: values }));
  };

  const onAdd = (value: string) => {
    setFormData((prev) => ({ ...prev, skill: [...prev.skill, value] }));
  };

  return (
    <div>
      <h1>Config Driven Form</h1>

      <select
        value={handleEvent}
        onChange={(e) => setHandleEvent(e.target.value as any)}
      >
        <option value="onChange">onChange</option>
        <option value="onBlur">onBlur</option>
        <option value="onSubmit">onSubmit</option>
      </select>

      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>

            {field.name != "FatherName" && field.name != "MotherName" && (
            
            <NewInputElement
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
          
                onBlur={(e) => handleBlur(e, field.name)}
                handleRemove={handleRemoveTag}
                onAdd={onAdd}
            
              />
            )}

            {field.name == "gender" &&
              (formData.gender === "Male" ? (
                <div>
                  <NewInputElement
                    label={"FatherName"}
                    name={"FatherName"}
                    id={"FatherName"}
                    type={"text"}
                    value={formData.FatherName}
                    placeholder={"enter the father name"}
                    onChange={(e) => handleChange(e, "FatherName")}
                    onBlur={(e) => handleBlur(e, "FatherName")}
                    handleRemove={handleRemoveTag}
                    onAdd={onAdd}
                  />
                  <ErrorElement errorMsg={errors["FatherName"]} />
                </div>
              ) : (
                <div>
                  <NewInputElement
                    label={"MotherName"}
                    name={"MotherName"}
                    id={"MotherName"}
                    type={"text"}
                    value={formData.MotherName}
                    placeholder={"enter the mother name"}
                    onChange={(e) => handleChange(e, "MotherName")}
                    onBlur={(e) => handleBlur(e, "MotherName")}
                    handleRemove={handleRemoveTag}
                    onAdd={onAdd}
                  />
                  <ErrorElement errorMsg={errors["MotherName"]} />
                </div>
              ))}

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

export default Form5;
