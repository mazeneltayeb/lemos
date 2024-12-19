
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import "./nav.css"
import logoimg from "./img/398111342_677269547839034_2265390937036909134_n-removebg-preview.png"
import { useState,useEffect } from "react";

function NavBar() {
  const [showNavbar, setShowNavbar]=useState(false)
  const handleShowNavbar=()=>{
   setShowNavbar(!showNavbar)
  }
  const [navbarColor, setNavbarColor] = useState('transparent'); // اللون الافتراضي

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // موضع التمرير الرأسي
    if (scrollPosition > 50) {
      setNavbarColor('black'); // لون الـ Navbar بعد التمرير
    } else {
      setNavbarColor('transparent'); // اللون الافتراضي
    }
  };

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  }
    
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // إضافة مستمع التمرير
    return () => {
      window.removeEventListener('scroll', handleScroll); // تنظيف المستمع عند إزالة المكون
    };
  }, []);

  return (
       
        <div className={`nav  d-flex px-4 sticky-top justify-content-center align-items-center ${showNavbar && "active"}`}
        style={{
          transition: 'background-color 0.5s ease',
          backgroundColor: navbarColor,
        }}

        >
          <div className="logo text-white">
        <img src={logoimg} alt="Error"/>
          </div>
            <ul className={` list-unstyled d-flex ms-auto my-auto ${showNavbar && "active"}`}>
            <li onClick={ScrollToTop}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={ScrollToTop}>
              <Link to="/mune">Menu</Link>
              </li>
             
            </ul>
            <div className="nav-bar-icon">
          <div className={`open-bar ${showNavbar && "active"}`} onClick={handleShowNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
        </div>
  );
}

export default NavBar;