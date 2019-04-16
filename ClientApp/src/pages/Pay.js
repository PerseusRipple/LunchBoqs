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
            <input type='radio' name='radio' id='radio' />
            <label for='radio'>Full Stack Talent</label>
            <input type='radio' name='radio' id='radio' />
            <label for='radio'>Haneke Design</label>
            <input type='radio' name='radio' id='radio' />
            <label for='radio'>Suncoast Developers Guild</label>
          </fieldset>
          <fieldset>
            <legend className='legend'>Without Love Nothing is Possible</legend>
            <input type='radio' name='radio' id='radio' />
            <label for='radio'>Thanks, Dad 🐣</label>
            <input type='radio' name='radio' id='radio' />
            <label for='radio'>Thank you, Mom and Troy</label>
            {/* <input type='radio' name='radio' id='radio' />
            <label for='radio'>Suncoast Developers Guild</label> */}
          </fieldset>
          {/* </form> */}
          <fieldset>
            <legend className='legend'>And a Very Special Thanks to...</legend>
            <input type='radio' name='radio' id='radio' />
            <label for='radio'>Katherine Trammell</label>
            <input type='radio' name='radio' id='radio' />
            <label for='radio'>Gavin Stark</label>
            <input type='radio' name='radio' id='radio' />
            <label for='radio'>Mark Dewey</label>
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
