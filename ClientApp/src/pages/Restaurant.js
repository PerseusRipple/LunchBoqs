import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import seafood from '../images/seafoodlogo.png'

class Restaurant extends Component {
  render() {
    return (
      <section>
        <header className='restaurant-logo'>
          <article className='seafoodMenu-img'>
            <Link to='/plan' className='click-button'>
              <img src={seafood} alt='LOGO' width='90' height='90' />
            </Link>
          </article>
        </header>

        <section className='restaurant-page'>
          <h1>Choose your meal.</h1>
          <h3> Tell us when to deliver your LunchBoqs</h3>
          <section className='menu-gallery'>
            <article>LunchBoqs 1</article>
            <article>LunchBoqs 2</article>
            <article>LunchBoqs 3</article>
            <article>LunchBoqs 4</article>
            <article>LunchBoqs 5</article>
          </section>
        </section>
      </section>
    )
  }
}

export default Restaurant
