import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown=({currentUser ,cartItems})=>(
    <div className='cart-dropdown'>
         <h5>Signned In As:{currentUser.displayName}</h5>
        <div className='cart-items'>
            {
                cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem}  />)
            }
        </div>
        <CustomButton >GO TO CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps = ({user:{currentUser}, cart: {cartItems}}) =>({
    currentUser,
    cartItems
});
  
export default connect(mapStateToProps)(CartDropdown);
