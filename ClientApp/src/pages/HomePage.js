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

  planOnMouseLeave = () => {
    this.setState({
      displayPlan: false,
      displayPack: false,
      displayEat: false
    })
  }

  packOnMouseLeave = () => {
    this.setState({
      displayPlan: false,
      displayPack: false,
      displayEat: false
    })
  }

  render() {
    return (
      <section>
        <header>
          <section className='topnav'>
            <section className='login-container'>
              <button className='login' type='submit'>
                <Link
                  to='/LogIn'
                  className='hover-button'
                  style={{ display: 'block', height: '100%' }}
                >
                  Log In
                </Link>
              </button>

              <button className='signUp' type='submit'>
                <Link
                  to='/Join'
                  className='hover-button'
                  style={{ display: 'block', height: '100%' }}
                >
                  Sign Up
                </Link>
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
          {/* <a
            href='/plan'
            className='hover-button'
            onMouseOver={this.planOnMouseOver}
          >
            About
          </a> */}

          <button
            onMouseOver={this.planOnMouseOver}
            onMouseLeave={this.planOnMouseLeave}
          >
            <Link
              to='/plan'
              className='hover-button'
              style={{ display: 'block', height: '100%' }}
            >
              About
            </Link>
          </button>
          <button
            onMouseOver={this.eatOnMouseOver}
            onMouseLeave={this.packOnMouseLeave}
          >
            <Link
              to='/plan'
              className='hover-button'
              style={{ display: 'block', height: '100%' }}
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
            style={{ display: this.state.displayPlan ? 'block' : 'none' }}
          >
            <p>LunchBoqs takes the guesswork out of lunchtime.</p>{' '}
            <p> Plan for the day or the entire week.</p>
            <p>
              Every meal is $5 and comes with an entree and two sides. Best of
              all, each LunchBoqs is crafted from a local restaurant.
            </p>
            {/* Plan for the day or the entire week. Check in every Saturday for a
              new LunchBoqs Menu Board. */}
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
            <p>
              This is where value meets fancy. See what your favorite
              restaurants have boxed up for you.
            </p>
            <p>Check back every Saturday for a new LunchBoqs Menu Board.</p>
          </article>
        </section>
      </section>
    )
  }
}

export default HomePage
