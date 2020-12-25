import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe = price*100;
    const publishablekey='pk_test_51I28zzDDhElTU169DW7Ki5gsVW129jr2yOIEXTN3CSFFHAAsRrd3l3mx5vkVyXJEyj317Z1Cmp5Q4uLZzPqmQiF700CHRegDh7';
    const onToken = (token) =>{
        console.log(token);
        alert('Payment Successfull');
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            ammount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};
export default StripeCheckoutButton;