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

        {/* <a class='active' href='#home'>
      Home
    </a> */}
        {
          // <img
          //   src='./images/logo_transparent.png'
          //   alt='company logo'
          //   width='130'
          //   height='35'
          // />
        }

        <section className='main-banner'>
          <section className='container'>
            <section className='headline'>
              <a href='#'>
                {/* <img
          scr='./images/logo.png'
          alt='LOGO'
          width='560'
          height='560'
        /> */}
              </a>

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
              Look at the Restaurants
            </Link>
          </button>
          <button onMouseOver={this.packOnMouseOver}>Pack</button>
          <button onMouseOver={this.eatOnMouseOver}>Eat</button>
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
            What's your lunch week look like?
          </article>

          <article
            className='pack-info'
            style={{ display: this.state.displayPack ? 'block' : 'none' }}
          />

          <article
            className='eat-info'
            style={{ display: this.state.displayEat ? 'block' : 'none' }}
          >
            eat info stuff
          </article>
        </section>

        {/* </section> */}

        <section className='bottom-container' />

        {/* <footer className='footer'>© LunchBoqs™ 2019</footer> */}
        {/* <Plan />
        <Pack /> */}
      </section>
    )
  }
}

export default HomePage
