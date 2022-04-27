import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { TopNav } from "./components/TopNav";

function App() {
  const [user, setUser] = useState(true);

  return (
    <div className="App">
      <TopNav user={user} />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<SingleProduct />} path="/products/:productId" />
      </Routes>
    </div>
  );
}

export default App;
