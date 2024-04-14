import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


    return (
        <header>
            <div className='logo'>
                <h2>EFFEKT</h2>
                <span></span>
            </div>
            <nav>
                <ul className='tab-list'>
                    <li className='tab'><Link to="/">Home</Link></li>
                    <li className='tab'><Link to="/trending">Trending</Link></li>
                    <li className='tab'><Link to="/music">Music</Link></li>
                    <li className='tab'><Link to="/fashion">Fashion</Link></li>
                    <li className='tab'><Link to="/culture">Culture</Link></li>
                </ul>
            </nav>
            <div className="menu-bm">
                <div id="menu">
                    <div id='menu-bar-1'></div>
                    <div id='menu-bar-2'></div>
                    <div id='menu-bar-3'></div>
                </div>
                {/* <i class="fa-solid fa-bookmark fa-lg" id='bookmark-list-icon'></i> */}
            </div>
        </header>
    )
}