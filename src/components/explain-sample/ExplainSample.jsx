import React from 'react'
import "../../components/explain-sample/ExplainSample.css";
import OnigiriIcon from "../../assets/img/onigiri.png";
import OnigiriImg from "../../assets/img/onigiri-2.png";

const ExplainSample = () => {
  return (
    <>
    
      <div className="container my-5">

        <div className='explain-sample-container'>

          <div className='explain-sample-title'>
            <h2>¡Arma tu combo a tu gusto!</h2>
            <p className='mt-1'>Puedes escoger entre:</p>
          </div>

          <div className='explain-sample-inner-box d-flex'>

            <div>
              <div className='topping d-flex align-items-center'>
                <img src={OnigiriIcon} alt="onigiri" />
                <div className='flex-column px-4'>
                  <p>Relleno <span className='topping-plus'>+</span> <span>Topping</span></p>
                  <span>1 ó 2 sabores</span>
                </div>
              </div>

              <div className='rice-mix d-flex my-5 align-items-center'>
                <img src={OnigiriIcon} alt="onigiri" />
                <div className='flex-column px-4'>
                  <p>Rice Mix</p>
                  <span>Recetas Originales de Onigiri Team</span>
                </div>
              </div>
            </div>

            <div>
              <img src={OnigiriImg} alt="onigiri" className='explain-onigiri' />
            </div>
            
          </div>

        </div>

      </div>
    
    </>
  )
}

export default ExplainSample