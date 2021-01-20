import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'


 const Header = props => (
     <div className="header">
        <Link to='/'>
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contacts">CONTACTS</Link>
            
            {props.currentUser ? 
            <div className="option" onClick={() => auth.signOut()}>Sign out</div> 
            : <Link className="option" to="/signin">Sign in</Link> 
            }
            {props.currentUser ? <div>{props.currentUser.displayName} </div> : null}
        </div>
     </div>
     )
  
 const mapStateToProps = state => ({
     currentUser: state.user.currentUser
 })
 export default connect(mapStateToProps)(Header);