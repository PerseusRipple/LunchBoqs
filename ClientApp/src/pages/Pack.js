import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Pack extends Component {
  render() {
    return (
      <section>
        <section className='NavBar' />
        <section className='restaurant-gallery'>
          <h1 className='pack-header'>What are you in the mood for?</h1>
          <ul className='restaurant-list'>
            <a href='#'>
              <li>Cafe Ole</li>
            </a>
            <a href='#' />
            <a href='#'>
              {' '}
              <li>Your Mama's Kitchen</li>
            </a>
            <a href='#'>
              {' '}
              <li>Fake Burgers</li>
            </a>
            <a href='#'>
              {' '}
              <li>Aesop's Tables</li>
            </a>
            <a href='#'>
              <li>Moo and Cookies</li>
            </a>
            <a href='#'>
              {' '}
              <li>The Pit</li>
            </a>
          </ul>
        </section>
      </section>
    )
  }
}

export default Pack
