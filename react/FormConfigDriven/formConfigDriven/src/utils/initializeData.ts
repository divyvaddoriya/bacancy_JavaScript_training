import type { CategoryWiseInputType } from "../types/Form"

const initFormData = (inputs : CategoryWiseInputType[]) => {
        const data : {[key : string] : string | number | string[] | boolean }=  {}

       function defaultCheck(type : string , defautValue ?: string | number | string[] | boolean) : string| number | string[] | boolean {
                   if(type === "number" ) {
                      return defautValue ||  0
                    }else if(type === "checkbox" ){
                        return defautValue || []
                    }else{
                        return defautValue || ''
                    }
       }
        
        inputs.map((input) => {
            if("category" in input) {
                input.fields.map((field) => {
                   data[field.name] = defaultCheck(field.type , field.defaultValue)
                   return field
                })
            }else{
                data[input.name] = defaultCheck(input.type , input.defaultValue)
            }
            return input
        })

        console.log(data);
        

        return data
}

export {initFormData}