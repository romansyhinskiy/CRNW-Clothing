import React from "react"
import "./sign-in.styles.scss"
import { signInWithGoogle } from '../../firebase/firebase.utils'

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'romansyhinskiy@gmail.com',
            password: 'sdfgsdfg'
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email" 
                        required/>
                    <FormInput 
                        name="password"
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        label="password"
                        required/>
                    <div className="buttons-group">
                    <CustomButton type="submit" value="Submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}