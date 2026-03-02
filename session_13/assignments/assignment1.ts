// Assignment

// Create a PaymentState discriminated union.
// Add exhaustive checking to handle all states.


type PaymentState = {status : "COMPLETED" , data: string } | {status: "PENDING"} | {status: "CANCELLED" , error: string}


function CheckPayment(paymentData: PaymentState){
    switch (paymentData.status) {
        case "CANCELLED" :
            return "payment is cancelled" + paymentData.error 
        case 'COMPLETED':
            return "payment is successful" + paymentData.data
        case "PENDING" :
            return "payment is still pending"
        default :
            const _flag :never= paymentData
            return "this state of the payment should never occur"
    }
}

// Create a generic ApiResponse<T> for products.
// Write a type guard to check if response is success.

type Product  ={
    name : string ,
    description: string
    price: number
    quantity: number
}

type ApiResponseFromApi <T> = {
    status: "SUCCESS",
    data: T[],
    statuseCode: number
} | 
{status: "FAILED" , error: string , errorCode: number} |
{status: "PENDING"}

function isSuccess<T>(response: ApiResponseFromApi<T>) : response is { status: "SUCCESS";
    data: T[];
    statuseCode: number } {
 return response.status === "SUCCESS" ? true : false
}

const product : Product= {
    name: "laptop",
    description: "this is hp laptop",
    price: 5000,
    quantity: 5
}

const response :ApiResponseFromApi<Product> = {
        status: "SUCCESS",
        data: [product],
        statuseCode: 200
}


// this is success function will check weather this reponse contain is the success response or not it will check that
const checkProuct = isSuccess<Product>(response)

console.log(checkProuct)