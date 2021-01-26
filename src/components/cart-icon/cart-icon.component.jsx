import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cart-item.styles.scss'

const CartItem = ({toggleCartHidden, cartQuantity}) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden}/>
        <span className="item-count">{cartQuantity}</span> 
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartQuantity: cartItems.reduce((accumulator, cartItem) => accumulator +  cartItem.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);