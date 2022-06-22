import React from 'react';
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='expeience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='expeience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='expeience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Beginner</small>
            </article>

            <article className='expeience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Javascript</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='expeience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>React JS</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='expeience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>.Net</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='expeience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <h4>Node JS</h4>
              <small className='text-light'>Beginner</small>
            </article>

            <article className='expeience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <h4>SQL Server</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='expeience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='expeience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <h4>MongoDB</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience