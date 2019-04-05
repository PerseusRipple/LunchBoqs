import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import images from './images'
import seafood from '../images/seafoodlogo.png'
import veggie from '../images/fancyveglogo.png'
import sushi from '../images/sushi-logo-vector.png'
import bakery from '../images/bakerylogo.png'
import italian from '../images/italianlogo.png'
import burger from '../images/burgerset.png'

class Plan extends Component {
  state = {
    displayRestaurant: true
  }

  menuOnClick = () => {
    this.setState({
      displayRestaurant: true
    })
  }

  render() {
    return (
      <section>
        <header className='plan-logo'>
          <button className='LogIn' type='submit'>
            Log In
          </button>
        </header>
        {/* <h1 className='calendar-header'>Your LunchBoqs</h1> */}
        <section className='restaurant-gallery'>
          <article className='seafood-img'>
            <Link to='/restaurant' className='click-button'>
              <img src={seafood} alt='LOGO' width='180' height='180' />
            </Link>
          </article>
          <article className='veggie-img'>
            <Link to='/restaurant' className='click-button'>
              <img src={veggie} alt='LOGO' width='180' height='180' />
            </Link>
          </article>

          <article className='sushi-img'>
            <Link to='/restaurant' className='click-button'>
              <img src={sushi} alt='LOGO' width='180' height='180' />
            </Link>
          </article>
          <article className='bakery-img'>
            <Link to='/restaurant' className='click-button'>
              <img src={bakery} alt='LOGO' width='180' height='180' />
            </Link>
          </article>
          <article className='veggie-img'>
            <Link to='/restaurant' className='click-button'>
              <img src={italian} alt='LOGO' width='180' height='180' />
            </Link>
          </article>
          <article className='burger-img'>
            <Link to='/restaurant' className='click-button'>
              <img src={burger} alt='LOGO' width='180' height='180' />
            </Link>
          </article>
        </section>
      </section>
    )
  }
}

export default Plan
