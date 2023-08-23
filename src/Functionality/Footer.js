import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
     <div className="Footer-box">
        <div className="brand Footer_Brand">
          <Link to={"/"} className='link-data'>
            <h1>
              <span className="Logo-name">The</span>Serian
            </h1>
          </Link>
        </div>
        <div className="Footer-section">
        <div className="Quick-Link-Connector">
          <h3>Quick Link </h3>
          <ul>
          <li><Link to={"/"} >Home</Link></li>
            <li><Link to={"/Bollywood"} >Bollywood</Link></li>
            <li><Link to={"/HollyWood"} >HollyWood</Link></li>
            <li><Link to={"/Technology"} >Technology</Link></li>
            <li><Link to={"/Fitness"} >Fitness</Link></li>
            <li><Link to={"/Food"} >Food</Link></li>
          </ul>
        </div>
        <div className="Footer-social-icon">
            <h3> Contact US </h3>
          <Link to='/' target="_blank"><div className="social_child"> <AiFillFacebook className="fb"/>facebook</div></Link>
          <Link to='/'target="_blank" ><div className="social_child"><AiFillInstagram className="insta"/> Intagram</div></Link>
          <Link to='/' target="_blank"><div className="social_child"><AiFillGithub className="git"/> github</div></Link>
          <Link to='/' target="_blank"><div className="social_child"> <AiFillLinkedin className="link"/>linkedin</div></Link>
        </div>
        </div>

      </div>
      <div className="Copy-right-container">
        <h3> contact @ Vinayak Kaushik </h3>
      </div>
    </footer>
  );
}

export default Footer;
