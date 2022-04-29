import React from 'react'
import logo from '../static/images/caa_title.png';
import Search from './Search';
import {Link, Outlet} from "react-router-dom"

const Header = () => {

    // const [show, setShow] = useState(true);
    // const [lastScrollY, setLastScrollY] = useState(0);
    //
    // const controlNavbar = () => {
    //   if (typeof window !== 'undefined') { 
    //     if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
    //       setShow(false); 
    //     } else { // if scroll up show the navbar
    //       setShow(true);  
    //     }
    //
    //     // remember current page location to use in the next move
    //     setLastScrollY(window.scrollY); 
    //   }
    // };
    //   
    // useEffect(() => {
    //   if (typeof window !== 'undefined') {
    //     window.addEventListener('scroll', controlNavbar);
    //
    //     // cleanup function
    //     return () => {
    //       window.removeEventListener('scroll', controlNavbar);
    //     };
    //   }
    // }, [lastScrollY]);

  return (
    <div className = {`Header-wrap`}> 
     {/* active ${show && 'hidden'}`}> */}
        <div id = "Header">
            <img src={logo} alt="CAA Logo" />
            <div>
                <div className = "links">
                    <Link to="/" className = "link">Become a Member</Link>
                    <hr/>
                    <Link to="/" id = "login-link" className = "link">Login</Link >
                    <button>Connect Wallet</button>
                </div>
            </div>
        </div>
        <div id = "Header2">
            <div>
                <Link to = "/" className = "link">Membership</Link>
                <Link to = "/rewards/Basic" className = "link">Rewards</Link>
                <Link to = "/profile" className = "link">Profile</Link>
            </div>
            <div className = "search-div">
                <Search/>

            </div>
        </div>
        <Outlet/>
    </div>
    
  )
}

export default Header