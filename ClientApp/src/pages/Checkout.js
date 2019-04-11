import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

class Checkout extends Component {
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

          <section className='checkout-dropdown-container'>
            <section className='scrolling-wrapper-checkout'>
              <article className='checkout-card'>
                <select
                  className='days-order'
                  // onChange={e =>
                  //   this.dayChanged(e, lunchboq.name, lunchboq.id)
                  // }
                >
                  <option>Monday's Lunchboq's</option>
                  <option value='Restaurant Name'>Mama Mia</option>
                  <option value='LunchBoq1'>LunchBoq1</option>
                  <option value='Entree'>Entree</option>
                  <option value='Side1'>Side1</option>
                  <option value='Side2'>Side2</option>
                </select>
                <section className='check-buttons'>
                  <button>Keep</button>
                  <button>Empty</button>
                </section>
              </article>

              <article className='checkout-card'>
                <select
                  className='days-order'
                  // onChange={e =>
                  //   this.dayChanged(e, lunchboq.name, lunchboq.id)
                  // }
                >
                  <option>Tuesdays Lunchboq's</option>
                  <option value='Restaurant Name'>Man Bun</option>
                  <option value='LunchBoq2'>LunchBoq2</option>
                  <option value='Entree'>Entree</option>
                  <option value='Side1'>Side1</option>
                  <option value='Side2'>Side2</option>
                </select>
              </article>

              <article className='checkout-card'>
                <select
                  className='days-order'
                  // onChange={e =>
                  //   this.dayChanged(e, lunchboq.name, lunchboq.id)
                  // }
                >
                  <option>Wednesday's Lunchboq's</option>
                  <option value='Restaurant Name'>Chopsticks</option>
                  <option value='LunchBoq3'>LunchBoq3</option>
                  <option value='Entree'>Entree</option>
                  <option value='Side1'>Side1</option>
                  <option value='Side2'>Side2</option>
                </select>
              </article>

              <article className='checkout-card'>
                <select
                  className='days-order'
                  // onChange={e =>
                  //   this.dayChanged(e, lunchboq.name, lunchboq.id)
                  // }
                >
                  <option>Thursday's Lunchboq's</option>
                  <option value='Restaurant Name'>Garden of Eaton</option>
                  <option value='LunchBoq1'>LunchBoq1</option>
                  <option value='Entree'>Entree</option>
                  <option value='Side1'>Side1</option>
                  <option value='Side2'>Side2</option>
                </select>
              </article>

              <article className='checkout-card'>
                <select
                  className='days-order'
                  // onChange={e =>
                  //   this.dayChanged(e, lunchboq.name, lunchboq.id)
                  // }
                >
                  <option>Friday's Lunchboq's</option>
                  <option value='Restaurant Name'>Chopsticks</option>
                  <option value='LunchBoq5'>LunchBoq1</option>
                  <option value='Entree'>Entree</option>
                  <option value='Side1'>Side1</option>
                  <option value='Side2'>Side2</option>
                </select>
              </article>
            </section>
          </section>
          <h2>Look Good?</h2>
          <button className='checkout-button'>Checkout</button>
        </section>
      </section>
      // </section>
    )
  }
}

export default Checkout
