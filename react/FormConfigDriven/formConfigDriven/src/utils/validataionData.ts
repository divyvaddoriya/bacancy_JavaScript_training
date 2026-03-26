import type {  ValidationType } from "../types/Form"

function validateNumber( validation : ValidationType   , value : string[] | string | number | boolean) : string {
    if(typeof value === "number")
    return validation.type == "min" ? (Number(validation.value) <= value ? "" : validation.message  ) : validation.type == "max" ? (Number(validation.value) >= value ? "" : validation.message) : ""
    return ""
}
function validateLength( validation : ValidationType , value : string[] | string | number | boolean) : string {
    if (typeof value === "string" || Array.isArray(value)) {
  
    const length = value.length

    return validation.type === "lt"
      ? validation.value <= length
        ? ""
        : validation.message
      : validation.type === "gt"
      ? validation.value >= length
        ? ""
        : validation.message
      : ""
  }
    return ""
}

function validateRequire(validation :ValidationType  , value: string[] | string | number | boolean ){
    if(typeof value === "object"){
        if(Array.isArray(value) && value.length == 0 ) return validation.message
        if(Object.keys(value).length == 0) 
        return validation.message
    }
    return value ? "" : validation.message
}

function validateMatch(validation : ValidationType , value : string[] | string | number | boolean ,  formData : Record<string , any > | undefined ) {
    if(validation.type == 'match') {
    
        console.log("form data from match function " , formData );
        if(!formData || !(validation.fieldName  in formData) ){
            
            console.log(validation.fieldName + " this fieldname not found");
            return "";
        }
        return value == formData[validation.fieldName] ? "" : validation.message
            
    }

    return ""
}

function validateRegex(validation : ValidationType , value : string[] | string | number | boolean ) {    
    if(validation.type == "regex" && typeof value === "string" ) {
        return validation.regex.test(value) ? "" : validation.message
    }
    return ""
}

const validationRegistry  : ValidationRegistryType = {
    min : validateNumber,
    max : validateNumber,
    lt: validateLength,
    gt: validateLength,
    required: validateRequire,
    match : validateMatch,
    regex : validateRegex
}

type ValidationRegistryType = Record<ValidationType["type"] , (validation : ValidationType , value: string | number | string[] | boolean ,  formData ?: Record<string , any > ) => string >

const isRequired = (validation : ValidationType[]) : boolean => {
    for(const check of validation) {
        if(check.type == "required") return true;
    }
    return false
}

function checkValidation(validation : ValidationType [] , value : string | number | string[] | boolean , formData : Record<string , any>) : string {
    
    for(const check of validation ) {

        const validateFunction = validationRegistry[check.type] 
    
        if(!validateFunction){ console.error(`Missing validator for type: ${check.type}`)
  continue}
        
        console.log("validation function type " , check.type);
        const x =  validateFunction(check , value , formData ) 
    
        if(x !== "") return x;
    
    }
    return ""
}   

export { validationRegistry , isRequired, checkValidation }