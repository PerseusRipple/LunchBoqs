import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Restaurant extends Component {
  render() {
    return (
      <section>
        <header>
          <section className='restaurant-logo'>
            This Is Restaurant Banner
          </section>
        </header>
        <section className='restaurant-page'>eat</section>
      </section>
    )
  }
}

export default Restaurant
