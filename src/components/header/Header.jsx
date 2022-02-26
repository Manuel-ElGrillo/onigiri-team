import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/img/onigori.svg";
import "../header/Header.css";

const Header = ({title}) => {

  return (
    <>
        
        <header className='header row'>

            <h1 className="text-end py-2 px-5 text-uppercase">{title}</h1>

        <Link to={"/"}>
          <img src={logo}
            alt="logo"
            className='logo' />
        </Link>

        </header>
    
    </>
  )
}

export default Header