import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>

      <div className="footer__socials">
      <a style={{color:'white'}} href="https://www.linkedin.com/in/christopher-gomez-240229139/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a style={{color:'white'}} href="https://github.com/chrisgtr34" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div style={{color:'white'}} className="footer__copyright">
        <small>&copy; ET 2022. All rights reserved.</small>
      </div>
    </footer>
    
  )
}


export default Footer