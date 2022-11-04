import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  // setClick is the name of the function 
  // click is the true and false value, showing if it clicked
  const [click , setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMeun = () => setClick(false);
  
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to = "/" className = "navbar-logo">
                    Lost and Found <i class="fa-regular fa-envelope"></i>
                </Link>
                <div className='meun-icon' onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                
                {/* activate the meun bar when it is clicked */}
                <ul className={click ? 'nav-meun active' : 'nav-meun'}>

                  <li className='nav-item'>
                    <Link to = "/" className = 'nav-link' onClick = {closeMobileMeun}>
                      Home
                    </Link>
                  </li> 

                  <li className='nav-item'>
                    <Link to = "/services" className = 'nav-link' onClick = {closeMobileMeun}>
                      Services
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to = "/products" className = 'nav-link' onClick = {closeMobileMeun}>
                      Products
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to = "/sign-up" className = 'nav-link' onClick = {closeMobileMeun}>
                      Sign up
                    </Link>
                  </li>


                </ul>

              
            </div>
        </nav>
    </>
  )
}

export default Navbar