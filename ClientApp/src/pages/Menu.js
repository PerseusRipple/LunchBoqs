/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

class Menu extends Component {
  state = {
    restaurant: {},
    monday: {
      lunch: null,
      snack: null
    },
    tuesday: {
      lunch: null,
      snack: null
    },
    wednesday: {
      lunch: null,
      snack: null
    },
    thursday: {
      lunch: null,
      snack: null
    },
    friday: {
      lunch: null,
      snack: null
    },
    menus: [],
    lunchboqs: []
  }

  dayChanged = (event, meal, lunchboqsId) => {
    console.log('thing was change', event.target.value, 'for ', meal)
    const dayOfWeek = event.target.value
    if (dayOfWeek) {
      axios
        .post('/api/userselections/', {
          dayOfWeek: dayOfWeek,
          lunchboqsId: lunchboqsId
        })
        .then(resp => {
          this.setState({
            [dayOfWeek]: { lunch: meal }
          })
        })
    }
  }

  removeDay = day => {
    // todo: axios delete that endpoint
    // .then
    axios
      .delete('/api/userselections/', {
        data: {
          dayOfWeek: day
        }
      })
      .then(resp => {
        this.setState({
          [day]: { lunch: null }
        })
      })
  }

  // timeChanged = (event, meal) => {
  //   console.log('thing was change', event.target.value, 'for ', meal)
  //   this.setState({
  //     [event.target.value]: { lunch: meal }
  //   })
  // }

  componentDidMount() {
    axios
      .get('/api/restaurants/' + this.props.match.params.restaurantId)
      .then(resp => {
        this.setState({
          restaurant: resp.data
        })
      })
    axios
      .get('/api/lunchboqs/' + this.props.match.params.restaurantId)
      .then(resp => {
        this.setState({
          lunchboqs: resp.data
        })
      })
    axios.get('/api/userselections/').then(resp => {
      console.log(resp)
      const alreadySelectedMeals = {}
      resp.data.forEach(selection => {
        alreadySelectedMeals[selection.dayOfWeek] = {
          lunch: selection.lunchBoqsId
        }
      })
      console.log(alreadySelectedMeals)
      this.setState({
        ...alreadySelectedMeals
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
        <section className='restaurant-logo'>
          <header>
            <article className='seafoodMenu-img'>
              <Link to='/plan' className='click-button'>
                <img
                  src={this.state.restaurant.imgUrl}
                  alt='LOGO'
                  width='90'
                  height='90'
                />
              </Link>
            </article>
          </header>
        </section>
        <section className='menu-page'>
          <h1>Choose your meal for</h1>
          <h2>{this.state.restaurant.name}</h2>

          <section className='menu-gallery'>
            <section className='scrolling-wrapper-menu'>
              {this.state.lunchboqs.map((lunchboq, i) => {
                return (
                  <article className='menu-card' key={lunchboq.id}>
                    <button>LunchBoq {i + 1}</button>
                    <p>{lunchboq.entree}</p>
                    <p>{lunchboq.side1}</p>
                    <p>{lunchboq.side2}</p>
                    <select
                      className='days'
                      onChange={e =>
                        this.dayChanged(e, lunchboq.name, lunchboq.id)
                      }
                    >
                      <option>Choose the day</option>
                      <option value='monday'>Monday</option>
                      <option value='tuesday'>Tuesday</option>
                      <option value='wednesday'>Wednesday</option>
                      <option value='thursday'>Thursday</option>
                      <option value='friday'>Friday</option>
                    </select>
                  </article>
                )
              })}
            </section>
          </section>

          <section className='calendar-container'>
            <section className='scrolling-wrapper-menu'>
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
                    <tr className='lunch-row' width='144' heighth='80'>
                      <td>Lunch</td>
                      <td>
                        <span
                          role='img'
                          aira-label='this meal has been selected'
                          style={{
                            display: this.state.monday.lunch ? 'block' : 'none'
                          }}
                          onClick={() => this.removeDay('monday')}
                        >
                          🐸
                        </span>
                      </td>
                      <td>
                        <span
                          role='img'
                          aira-label='this meal has been selected'
                          style={{
                            display: this.state.tuesday.lunch ? 'block' : 'none'
                          }}
                          onClick={() => this.removeDay('tuesday')}
                        >
                          🐸
                        </span>
                      </td>
                      <td>
                        <span
                          role='img'
                          aira-label='this meal has been selected'
                          style={{
                            display: this.state.wednesday.lunch
                              ? 'block'
                              : 'none'
                          }}
                          onClick={() => this.removeDay('wednesday')}
                        >
                          🐸
                        </span>
                      </td>
                      <td>
                        <span
                          role='img'
                          aira-label='this meal has been selected'
                          style={{
                            display: this.state.thursday.lunch
                              ? 'block'
                              : 'none'
                          }}
                          onClick={() => this.removeDay('thursday')}
                        >
                          🐸
                        </span>
                      </td>
                      <td>
                        <span
                          role='img'
                          aira-label='this meal has been selected'
                          style={{
                            display: this.state.friday.lunch ? 'block' : 'none'
                          }}
                          onClick={() => this.removeDay('friday')}
                        >
                          🐸
                        </span>
                      </td>
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
        </section>
        <section className='bottom-container'>
          <h2>Ready to Make Midday Simple?</h2>

          <section className='order-button-container'>
            <Link to='/checkout' className='click-button'>
              <button className='order-button' type='submit'>
                Review Your Plan
              </button>
            </Link>
          </section>

          <footer />
        </section>
      </section>
    )
  }
}

export default Menu
