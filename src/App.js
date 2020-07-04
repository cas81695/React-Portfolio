import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import Header from './components/Header/Navbar';
import Footer from './components/Footer/Footer'

import Home from './pages/Home/index';
import About from './pages/About/index';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index';

import './App.css';

function App() {
  return (
    <div>
    <HashRouter>
        <Header />
          <Route exact path="/" component={Home} />
         
          <Route exact path="/about" component={About} />
         
          <Route exact path="/portfolio" component={Portfolio} />
         
          <Route exact path="/contact" component={Contact} />
          
        <Footer/>
   </HashRouter>
      </div>
  );
}

export default App;