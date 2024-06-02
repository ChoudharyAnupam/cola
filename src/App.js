// import logo from './logo.svg';
import './App.css';

// import { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LoginComponent from './login/LoginComponent';
import HeaderComponent from './header/HeaderComponent';
import HomeComponent from './home/HomeComponent';
import KeyConsiderationComponents from './key-considerations/KeyConsiderationsComponent';
import PreviewComponent from './preview/PreviewComponent';

function App() {
  // const logo = require('../images/coke_hd.png');

  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginComponent/>}>
          </Route>
          <Route path='/home' element={<HomeComponent/>} />
          <Route path='/key-consideration' element={<KeyConsiderationComponents/>} />
          <Route path='/preview' element={<PreviewComponent/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
