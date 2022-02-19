import React from 'react';
import './login.scss'

const Login = (props) => {


  return (
    <div id="login">
      <div className="section">
        <div className='main-content'>
          <div className="img-background"></div>

          <div className="logo">
            <img id="login-logo-one" src="/images/cta-logo-one.svg" alt="" />
            <div className="text">
              <h2 className="title">GET ALL THERE</h2>
              <p className="description">
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 01/04/2022, the price of Disney+ and The Disney Bundle will increase by $2.
              </p>
            </div>
            <img id="login-logo-two" src="/images/cta-logo-two.png" alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login;
