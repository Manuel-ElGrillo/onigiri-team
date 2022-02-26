import React, { useEffect } from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const NoFound = ({title, setTitle}) => {

  useEffect ( () => {
    setTitle("Error 404");
  }, []);

  return (
    <>

      <Header title={title}/>
    
      <h2 className='text-white'>Página no encontrada, lol ._.</h2>

      <Footer />
    
    </>
  )
}

export default NoFound