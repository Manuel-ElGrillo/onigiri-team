import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Combos from "../src/pages/combos/Combos";
import ComboKohai from "../src/pages/combo-kohai/ComboKohai";
import ComboSempai from "../src/pages/combo-senpai/ComboSempai";
import PedidoKohai from "../src/pages/pedido-kohai/PedidoKohai";
import PedidoSenpai from "./pages/pedido-senpai/PedidoSenpai";
import NoFound from "../src/pages/no-found/NoFound";


function App() {

  const [title, setTitle] = useState("");
  const [onigiriFlavorList, setOnigiriFlavorList] = useState([]);
  const [onigiriRiceMixList, setOnigiriRiceMixList] = useState([]);

  return (
    <>

      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Combos title={title}
                                           setTitle={setTitle}/>}/>

          <Route path="/combo-kohai" element={<ComboKohai title={title}
                                                          setTitle={setTitle}
                                                          onigiriFlavorList={onigiriFlavorList}
                                                          setOnigiriFlavorList={setOnigiriFlavorList}
                                                          onigiriRiceMixList={onigiriRiceMixList}
                                                          setOnigiriRiceMixList={setOnigiriRiceMixList}/>}/>

          <Route path="/combo-senpai" element={<ComboSempai title={title}
                                                            setTitle={setTitle}
                                                            onigiriFlavorList={onigiriFlavorList}
                                                            setOnigiriFlavorList={setOnigiriFlavorList}
                                                            onigiriRiceMixList={onigiriRiceMixList}
                                                            setOnigiriRiceMixList={setOnigiriRiceMixList}/>}/>

          <Route path="/combo-kohai/pedido" element={<PedidoKohai title={title}
                                                                  setTitle={setTitle}/>}/>

          <Route path="/combo-senpai/pedido" element={<PedidoSenpai title={title}
                                                                  setTitle={setTitle}/>}/>

          <Route path="*" element={<NoFound title={title}
                                            setTitle={setTitle}/>}/>

        </Routes>
      
      </BrowserRouter>
      
    </>
  );
}

export default App;
