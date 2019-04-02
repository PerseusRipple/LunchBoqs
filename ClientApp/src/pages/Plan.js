import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import images from './images'

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
        <section className='mid-container'>Restaurant Images Go Here</section>{' '}
        <section className='restaurant-gallery'>
          <article className='seafood-img'>
            <a href='#'>
              <img
                scr='./images/seafoodlogo.jpg'
                alt='LOGO'
                width='560'
                height='560'
              />{' '}
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
