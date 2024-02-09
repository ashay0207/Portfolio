import React from 'react'
import './navbar.css'
import {useState} from 'react'
import logo from '../../Assets/aslogo.png'
import menu from '../../Assets/menu.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
    return (
        <>
        <nav className='nav d-flex'>
            <img src={logo} alt="logo" className='logo'/>
            <div className="menu">
                <Link className='menuList' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home </Link>
                <Link className='menuList' activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}>About </Link>
                <Link className='menuList' activeClass='active' to='resume' spy={true} smooth={true} offset={-100} duration={500}>Resume</Link>
                <Link className='menuList' activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
            </div>
                <div class="btn btn-one" onClick={()=>{
                    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
                }}>
                <i class="fa-regular fa-comment"></i><span>Contact Me</span>
                </div>
                <img src={menu} alt="" className='navmenu' onClick={()=>setshowMenu(!showMenu)}/>
            <div className="mobmenu" style={{display:showMenu? 'flex':'none'}}>
                <Link className='List' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Home </Link>
                <Link className='List' activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>About </Link>
                <Link className='List' activeClass='active' to='resume' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Resume</Link>
                <Link className='List' activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Projects</Link>
                <Link className='List' activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Contact</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar