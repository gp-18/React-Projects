import React from 'react'
import './About.css'
import Pic from '../../assests/img1.jpeg'
import{FaAward} from 'react-icons/fa';
import{AiFillFolderOpen} from 'react-icons/ai'
const About = () => {
  return (
   <section id='about'>
   
    <h5>Get To Know</h5>
    <h2>About Me</h2>
  
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={Pic} alt=" "/>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <FaAward className="about__icons"/>
            <h5>Experience</h5>
            <small>1 Year and Working</small>
          </article>


          <article className='about__card'>
          <AiFillFolderOpen className="about__icons"/>
            <h5>Projects</h5>
            <small>10+ and Working</small>
          </article>
        </div>
        <p>
        I'm Parth Gupta, A student at Government Engineering College, Modasa, and I'm now enrolled in my pre-final year of the B.Tech. CSE programme. I became interested in computer science during my school years. I'm curious about using C++ to solve problems. I have a lot of passion for app and website development.I'm interested in learning more about big data, Artificial Intelligence, and Machine Learning. I'm a student who also wants to expand on the fundamentals of computer science. In college, I participated in several coding and technical challenges, hackathons, and open source projects.
        </p>

        <a href='#contact' className='btn btn-primary'><span>Let's Talk</span></a>
      </div>
    </div>
   </section>
  )
}

export default About