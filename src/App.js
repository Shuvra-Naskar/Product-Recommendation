import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/FooterX';

function App() {
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
