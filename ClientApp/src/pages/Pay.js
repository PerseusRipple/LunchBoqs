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
        <section className='pay-page' />
        <h1 />
      </section>
    )
  }
}

export default Pay
