import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  // setClick is the name of the function 
  // click is the true and false value, showing if it clicked
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect( () => {
    showButton();
  }, []);

  // whenever the user resize the screen, we show the button
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            I am handsome
            <i className="fab fa-typo3" />
          </Link>

          <div className='meun-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/* activate the meun bar when it is clicked */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                377
              </Link>
            </li>

            <li className='nav-item'>
              <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                611
              </Link>
            </li>

            <li className='nav-item'>
              <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                326
              </Link>
            </li>

            <li className='nav-item'>
              <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                453
              </Link>
            </li>

          </ul>

          {button && <Button buttonStyle='btn-outline'> SIGN UP
          </Button>}

        </div>
      </nav>
    </>
  );
}

export default Navbar