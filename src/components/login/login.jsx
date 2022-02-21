import React from 'react';
import './login.scss'

const Login = () => {


  return (
    <div id="login">
      <div className="section">
        <div className='main-content'>
          <div className="img-background"></div>

          <div className="content">
            <img className="logo" src="/images/logo.svg" alt="" />
            <h1>All your favourites and more. </h1>
            <div className="price">
              <div className="month">
                <span className='main-text'>HK$73</span>
                <span className="sub-text">| Month</span>
              </div>
              <div className="year">
                <div>
                  <span className='main-text'>HK$738</span>
                  <span className="sub-text">| Year</span>
                </div>
                <p className="sub-text">Save over 15% <sup>*</sup></p>
              </div>
            </div>
            <div className="subscription">
              <p className="button">SIGN UP NOW</p>
              <p className="button">SAVE ON 12 MONTHS</p>
            </div>



            <div className="price-sm">
              <div className="sign-up">
                <div className="text">
                  <span className='main-text'>HK$73</span>
                  <span className="sub-text">| Month</span>
                </div>
                <div className="subscription-sm">
                  <p className="button">SIGN UP NOW</p>
                </div>
              </div>

              <div className="save">
                <div className='text'>
                  <span className='main-text'>HK$738</span>
                  <span className="sub-text">| Year</span>
                  <p className="sub-text-sm">Save over 15% <sup>*</sup></p>
                </div>
                <div className="subscription-sm">
                  <p className="button">SAVE ON 12 MONTHS</p>
                </div>

              </div>

            </div>


            <p className="terms"><sup>*</sup>Savings compared to 12 months of the monthly subscription price.</p>

          </div>


        </div>

        <div className="sub-content">

        </div>

      </div>

    </div>
  )
}

export default Login;
