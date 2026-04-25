import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Success } from "./Success.jsx";
import { Fail } from "./Fail.jsx";
import { Home } from "./Home.jsx";


createRoot(document.getElementById("root")).render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<App />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/fail' element={<Fail />}></Route>
      </Routes>
    </BrowserRouter>
  </div>

);