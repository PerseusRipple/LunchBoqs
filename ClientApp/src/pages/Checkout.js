import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Checkout extends Component {
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
    selections: []
  }

  componentDidMount() {
    axios.get('/api/userselections/').then(resp => {
      console.log({ resp })
      const sorter = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5
      }
      const sortByDay = (a, b) => {
        var day1 = a.dayOfWeek.toLowerCase()
        var day2 = b.dayOfWeek.toLowerCase()
        if (sorter[day1] > sorter[day2]) {
          return 1
        } else if (sorter[day1] < sorter[day2]) {
          return -1
        } else {
          return 0
        }
      }

      resp.data.sort(sortByDay)

      this.setState({
        selections: resp.data
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
        <article className='logo-img'>
          <Link to='/'>
            <header className='logo-banner' />
          </Link>
        </article>
        <section className='checkout-container'>
          <h3>Review Your Weekly Menu</h3>
          <section className='scrolling-wrapper-menu'>
            {this.state.selections.map((selection, i) => {
              return (
                <article className='menu-card' key={selection.id}>
                  {/* <button>selection {i + 1}</button> */}
                  <button className='weekday'>
                    {/* {i + 1} */}
                    {selection.dayOfWeek}
                  </button>

                  <p className='eats'> {selection.lunchBoqs.name}</p>

                  <p>{selection.lunchBoqs.entree}</p>
                  <p>{selection.lunchBoqs.side1}</p>
                  <p>{selection.lunchBoqs.side2}</p>
                </article>
              )
            })}
          </section>
        </section>
        <section className='bottom-container-checkout'>
          <h2>Look Good?</h2>
          <Link to='/pay'>
            <button className='checkout-button'>Checkout</button>
          </Link>
        </section>
      </section>
    )
  }
}

export default Checkout
