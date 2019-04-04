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
            <article>
              <button>LunchBoqs 1</button>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <select className='days'>
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
              </select>
            </article>

            <article>
              <button>LunchBoqs 2</button>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <p>this is the menu</p>
              <select className='days'>
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
              <select className='days'>
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
              <select className='days'>
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
              <select className='days'>
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
              <select className='days'>
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
              </select>
            </article>
          </section>
        </section>
      </section>
    )
  }
}

export default Restaurant
