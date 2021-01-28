import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss'
import { withRouter } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = ({cartItems}) => {

    let history = useHistory();

    function handleClick() {
      history.push("/home");
    }

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
    
                {
                    cartItems.length ?
                    (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                    : (<span className="empty-message">Your cart is empty</span>)
                }
    
               
            </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
    )
    
   
}
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(CartDropdown));