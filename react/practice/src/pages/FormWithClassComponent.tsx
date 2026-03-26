import { Component } from "react";
import ErrorElement from "../components/ErroElement";
import NewInputElement from "../components/NewInputElement";

const fields = [
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
  {
    label: "Skills",
    name: "skill",
    type: "text",
    placeholder: "Enter Skill",
  },
];

class FormWithClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      handleEvent: "onChange",
      formData: {
        name: "",
        age: 0,
        email: "",
        gender: "Male",
        FatherName: "",
        MotherName: "",
        hobby: [],
        skill: [],
        password: "",
        confirmPassword: "",
        creditCardNumber: "",
      },

      errors: {},
    };
  }

  validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) return "Email required";
    if (!regex.test(value)) return "Invalid email";

    return "";
  };

  validateAge = (value) => {
    if (!value) return "Age required";
    if (value <= 0) return "Age must be greater than 0";
    if (value > 120) return "Invalid age";

    return "";
  };

  validateCard = (value) => {
    if (!value) return "Card required";
    if (!/^[0-9]+$/.test(value)) return "Digits only";
    if (value.length !== 12) return "Card must be 12 digits";

    return "";
  };

  validateField = (field, value) => {
    let error = "";

    if (field === "email") error = this.validateEmail(value);
    else if (field === "age") error = this.validateAge(Number(value));
    else if (field === "creditCardNumber") error = this.validateCard(value);
    else if (
      field === "confirmPassword" &&
      value !== this.state.formData.password
    )
      error = "Passwords do not match";
    else if (!value || (Array.isArray(value) && value.length === 0))
      error = `${field} is required`;

    return error;
  };

  handleChange = (e, field) => {
    const value = e.target.value;

    this.setState((prev) => {
      const formData = {
        ...prev.formData,
        [field]: field === "age" ? Number(value) : value,
      };

      let errors = prev.errors;

      if (prev.handleEvent === "onChange") {
        const error = this.validateField(field, value);

        errors = {
          ...prev.errors,
          [field]: error,
        };
      }

      return { formData, errors };
    });
  };

  handleBlur = (e, field) => {
    if (this.state.handleEvent !== "onBlur") return;
    const value = e.target.value;
    const error = this.validateField(field, value);
    this.setState((prev) => ({
      errors: {
        ...prev.errors,
        [field]: error,
      },
    }));
  };

  handleCheckbox = (e) => {
    const { value, checked } = e.target;

    this.setState((prev) => {
      const hobbies = prev.formData.hobby;

      if (checked) {
        return {
          formData: {
            ...prev.formData,
            hobby: [...hobbies, value],
          },
        };
      }

      return {
        formData: {
          ...prev.formData,
          hobby: hobbies.filter((h) => h !== value),
        },
      };
    });
  };

  onAdd = (value) => {
    this.setState((prev) => ({
      formData: {
        ...prev.formData,
        skill: [...prev.formData.skill, value],
      },
    }));
  };

  handleRemoveTag = (tagName) => {
    this.setState((prev) => ({
      formData: {
        ...prev.formData,
        skill: prev.formData.skill.filter((t) => t !== tagName),
      },
    }));
  };

  validateForm = () => {
    const newErrors = {};

    Object.entries(this.state.formData).forEach(([key, value]) => {
      const error = this.validateField(key, value);

      if (error) newErrors[key] = error;
    });

    this.setState({ errors: newErrors });

    return Object.keys(newErrors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.handleEvent === "onSubmit") {
      const valid = this.validateForm();

      if (!valid) return;
    }

    const { FatherName, MotherName, ...rest } = this.state.formData;

    const output =
      this.state.formData.gender === "Male"
        ? { ...rest, FatherName }
        : { ...rest, MotherName };

    console.log(output);
  };

  handleReset = () => {
    this.setState({
      formData: {
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
      },

      errors: {},
    });
  };

  render() {
    const { formData, errors, handleEvent } = this.state;

    return (
      <div>
        <h1>Form with Class Based Component</h1>

        <select
          value={handleEvent}
          onChange={(e) => this.setState({ handleEvent: e.target.value })}
        >
          <option value="onChange">onChange</option>
          <option value="onBlur">onBlur</option>
          <option value="onSubmit">onSubmit</option>
        </select>

        <form onSubmit={this.handleSubmit}>
          {fields.map((field) => (
            <div key={field.name}>
              <NewInputElement
                label={field.label}
                name={field.name}
                id={field.name}
                type={field.type}
                value={this.state.formData[field.name]}
                placeholder={field.placeholder}
                options={field.options}
                onChange={(e) =>
                  field.type === "checkbox"
                    ? this.handleCheckbox(e)
                    : this.handleChange(e, field.name)
                }
                onBlur={(e) => this.handleBlur(e, field.name)}
                handleRemove={this.handleRemoveTag}
                onAdd={this.onAdd}
              />

              <ErrorElement errorMsg={errors[field.name]} />
            </div>
          ))}

          <button type="submit">Submit</button>

          <button type="button" onClick={this.handleReset}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default FormWithClassComponent;
