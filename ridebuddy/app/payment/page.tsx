"use client"
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/Payment/CheckOutForm';

const Payment = () => {
    //
    
    const stripePromise=loadStripe('pk_test_51N5qBmSGzCFMjSOkTsP3uZ57vzN8DtH6Dfpuoo9Am54qpVwA9VHjQ26hN9XNDLaiMejptcWtLnpGcpxfn4AIYOuS00bWUixnHb' as any)
    const options:any = {
        mode: 'payment',
        amount: 50,
        currency: 'usd',
    };
  return (
    
    <Elements stripe={stripePromise} options={options}>
         <CheckoutForm/>
    </Elements>
    
  )
}

export default Payment


// const Payment = () => {
//   return (
//     <div>Payment</div>
//   )
// }

// export default Payment
