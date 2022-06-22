import React from 'react';
import './Portfolio.css'
import NODE from '../../assets/node.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={NODE} alt="Portfolio" />
                </div>
                <div>
                <h3>My Portfolio Website</h3>
                    <div className='portfolio__item-cta'>
                        <a href="github.com" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary'>Live Demo</a>
                    </div>                    
                </div>                
            </article>
            <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                    <img src={NODE} alt="Portfolio" />
                </div>
                <div>
                <h3>Vidly</h3>
                    <div className='portfolio__item-cta'>
                        <a href="github.com" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary'>Live Demo</a>
                    </div>
                </div>
            </article>

            <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                    <img src={NODE} alt="Portfolio" />
                </div>
                <div>
                <h3>Node JS</h3>
                    <div className='portfolio__item-cta'>
                        <a href="github.com" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary'>Live Demo</a>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Portfolio