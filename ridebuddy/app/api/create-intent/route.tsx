import {NextResponse} from "next/server"
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51N5qBmSGzCFMjSOkFkGbGHHoN9o8jPM9y9Fsy1lIIqdaUWErMGczIVzOwDJf0OyGJLVhJO7NxbGs0tEkxPKOgq7P00tRVtXhFf'!,{
    typescript:true,
    apiVersion:"2023-08-16"
})

export async function Post(request:any){
    const data:any=await request.json();
    const amount = data.amount;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount:Number(amount),
            currency:'USD'
        })
        return NextResponse.json(paymentIntent.client_secret,{status:200})
    }
    catch(error:any){
        return NextResponse.json(error,
            {
                status:400
            });
    }
}