import React from 'react'
import img from "../../assets/img/onigiri.png";
import "../onigiri-list/OnigiriList.css";

const OnigiriList = ({onigiriFlavorList, onigiriRiceMixList}) => {

  return (
    <>
    
        <div className="container flavor-container">

        <div className='flavors-title'>
          <h2 className='text-center'>Sabores</h2>
          <p className='text-center text-white'>Relleno / Topping</p>
        </div> 

          {onigiriFlavorList.map( (onigiri) => {
              return(
                <div className='list-onigiri d-flex p-3 my-2 align-items-center'>
                    <img src={img} alt="onigiri" />
                    <div className='onigiri-list-flavors px-4'>
                      <h4>{onigiri.flavor}</h4>
                      <p>{onigiri.description}</p>
                    </div>
                </div>
              )
          })}

          <h2 className='text-center rice-mix-title'>Rice Mix</h2>

          {onigiriRiceMixList.map( (onigiri) => {
            return(
              <div className='list-rice-mix d-flex p-3 my-2'>
                <img src={img} alt="onigiri" />
                    <div className='rice-mix-flavors px-4'>
                      <h4>{onigiri.flavor}</h4>
                      <p>{onigiri.description}</p>
                    </div>
              </div>
            )
          })}

        </div>
    
    </>
  )
}

export default OnigiriList