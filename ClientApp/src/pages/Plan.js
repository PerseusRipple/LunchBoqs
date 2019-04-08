import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Plan extends Component {
  state = {
    displayRestaurant: true,
    restaurants: []
  }

  menuOnClick = () => {
    this.setState({
      displayRestaurant: true
    })
  }

  componentDidMount() {
    axios.get('/api/restaurants').then(resp => {
      this.setState({
        restaurants: resp.data
      })
    })
  }

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
        <section>
          <header className='logo-banner' />
        </section>
        {/* <h1 className='calendar-header'>Your LunchBoqs</h1> */}
        <section className='restaurant-gallery'>
          <section className='scrolling-wrapper' id='box-shadow'>
            {this.state.restaurants.map(restaurant => {
              return (
                <article id='seafood-img' className='card' key={restaurant.id}>
                  <Link to={`/menu/${restaurant.id}`} className='click-button'>
                    <img
                      src={restaurant.imgUrl}
                      alt='LOGO'
                      width='180'
                      height='180'
                    />
                  </Link>
                </article>
              )
            })}
            {/* <article id='veggie-img' className='card'>
              <Link to='/menu' className='click-button'>
                <img src={veggie} alt='LOGO' width='180' height='180' />
              </Link>
            </article>

            <article id='sushi-img' className='card'>
              <Link to='/menu' className='click-button'>
                <img src={sushi} alt='LOGO' width='180' height='180' />
              </Link>
            </article>
            <article id='bakery-img' className='card'>
              <Link to='/menu' className='click-button'>
                <img src={bakery} alt='LOGO' width='180' height='180' />
              </Link>
            </article>
            <article id='veggie-img' className='card'>
              <Link to='/menu' className='click-button'>
                <img src={italian} alt='LOGO' width='180' height='180' />
              </Link>
            </article>
            <article id='burger-img' className='card'>
              <Link to='/menu' className='click-button'>
                <img src={burger} alt='LOGO' width='180' height='180' />
              </Link>
            </article> */}
          </section>
        </section>
      </section>
    )
  }
}

export default Plan
