import React, {useEffect} from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import KohaiForm from "../../components/kohai-form/KohaiForm";
import "../../components/kohai-form/KohaiForm.css";

const PedidoKohai = ({title, setTitle}) => {

  useEffect( ()=> {
    setTitle("Pedidos");
  }, []);

  return (
    <>
    
    <Header title={title}/>

    <KohaiForm />

    <Footer/>
    
    </>
  )
}

export default PedidoKohai