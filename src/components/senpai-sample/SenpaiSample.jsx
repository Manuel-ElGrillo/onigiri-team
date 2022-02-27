import React from 'react'
import { Link } from 'react-router-dom'
import "../../components/senpai-sample/SenpaiSample.css";
import OnigiriIcon from "../../assets/img/onigiri.png";
import MisoIcon from "../../assets/img/miso.png";
import AddIcon from "../../assets/img/white-plus-sign.png";

const SenpaiSample = () => {
  return (
    <>

      <div className='d-flex flex-column mx-5 senpai-container'>

        <div className='d-flex align-items-center'>

          <div className='senpai-onigiri-icons'>
            <img src={OnigiriIcon}
              alt="onigiri"
              className='senpai-onigiri-icon1' />
            <img src={OnigiriIcon}
              alt="onigiri"
              className='senpai-onigiri-icon2' />
            <img src={OnigiriIcon}
              alt="onigiri"
              className='senpai-onigiri-icon3' />
          </div>

          <div className='senpai-sample-price text-end'>
            <h3>Combo</h3>
            <p>Senpai</p>
            <span>15$</span>
          </div>

        </div>

        <div className='d-flex senpai-sample-description-container'>

          <div className='senpai-add-btn'>
            <img src={AddIcon} alt="Add button" />
          </div>

          <div className='senpai-sample-description d-flex align-items-end'>
            <img src={MisoIcon} alt="Miso soup" />
            <Link to={"/combo-senpai"}
              className="senpai-link">
              3 Onigiris + Sopa Miso
            </Link>
          </div>

        </div>

      </div>

    </>
  )
}

export default SenpaiSample