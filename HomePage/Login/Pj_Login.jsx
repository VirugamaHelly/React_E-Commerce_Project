import React, { useContext, useState } from 'react';
import './Login.css'
import { lcontext } from './LContext';



export default function ValidatinForm() {

    const [state, setState] = useState({

        email: "",
        password: "",
        confirmPassword: "",
    });

    function change(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }
    const { Flogged } = useContext(lcontext)
    function onSignin(e) {
        e.preventDefault();

        if (state.email === "helly@gmail.com" && state.password === "helly123") {
            Flogged({
                user: "helly",
                islogged: false
            })

        } else {
            alert("error")
        }

        if (state.password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (state.password !== state.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        alert("Sign in successful");
        setState({
            email: "",
            password: "",
            confirmPassword: "",
            isChecked: false
        });
    }

    return (
        <>
            <div>


                <form onSubmit={onSignin} id='Login'>
                    <p>Login in with:</p>
                    <div style={{ marginRight: "-55px" }}>
                        <i className="fab fa-facebook-f me-5"></i>
                        <i className="fab fa-google me-5"></i>
                        <i className="fab fa-twitter me-5"></i>
                        <i className="fab fa-github me-5"></i>
                    </div><br />
                    <p>or:</p>
                    <input type="email" placeholder='Email or Username ' name="email" onChange={change} value={state.email} required /><br /><br />
                    <input type="password" placeholder='password' name='password' onChange={change} value={state.password} required /><br /><br />
                    <input type="password" placeholder='confirmPassword' name='confirmPassword' onChange={change} value={state.confirmPassword} required /><br /><br />
                    <button type="submit" className='btn_sign'>SIGN IN</button>
                </form>
            </div>
        </>
    )
}