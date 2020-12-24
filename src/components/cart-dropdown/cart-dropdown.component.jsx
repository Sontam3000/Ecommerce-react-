import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors.js';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden} from '../../redux/cart/cart.actions.js';

const CartDropdown=({currentUser ,cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
         
            { currentUser?
            <span className='signinstat'>Signned In As:
                {currentUser.displayName.toUpperCase()}
                </span>
                : <span className='signinstat'>Not signed in</span>
            }
       
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem=> (<CartItem key={cartItem.id} item={cartItem}  />)
            )):
            (<span className='empty-message'> Cart Is Empty </span>)

            }
            
        </div>
        <CustomButton onClick={()=>
            { 
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }
           }>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    cartItems:selectCartItems
});
  
export default withRouter(connect(mapStateToProps)(CartDropdown));
