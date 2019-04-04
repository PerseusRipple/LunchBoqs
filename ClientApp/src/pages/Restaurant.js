/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import seafood from '../images/seafoodlogo.png'

class Restaurant extends Component {
  state = {
    monday: {
      lunch: null,
      snack: null
    }
  }

  // meal day changed
  dayChanged = (event, meal) => {
    console.log('thing was change', event.target.value, 'for ', meal)
    this.setState({
      [event.target.value]: { lunch: meal }
    })
  }

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
            <article>
              <button>LunchBoqs 1</button>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <select
                className='days'
                onChange={e => this.dayChanged(e, 'lunchboqs 1')}
              >
                <option>Choose the day</option>
                <option value='monday'>Monday</option>
                <option value='tuesday'>Tuesday</option>
                <option value='wednesday'>Wednesday</option>
                <option value='thursday'>Thursday</option>
                <option value='friday'>Friday</option>
              </select>
            </article>

            <article>
              <button>LunchBoqs 2</button>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <select
                className='days'
                onChange={e => this.dayChanged(e, 'lunchboqs 2')}
              >
                <option>Choose the day</option>
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
              </select>
            </article>

            <article>
              <button>LunchBoqs 3</button>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <select
                className='days'
                onChange={e => this.dayChanged(e, 'lunchboqs 3')}
              >
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
              </select>
            </article>

            <article>
              <button>LunchBoqs 4</button>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <select
                className='days'
                onChange={e => this.dayChanged(e, 'lunchboqs 4')}
              >
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
              </select>
            </article>

            <article>
              <button> LunchBoqs 5</button>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <select
                className='days'
                onChange={e => this.dayChanged(e, 'lunchboqs 5')}
              >
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
              </select>
            </article>

            <article>
              <button>SnackBoqs</button>
              <p>this is a snack</p>
              <p>this is a snack</p>
              <p>this is a snack</p>
              <select
                className='days'
                onChange={e => this.dayChanged(e, 'snackboqs')}
              >
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
              </select>
            </article>
          </section>
        </section>

        <section className='calendar-container'>
          <article />
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
                  <td>
                    <span
                      role='img'
                      aira-label='this meal has been selected'
                      style={{
                        display: this.state.monday.lunch ? 'block' : 'none'
                      }}
                    >
                      🐸
                    </span>
                  </td>
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
        </section>
      </section>
    )
  }
}

export default Restaurant
