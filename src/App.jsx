import './App.css'

import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const Test = lazy(() => import("./pages/Test"));
  // const Home = lazy(() => import("./pages/Home"));
  // const ProductPreview = lazy(() => import("./pages/ProductPreview"));

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Test />} />
          {/* <Route exact path="/" element={<Home/>} /> */}
          {/* <Route exact path="/products/preview/:preview" element={<ProductPreview/>} /> */}
        </Routes>
      </Suspense>
    </>
  )
}

export default App
