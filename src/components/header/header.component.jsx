import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { SelectHidden } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'


 const Header = ({currentUser, hidden}) => {
 return (
     <div className="header">
        <Link to='/'>
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contacts">CONTACTS</Link>
            
            {currentUser ? 
            <div className="option" onClick={() => auth.signOut()}>Sign out</div> 
            : <Link className="option" to="/signin">Sign in</Link> 
            }
            {currentUser ? <div>{currentUser.displayName} </div> : null}
            <CartItem />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
     </div>
     )
    }
 const mapStateToProps = ( state ) => ({
     currentUser: selectCurrentUser(state),
     hidden: SelectHidden(state)
 })
 export default connect(mapStateToProps)(Header);