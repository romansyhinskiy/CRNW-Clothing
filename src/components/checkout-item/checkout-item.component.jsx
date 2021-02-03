import React from "react";
import { connect } from 'react-redux'
import {removeItem, addItem, decreaseItem} from '../../redux/cart/cart.actions'

import "./checkout-item.styles.scss"

const CheckoutItem = ({cartItem, removeItem, addItem, decreaseItem}) => {
    const {imageUrl, name, quantity, price} = cartItem
    return (
        <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity d-flex'>
            <div onClick={() => decreaseItem(cartItem)} className="arrow">&#10094;</div>
            <span className="value">{quantity}</span>
            <div onClick={()=> addItem(cartItem)} className="arrow">&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div onClick={() => removeItem(cartItem)} className='remove-button'>&#10005;</div>
    </div>
    )
}
   

const mapDispatchToProps = dispatch => ({
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    decreaseItem: cartItem => dispatch(decreaseItem(cartItem))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);