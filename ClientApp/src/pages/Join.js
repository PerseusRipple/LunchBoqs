import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Join extends Component {
  render() {
    return (
      <section>
        <section>
          <header>
            <section className='top-plan'>
              <section className='login-container-plan'>
                <button className='login-btn-plan' type='submit'>
                  Log In
                </button>
              </section>
            </section>
          </header>

          <article className='logo-img'>
            <Link to='/'>
              <header className='logo-banner' />
            </Link>
          </article>
        </section>
        <section className='selector-container' />
        <section className='mid-container'>
          <section className='form-container'>
            <h2 className='cheer'>Your inner frog thanks you</h2>
            <form action='' method='get' className='pay-form'>
              <div className='form-item'>
                <label for='Get-name'> UserName:</label>
                <input
                  type='text'
                  id='Get-name'
                  name='name'
                  placeholder='username'
                />
              </div>
              <div className='form-item'>
                <label for='name'>Password:</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Password'
                />
                <div className='form-item'>
                  <label for='name'> Email:</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='email'
                  />
                </div>
                <div className='form-item'>
                  <label for='name'>First Name:</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='First Name'
                  />
                </div>
                <div className='form-item'>
                  <label for='name'>Last Name:</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Last Name'
                  />
                </div>
                <div className='form-item'>
                  <label for='name'>Street Address:</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Street Address'
                  />
                </div>
              </div>
            </form>

            <button className='log-page-btn'>
              <Link
                to='/plan'
                className='hover-button'
                style={{ display: 'block', height: '100%' }}
              >
                Join
              </Link>
            </button>

            {/* <label>
              <input type='checkbox' />
              Are You Human?
            </label> */}

            <p>
              Already a member?
              <a href='/LogIn'>
                <br />
                Sign In
              </a>
            </p>
          </section>
        </section>
      </section>
    )
  }
}

export default Join
