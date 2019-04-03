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
  render() {
    return (
      <section>
        <nav>
          <h1 className='calendar-header'>Your LunchBoqs</h1>
        </nav>
        <section className='calendar-container'>
          <section className='calendar'>
            <table>
              <thead>
                <tr className='days-rows'>
                  <th />
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                </tr>
              </thead>
              <tbody>
                <tr className='lunch-row'>
                  <td>Lunch</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr className='snack-row'>
                  <td>Snack</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
          </section>

          {/* <h3>Select the days you want a LunchBoqs</h3>
        <h4>Click 'Pack' to view your local menu options</h4> */}
        </section>

        <section className='restaurant-gallery'>
          <article className='seafood-img'>
            <a href='#'>
              <img src={seafood} alt='LOGO' width='180' height='180' />
            </a>
          </article>

          <article className='veggie-img'>
            <a href='#'>
              <img src={veggie} alt='LOGO' width='180' height='180' />
            </a>
          </article>
          <article className='sushi-img'>
            <a href='#'>
              <img src={sushi} alt='LOGO' width='180' height='180' />
            </a>
          </article>
          <article className='bakery-img'>
            <a href='#'>
              <img src={bakery} alt='LOGO' width='180' height='180' />
            </a>
          </article>
          <article className='veggie-img'>
            <a href='#'>
              <img src={italian} alt='LOGO' width='180' height='180' />
            </a>
          </article>
          <article className='burger-img'>
            <a href='#'>
              <img src={burger} alt='LOGO' width='180' height='180' />
            </a>
          </article>
        </section>

        <section>
          <button className='step-two' type='submit'>
            Pack
          </button>
        </section>
      </section>
    )
  }
}

export default Plan
