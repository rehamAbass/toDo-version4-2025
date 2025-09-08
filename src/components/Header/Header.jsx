
import './Header.css'
import React from 'react'

const Header = () => {

    return (
        <header
            className="headerMarq"
        >
            <marquee direction='left' loop='2'>  Developed by
                <a
                    href="https://www.linkedin.com/in/rehamAbass/"
                    target='_blank'
                >💪  Dev. Reham Abass  </a>
                &copy; 2022
            </marquee>
        </header>
    )
}


export default Header;

