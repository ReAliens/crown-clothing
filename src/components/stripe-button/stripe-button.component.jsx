import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForStripe= price*100;
    const publishableKey='pk_test_eQ6UQ1McHRTiYYSC4BBU6MDD00hND2Quuh';
    const onToken=token=>{
        console.log(token);
        alert('payment successful')
    }
    return(
        <StripeCheckout
        label='pay here'
        name='CROWN CLOTHING LTD.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`your total is ${price}$`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;