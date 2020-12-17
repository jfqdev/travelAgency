import React,{useState,useEffect} from 'react'
import Solicitados from './Solicitados/Solicitados'
import Ofertas from './Ofertas/Ofertas'
import Newsletter from './NewsLetter/NewsLetter'
import Institutional from './Institutional/Institutional'
const HOST = require("../../Host");

const Content = ()=>{
    //STATES
    const [ofertasData,setOfertasData] = useState([]);
    const [masSolicitados,setMasSolicitados]= useState([]);
    const [newsLetterData,setNewsLetterData]= useState([]);

    //-----GET DATA SOLICITADOS-----------
    
    const getSolicitadosData = async()=>{
        try{
            const res = await fetch(`http://${HOST}/api/packages/highlights`,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const jsonRes = await res.json();
            setMasSolicitados(jsonRes);

        }catch(err){

            console.log(err);

        }
    }

    if (!(masSolicitados.length % 2 === 0)){
        masSolicitados.pop()
        console.log(masSolicitados)
    
    }
    //-----GET DATA OFERTAS-------
    

    const getOfertasData = async()=>{
        try{
            const res = await fetch(`http://${HOST}/api/packages`,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const jsonRes = await res.json();
            setOfertasData(jsonRes);

        }catch(err){

            console.log(err);

        }
    }

    //--------GET NEWSLETTER DATA---------
    const getNewsletterData = async()=>{
        try{
            const res = await fetch(`http://${HOST}/api/newsletter`,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const jsonRes = await res.json();
            setNewsLetterData(jsonRes);

        }catch(err){

            console.log(err);

        }
    }


    useEffect(()=>{
        getOfertasData();
        getSolicitadosData();
        getNewsletterData();
    },[])

    
        

    return (
        <>
        <div className="contenedor">
            <div className="col">
                <div className="row justify-content-center">
                    <Solicitados masSolicitados={masSolicitados}/>
                </div>
                <div className="row justify-content-center">
                    <Ofertas ofertasData={ofertasData}/>
                </div>
            </div>
        
        </div>
        <Newsletter newsLetterData = {newsLetterData}/>
        <div className= "contenedor">
            <Institutional/>
        </div>
        </>                   

    )
}


export default Content


