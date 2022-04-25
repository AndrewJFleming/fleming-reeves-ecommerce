import React from "react";
import {Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home/Home";
import {SingleProduct} from "./pages/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route element={<Home/>} path="/">

       </Route>
       <Route element={<SingleProduct/>} path="/products/:productId"/>
     </Routes>
    </div>
  );
}

export default App;
