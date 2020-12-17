import React, {useState,useEffect} from 'react'
import Slide from './Slide';
import SlideIndicator from './SlideIndicator';


const Header = ({sliderData})=>{

    

//slideIndicator contendra <li> necesarios para la construccion del carousel que depende de la cantidad de slides.

const slidesIndicators = sliderData.map((slide,i)=> {
    
    return <SlideIndicator key ={i} index={i} />


}); 

console.log(slidesIndicators);

//slides contiene los <div classname="carousel-item" que depende de la cantidad de slides totales extraidas de sliderData.
const slides = sliderData.map((slide,i)=> {
    
    let {imageid,title,description} = slide;
    
    return <Slide key ={i} sliderImage={imageid} title={title} description={description} index={i}  />

});

    return (
    
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                {slidesIndicators}
                
            </ol>
            <div class="carousel-inner" role="listbox">
                {slides}
            </div>

            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>     
    
        

    )
}


export default Header





//http://vps-1831098-x.dattaweb.com:3001/images/image15.jpeg