import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  state = {
    displayPlan: false,
    displayPack: false,
    displayEat: false
  }

  planOnMouseOver = () => {
    this.setState({
      displayPlan: true,
      displayPack: false,
      displayEat: false
    })
  }

  packOnMouseOver = () => {
    this.setState({
      displayPlan: false,
      displayPack: true,
      displayEat: false
    })
  }

  eatOnMouseOver = () => {
    this.setState({
      displayPlan: false,
      displayPack: false,
      displayEat: true
    })
  }

  render() {
    return (
      <section>
        <header>
          <section className='topnav'>
            <section className='login-container'>
              <button className='login' type='submit'>
                Log In
              </button>

              <button className='signUp' type='submit'>
                Sign Up
              </button>
              {/* <form action='/action_page.php'>
      <input type='text' placeholder='Username' name='username' />
      <input type='text' placeholder='Password' name='psw' /> 
    </form> */}
            </section>
          </section>
        </header>

        <section className='main-banner'>
          <section className='container'>
            <section className='headline'>
              <h2>Keep Midday Simple.</h2>
            </section>
          </section>
        </section>

        {/* <section className='flex-container'>  */}
        <section className='selector-container'>
          <button>
            <Link
              to='/plan'
              className='hover-button'
              onMouseOver={this.planOnMouseOver}
            >
              About
            </Link>
          </button>

          {/* <button onMouseOver={this.packOnMouseOver} /> */}
          <button>
            <Link
              to='/plan'
              className='hover-button'
              onMouseOver={this.eatOnMouseOver}
            >
              Find Food
            </Link>
          </button>
        </section>

        <section className='info-container'>
          <article
            style={{
              display:
                !this.state.displayPlan &&
                !this.state.displayPack &&
                !this.state.displayEat
                  ? 'block'
                  : 'none'
            }}
          >
            <p> LunchBoqs is more than a meal. It's your time delivered.</p>
          </article>
          <article
            className='plan-info'
            style={{ display: this.state.displayPlan ? 'block' : 'none' }}
          >
            Take the guesswork out of lunchtime. Every LunchBoqs is $7 and comes
            with an entree and two sides. Best of all each LunchBoqs is crafted
            from your favorite local restaurants. Plan for the day or the entire
            week. Check in every Saturday for a new LunchBoqs Menu Board.
          </article>
          <article
            className='pack-info'
            style={{ display: this.state.displayPack ? 'block' : 'none' }}
          />
          {/* This tells Users that they are about to see amazing restaurant options */}
          <article
            className='eat-info'
            style={{ display: this.state.displayEat ? 'block' : 'none' }}
          >
            This is where value meets fancy. See your local restaurants.
          </article>
        </section>

        {/* </section> */}

        <footer className='footer'>© LunchBoqs™ 2019</footer>
      </section>
    )
  }
}

export default HomePage
