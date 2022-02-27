import React, { useEffect } from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import KohaiSample from "../../components/kohai-sample/KohaiSample";
import SenpaiSample from "../../components/senpai-sample/SenpaiSample";
import ExplainSample from "../../components/explain-sample/ExplainSample";
import "../combos/Combos.css";

const Combos = ({title, setTitle}) => {

  useEffect( () => {
    setTitle("Combos");
  }, [])
  

  return (
    <>
    
      <Header title={title}/>

      <div className='d-flex container main-container'>

        <KohaiSample />

        <SenpaiSample />

      </div>     

      <ExplainSample />

      <Footer />
    
    </>
  )
}

export default Combos