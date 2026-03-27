
// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
// Why enums are better than magic strings?

enum PaymentStatus {
Initiated = 'INITIATED',
Success = 'SUCCESS',
Failed = 'FAILED'
}

function paymentStatus(status: PaymentStatus) {
    console.log('Status:', status);
}

paymentStatus(PaymentStatus.Initiated);

// paymentStatus(PaymentStatus.Co)

// it shows that is does not exist on the paymentstatus typeof
