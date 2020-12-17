import React, {useState} from 'react'
import CarruselItem from './CarruselItem';






const Carrusel = ({masSolicitados})=>{
    

    const carruselItemsnotFiltered = masSolicitados.map((item,index,array)=>{

        
        //Siempre tengo acceso al objeto siguiente del array
        let nextItem = array[index+1];
        let nextImage,nextTitle;

        
        //Extraigo las propiedades del item y del item que le sigue.
        let {imageid,destination} = item;
        if(nextItem){
            nextImage = nextItem.imageid;
            nextTitle = nextItem.destination;
        }
        
        //Trabajo solo sobre items pares ( incluyendo 0) ya que usare 2 objetos del array por cada return.
        //Ojo,Los valores que caigan fuera de la condicion haran un return undefined, se filtrara eso
        //por fuera de este .map
        if(  (index===0)  ||  (index % 2 === 0) ){
                //Devuelvo el Carrusel pasandole las propiedades del item y del item que le sigue
                return <CarruselItem key = {index} index={index} solicitadoImage={imageid} title={destination} nextTitle={nextTitle} nextImage={nextImage}/>
        }
        
   
    })
    
    //Me quedo los valores undefined
    const carruselItems = carruselItemsnotFiltered.filter((item)=> item !== undefined);


    return (

        <section class="pt-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">

                            {carruselItems}

                        </div>
                        <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                            <i class="fas fa-3x fa-chevron-circle-right"></i>
                        </a>
                        



                    </div>
                </div>


                
            </div>
        </div>
    </section>



    )
}


export default Carrusel

{/* <div class="col-6">
<h3 class="mb-3">Carousel cards title </h3>
</div>
<div class="col-6 text-right">
<a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
    <i class="fa fa-arrow-left"></i>
</a>
<a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
    <i class="fa fa-arrow-right"></i>
</a>

</div> */}