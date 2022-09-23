import React, {useState}  from 'react'
import './nav.css'
import {BsJournalText, BsJournalCode} from 'react-icons/bs'
import {AiOutlineMessage, AiOutlineUser, AiOutlineHome} from 'react-icons/ai'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome color='var(--color-bg)'/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser color='var(--color-bg)'/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsJournalText color='var(--color-bg)'/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsJournalCode color='var(--color-bg)'/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage color='var(--color-bg)'/></a>
    </nav>
  )
}

export default Nav