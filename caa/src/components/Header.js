import React from 'react'
import logo from '../static/images/caa_title.png';
import Search from './Search';

const Header = () => {
  return (
    <div class = "Header-wrap">
        <div id = "Header">
            <img src={logo} alt="CAA Logo" />
            <div>
                <div class = "links">
                    <a>Become a Member</a>
                    <hr/>
                    <a id = "login-link">Login</a>
                    <button>Connect Wallet</button>
                </div>
            </div>
        </div>
        <div id = "Header2">
            <div>
                <a>Membership</a>
                <a>Rewards</a>
                <a>Profile</a>
            </div>
            <div class = "search-div">
                <Search/>

            </div>
        </div>
    </div>
    
  )
}

export default Header