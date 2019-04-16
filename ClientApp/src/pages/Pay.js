import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Pay extends Component {
  render() {
    return (
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
        <section className='pay-page'>
          {/* <section className='pay-container'> */}
          <h2>
            <big>🐸 </big>
            Pay it Forward <big>🐸</big>
          </h2>
          <form action='' method='get' className='pay-form'>
            <label for='Get-name'>Name:</label>
            <input
              type='text'
              id='Get-name'
              name='name'
              placeholder='Shantell Smithson'
            />
          </form>

          <form action='post' className='pay-form'>
            <label for='name'>Skool:</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='SDG, Cohort xiii'
            />
          </form>
          {/* <form action='post' className='pay-form'> */}
          <fieldset>
            <legend className='legend'>
              Thank You for investing in my future!
            </legend>
            <ul>
              <li>♡ Full Stack Talent</li>
              <li>♡ Haneke Design</li>
              <li>♡ Suncoast Developers Guild</li>
            </ul>
          </fieldset>
          <fieldset>
            <legend className='legend'>Without Love Nothing is Possible</legend>
            <ul>
              <li>♡ Thanks, Dad 🐣</li>
              <li>♡ Thank you, Mom and Troy</li>
            </ul>
          </fieldset>

          <fieldset>
            <legend className='legend'>And a Very Special Thanks to...</legend>
            <ul>
              <li>♡ Katherine Trammell</li>
              <li>♡ Gavin Stark</li>
              <li>♡ Mark Dewey</li>
            </ul>
            <p>
              Mark, you inspire me to be a better programmer and to help others
              strengthen their craft. I could not have completed my project
              without you.
            </p>
          </fieldset>
          <fieldset>
            <legend className='legend'>Attributions</legend>
            <p>Logo design from: hatchful.shopify.com </p>
            <p>Restaurant images from: www.freepik.com and www.Vecteezy.com</p>
          </fieldset>
        </section>
        <footer>
          {' '}
          Website made with
          <Link to='/'>
            <button className='love'>love</button>
          </Link>{' '}
          by Shantell Smithson
        </footer>
      </section>
    )
  }
}

export default Pay
