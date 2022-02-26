import React from 'react'
import { Link } from 'react-router-dom';
import OnigiriIcon from "../../assets/img/onigiri.png";
import MisoIcon from "../../assets/img/miso.png";
import AddIcon from "../../assets/img/white-plus-sign.png";
import "../kohai-sample/KohaiSample.css";

const KohaiSample = () => {
  return (
    <>

      <div className="container">

        <div className='kohai-sample-container row my-5'>

          <div className='kohai-sample-icons-price'>

            <div className='kohai-sample-title d-flex flex-column p-3 my-5 align-items-end'>
              <h3>Combo</h3><br />
              <p>Kohai</p>
              <span>10$</span>
            </div>

            <div className='kohai-sample-onigiri-icons'>
              <img src={OnigiriIcon} alt="onigiri" className='onigiri-icon-1' />
              <img src={OnigiriIcon} alt="onigiri" className='onigiri-icon-2' />
            </div>

          </div>

          <div className='kohai-sample-description'>
            <img src={MisoIcon} alt="miso soup" className='miso-icon' />
            <Link to={"/combo-kohai"}>
              <p>2 Onigiris + Sopa Miso</p>
            </Link>
            <Link to={"/combo-kohai"}>
              <img src={AddIcon} alt="add icon" className='add-icon' />
            </Link>
          </div>

        </div>

      </div>
    
    </>
  )
}

export default KohaiSample