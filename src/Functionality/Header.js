import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { AiOutlineBars } from 'react-icons/ai';
import "./Header.css"

const Header = () => {
    const[mobileView, setmobileView] = useState(false);
  return (
    <>
     <header className='main-head'>
        <div className="Logo-bar">
            <Link to='/' className='link-data'>
            <h1><span className='Logo-name'>The</span>Serian</h1>
            </Link>
        </div>

        <nav className={mobileView? "mobile-view" : "nav-link"} onClick={()=>{setmobileView(false)}}>
            <li><NavLink to='/' className={({ isCurrent }) => (isCurrent ? 'active-Mode' : 'notactive-Mode')}>Home</NavLink></li>
            <li><NavLink to='/Bollywood' className={({ isCurrent }) => (isCurrent ? 'active-Mode' : 'notactive-Mode')}>Bollywood</NavLink></li>
            <li><NavLink to='/Hollywood' className={({ isCurrent }) => (isCurrent ? 'active-Mode' : 'notactive-Mode')}>HollyWood</NavLink></li>
            <li><NavLink to='/Technology' className={({ isCurrent }) => (isCurrent ? 'active-Mode' : 'notactive-Mode')}>Technology</NavLink></li>
            <li><NavLink to='/Fitness' className={({ isCurrent }) => (isCurrent ? 'active-Mode' : 'notactive-Mode')}>Fitness</NavLink></li>
            <li><NavLink to='/Food' className={({ isCurrent }) => (isCurrent ? 'active-Mode' : 'notactive-Mode')}>Food</NavLink></li>
        </nav>
        <button className='menu-bar' onClick={()=>{setmobileView(!mobileView)}}>
            {mobileView ? <ImCross/>  : <AiOutlineBars/>}
        </button>
        <hr  className='hr-strline'/>
    </header> 
    </>
  )
}
export default Header
