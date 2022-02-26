import React, { useEffect } from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SenpaiForm from "../../components/senpai-form/SenpaiForm";
import "../../components/senpai-form/SenpaiForm.css";

const PedidoSenpai = ({title, setTitle}) => {

  useEffect( ()=>{
    setTitle("Pedidos");
  }, []);

  return (
    <>
    
    <Header title={title}/>

    <SenpaiForm />

    <Footer/>
    
    </>
  )
}

export default PedidoSenpai