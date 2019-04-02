import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Plan extends Component {
  render() {
    return (
      <section>
        <section className='calendar-container'>
          <section className='calendar'>
            <h1 className='calendar-header'>Your Meal Plan</h1>

            <table width='400' cellPadding='10' cellSpacing='5'>
              <tr className='days-rows'>
                <th width='150' />
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th width='150'>Friday</th>
              </tr>
              <tr className='lunch-row'>
                <th>Lunch</th>
                {/* <td rowspan='2'>Yummy</td> */}
              </tr>
              <tr className='snack-row'>
                <th>Snack</th>
              </tr>
            </table>
          </section>

          {/* <h3>Select the days you want a LunchBoqs</h3>
        <h4>Click 'Pack' to view your local menu options</h4> */}
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
