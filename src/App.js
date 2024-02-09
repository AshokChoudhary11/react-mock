import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import TextArea from "./components/TextArea";
import Products from "./components/Products";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/textArea" element={<TextArea />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
