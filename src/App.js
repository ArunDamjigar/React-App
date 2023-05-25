import './App.css'
import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Slider from '../src/layout/Slider/slider';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Mac from './Components/Products/Mac';
import Dell from './Components/Products/Dell';
import Hybrid from './Components/Services/Hybrid';
import Cloud from './Components/Services/Cloud';
import Web from './Components/Services/Web';
import { Routes, Route} from 'react-router-dom';
import PageNotFound from './layout/404';
import Blog from './Components/Blog';
import LifeCycleEx from './LifeCycleMethods';


function App(props) {
   let t="Hybrid App Development";
  return (
    <>
    <Header/>      
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="about-us" element={<About/>} />
           <Route path="products-list" element={<Products/>} />
              <Route path="mac" element={<Mac/>} />
              <Route path="dell/:delUID" element={<Dell/>} />
           <Route path="blog" element={<Blog/>} />
            
          
           <Route path="our-services" element={<Services/>} />
              <Route path="hybrid-app-development" element={<Hybrid title={t}/>} />
              <Route path="cloud-computing" element={<Cloud/>} />
              <Route path="web-app-development" element={<Web/>} />
              <Route/>
            
          <Route path='lifecycle-examples' element ={<LifeCycleEx/>}/>
           <Route path="contact-us" element={<Contact/>} />
           <Route path="*" element={<PageNotFound/>} />
        </Routes>
    <Slider/>
    <Footer/>
    </>
  );
}

export default App;
