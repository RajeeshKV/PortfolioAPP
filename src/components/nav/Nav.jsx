import React from 'react';
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {MdHomeRepairService} from 'react-icons/md'
import {IoIosContact} from 'react-icons/io'
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" className={activeNav === '#' ? 'active' : ''} onClick= {() => setActiveNav('#')}><AiOutlineHome /></a>
        <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick= {() => setActiveNav('#about')}><AiOutlineUser /></a>
        <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick= {() => setActiveNav('#experience')}><BiBookAlt /></a>
        <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''} onClick= {() => setActiveNav('#portfolio')}><MdHomeRepairService /></a>
        <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick= {() => setActiveNav('#contact')}><IoIosContact /></a>

    </nav>
  )
}

export default Nav