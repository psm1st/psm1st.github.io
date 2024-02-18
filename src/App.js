import React from "react";
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./component/Navigation";
import Detail from "./routes/Detail";

function App(){
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Navigation/>
      <Routes>
      <Route path="/" exact={true}element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/movie-detail" element={<Detail />} />
      </Routes>
    </HashRouter> //HashRouter에 Route를 넣고 Route가 About컴포넌트를 불러옴
  );
}

export default App;
