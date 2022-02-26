import React from 'react'
import { Link } from 'react-router-dom'
import "../../components/senpai-sample/SenpaiSample.css";
import OnigiriIcon from "../../assets/img/onigiri.png";
import MisoIcon from "../../assets/img/miso.png";
import AddIcon from "../../assets/img/white-plus-sign.png";

const SenpaiSample = () => {
  return (
    <>

      <div className="container">

        <div className="senpai-sample-container row my-5">

          <div className="senpai-sample-icons-price">

            <div className='senpai-sample-title'>
              <h3>Combo</h3><br />
              <p>Senpai</p>
              <span>15$</span>
            </div>

            <div className='senpai-sample-onigiri-icons'>
              <img src={OnigiriIcon} alt="onigiri" className='onigiri-1' />
              <img src={OnigiriIcon} alt="onigiri" className='onigiri-2' />
              <img src={OnigiriIcon} alt="onigiri" className='onigiri-3' />
            </div>

          </div>

          <div className='senpai-sample-description'>

            <Link to={"/combo-senpai"}>
              <p>3 Onigiris + Sopa Miso</p>
            </Link>
            <img src={MisoIcon} alt="Miso Soup" className='senpai-miso-icon' />
            <Link to={"/combo-senpai"}>
              <img src={AddIcon} alt="Add button" className='senpai-add-icon' />
            </Link>

          </div>

        </div>

      </div>
    
    </>
  )
}

export default SenpaiSample