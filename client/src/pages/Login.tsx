import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import myPath from '../utils/path'

import LoginPass from '../components/auth/LoginPass'
import LoginSms from '../components/auth/LoginSms'

const Login = () => {
  const [sms, setSms] = useState(false)


  return (
    <div className="auth_page">
      <div className="auth_box">
        <h3 className="text-uppercase text-center mb-4">Login</h3>

        {!sms? <LoginPass /> : <LoginSms/>}

        <small className="row my-2 text-primary" style={{cursor: 'pointer'}}>
          <span className="col-6">
            <Link to={myPath.FORGOT_PASSWORD}>
              Forgot password?
            </Link>
          </span>

          <span className="col-6 text-end" onClick={() => setSms(!sms)}>
            { sms ? 'Sign in with password' : 'Sign in with SMS' }
          </span>
        </small>

        <p>
          You don't have an account?
          <Link to={myPath.REGISTER} style={{color: 'crimson'}}>
            {` Register Now`}
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login