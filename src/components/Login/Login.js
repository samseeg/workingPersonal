import React, { Component } from 'react';
import './Login.css';

// import {Link} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className='login_wrapper'>
                <div className='login_title'>
                    baarzz
                    </div>
		<p>Demo Login: bear@fake.net</p>
		<p>Password: bearbear</p>
                    <div className='outer_btn'>
                <div className='login_btn_div'>
                    <a href={process.env.REACT_APP_LOGIN}className='login_btn' id="hiw-login-container"><div>Login/Register</div></a>
                </div>
                </div>
            </div>
        )
    }
}

export default Login;
