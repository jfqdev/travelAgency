//LIBRERIAS
import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom';
//STATICS
import logo from './logo.svg';
import './index.css';
//COMPONENTES
import Navbar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Carrusel from './components/Content/Solicitados/Carrusel'
//HOST CONFIG
const HOST = require("./Host");

  

function App() {
//STATES
const [sliderData,setSliderData]= useState([]);

//-------------PEGADAS A SERVIDOR---------------------------

const getSliderData = async()=>{
  try{
      const res = await fetch(`http://${HOST}/api/slider`,{
          headers: {
              'Content-Type': 'application/json'
          }
      })

      const jsonRes = await res.json();
      setSliderData(jsonRes);

  }catch(err){

      console.log(err);

  }
}

useEffect(()=>{
  getSliderData();
},[])



  return (
    <>
      <Navbar />
      <Header sliderData = {sliderData} />
      <Content/>      
      <Footer />
    </>



  );
}

export default App;
