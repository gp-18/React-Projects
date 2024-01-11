import React from 'react'
import './Servicess.css'
import {BsCheck} from 'react-icons/bs'

const Servicess = () => {
  return (
    <section id='services'>
      <h5>What I Know</h5>
      <h2>My Concern</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheck className='service__list-icon'/> Simple and Effective Designs</li>
            <li><BsCheck className='service__list-icon'/>User Friendly</li>
            <li><BsCheck className='service__list-icon'/>colour contrasting And Attractive</li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Front End Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheck className='service__list-icon'/> Static and Dynamic Websites</li>
            <li><BsCheck className='service__list-icon'/>Frontend Specialise</li>
            <li><BsCheck className='service__list-icon'/>Responsives Websites</li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Android</h3>
          </div>
          <ul className='service__list'>
            <li><BsCheck className='service__list-icon'/> Android Applications</li>
            <li><BsCheck className='service__list-icon'/>Compose Performance</li>
            <li><BsCheck className='service__list-icon'/>Version Friendly</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Servicess