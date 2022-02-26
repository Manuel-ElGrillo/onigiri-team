import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import OnigiriList from '../../components/onigiri-list/OnigiriList';
import OnigiriData from "../../data/onigiri-list.json";
import "../combo-kohai/ComboKohai.css";

const ComboKohai = ({title, setTitle, onigiriFlavorList, setOnigiriFlavorList, onigiriRiceMixList, setOnigiriRiceMixList}) => {

  useEffect( ()=> {
    setTitle("Kohai");
    setOnigiriFlavorList(OnigiriData.onigiriList);
    setOnigiriRiceMixList(OnigiriData.riceMix);
  }, []);
  

  return (
    <>
    
      <Header title={title}/>

      <OnigiriList onigiriFlavorList={onigiriFlavorList}
                   onigiriRiceMixList={onigiriRiceMixList}/>

      <Link to={"/combo-kohai/pedido"}
            className="delivery-btn">
        ¡Haz tu pedido!
      </Link>

      <Footer />
    
    </>
  )
}

export default ComboKohai