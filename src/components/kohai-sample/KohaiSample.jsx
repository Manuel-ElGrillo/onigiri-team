import React from 'react'
import { Link } from 'react-router-dom';
import OnigiriIcon from "../../assets/img/onigiri.png";
import MisoIcon from "../../assets/img/miso.png";
import AddIcon from "../../assets/img/white-plus-sign.png";
import "../kohai-sample/KohaiSample.css";

const KohaiSample = () => {
  return (
    <>

      <div className='d-flex flex-column mx-5'>

        <div className='d-flex align-items-center'>

          <div className='kohai-onigiri-icons'>
            <img src={OnigiriIcon}
              alt="onigiri"
              className='kohai-onigiri-icon1' />
            <img src={OnigiriIcon}
              alt="onigiri"
              className='kohai-onigiri-icon2' />
          </div>

          <div className='kohai-sample-price text-end'>
            <h3>Combo</h3>
            <p>Kohai</p>
            <span>10$</span>
          </div>

        </div>

        <div className='d-flex kohai-sample-description-container'>

          <div className='kohai-add-btn'>
            <img src={AddIcon} alt="Add button" />
          </div>

          <div className='kohai-sample-description d-flex align-items-end'>
            <img src={MisoIcon} alt="Miso soup" />
            <Link to={"/combo-kohai"}
                  className="kohai-link">
              2 Onigiris + Sopa Miso
            </Link>
          </div>

        </div>

      </div>

    </>
  )
}

export default KohaiSample