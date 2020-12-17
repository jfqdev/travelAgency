import React from 'react'

const SlideIndicator = ({index})=> {

if(index === 0){
    
    return (
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    )

}else{

    return (
        <li data-target="#carouselExampleIndicators" data-slide-to={index}></li>
    )
}


}

export default SlideIndicator;