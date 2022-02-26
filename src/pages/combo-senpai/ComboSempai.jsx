import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OnigiriList from '../../components/onigiri-list/OnigiriList';
import OnigiriData from "../../data/onigiri-list.json";


const ComboSempai = ({title, setTitle, onigiriFlavorList, setOnigiriFlavorList, onigiriRiceMixList, setOnigiriRiceMixList}) => {

  useEffect( ()=> {
    setTitle("Senpai");
    setOnigiriFlavorList(OnigiriData.onigiriList);
    setOnigiriRiceMixList(OnigiriData.riceMix);
  }, []);
  

  return (
    <>

      <Header title={title}/>

      <OnigiriList onigiriFlavorList={onigiriFlavorList}
                   onigiriRiceMixList={onigiriRiceMixList}/>

      <Link to={"/combo-senpai/pedido"}
            className="delivery-btn">
        ¡Haz tu pedido!
      </Link>

      <Footer />
      
    </>
  )
}

export default ComboSempai