import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Plan extends Component {
  render() {
    return (
      <section className='calendar-container'>
        <section className='calendar'>
          <h1 className='calendar-header'>Your Meal Plan</h1>
          <p className='calendar-month'>Month</p>
          <p className='calendar-day'>Days</p>
          <p className='calendar-date'>Date</p>
          <h3>Select the days you want a LunchBoqs</h3>
          <h4>Click 'Pack' to view your local menu options</h4>
          <button className='step-two' type='submit'>
            Pack
          </button>
        </section>
      </section>
    )
  }
}

export default Plan
