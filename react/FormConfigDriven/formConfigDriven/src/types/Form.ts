type FormInputField = {
    id: string 
    label: string
    placeholder ?: string , 
    type: FormFieldType
    required: boolean
    name: string
    defaultValue ?: string | number | string[] | boolean
    validation  ?: ValidationType[]
    dependsOn ?: string
}

type ValidationType = 
({    type: "required" } |
{type :"match" , fieldName: string } |
{   type : "min" | "max" | "lt" | "gt" , value : number}  |
{ type : "regex"  , regex: RegExp   } ) & {message: string}

type FormFieldType =  "text" | "email" | "password" |"number" | "checkbox" | "select" | "radio"

type FormNumberField = FormInputField & {
    type : "number"
}

type FormCheckBoxField ={
    type: "checkbox"
    options : {name: string , value: string } []
} & FormInputField  

type FormRadioBoxField = {
    type: "radio"
    options: {name: string , value: string , checked: boolean} []
} & FormInputField

type FormSelectField = FormInputField & {
    type: "select"
    options: {name: string , value : string} []
}

type InputFieldType = FormInputField | FormNumberField | FormSelectField | FormCheckBoxField |FormRadioBoxField

type CategoryWiseInputType = {
    category : string , 
    fields: InputFieldType[]
} | InputFieldType


type SetFormDataType = React.Dispatch<React.SetStateAction<{
    [key: string]: string | number | string[] | boolean;
}>>

type setErrorType =  React.Dispatch<React.SetStateAction<Record<string, string>>>

// PROPS TYPES 

type ExtraPropType = {
    formData: {[key : string] : string | number | string[] | boolean } ,
    setFormData : SetFormDataType ,
    error: string , 
    setErrors: setErrorType 
}

type CheckBoxInputPropType = FormCheckBoxField & {value: string[]} & ExtraPropType
type TextInputPropType = FormInputField & { value : string } &  ExtraPropType
type RadioInputPropType = FormRadioBoxField & {value: string } & ExtraPropType
type SelectInputPropType = FormSelectField & { value : string } & ExtraPropType
type NumberInputPropType = FormNumberField & { value : number } & ExtraPropType

type PropType = CheckBoxInputPropType | TextInputPropType | RadioInputPropType | SelectInputPropType | NumberInputPropType

type RegistryType = {
    text: React.ComponentType<TextInputPropType >
  email: React.ComponentType<TextInputPropType>
  password: React.ComponentType<TextInputPropType >
  number: React.ComponentType<NumberInputPropType >
  select: React.ComponentType<SelectInputPropType >
  radio: React.ComponentType<RadioInputPropType>
  checkbox: React.ComponentType<CheckBoxInputPropType>
}

export type {InputFieldType  ,ValidationType ,  FormNumberField , FormCheckBoxField , FormSelectField , FormInputField ,FormRadioBoxField ,  CategoryWiseInputType , SetFormDataType , CheckBoxInputPropType , TextInputPropType , RadioInputPropType , SelectInputPropType , NumberInputPropType , PropType , RegistryType , setErrorType }



