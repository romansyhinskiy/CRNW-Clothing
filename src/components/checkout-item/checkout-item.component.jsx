import React from "react";
import { connect } from 'react-redux'
import {removeItem} from '../../redux/cart/cart.actions'

import "./checkout-item.styles.scss"

const CheckoutItem = ({cartItem, removeItem}) => {
    const {imageUrl, name, quantity, price} = cartItem
    return (
        <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div onClick={() => removeItem(cartItem)} className='remove-button'>&#10005;</div>
    </div>
    )
}
   

const mapDispatchToProps = dispatch => ({
    removeItem: cartItem => dispatch(removeItem(cartItem))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);