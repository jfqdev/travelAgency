import React from 'react';

const Pagination = ({ofertasPerPage,totalOfertas,paginate,currentPage})=> {

    let pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalOfertas/ofertasPerPage); i++)
    pageNumbers.push(i);

    //Seteo Flechas de proxima pagina y pagina anterior activas o desactivas en funcion de la pagina actual
    let lastPage = pageNumbers.length === currentPage;    
    let nextPage,prevPage;
    if(lastPage){
        nextPage = "page-item disabled"
    }else{
        nextPage = "page-item"
    }
    if(currentPage === 1){
        prevPage = "page-item disabled"
    }else{
        prevPage = "page-item"
    }

    return(
        <nav className="">
            <ul className="pagination pagination-lg justify-content-center">
            <li class={prevPage}>
                <a class="page-link" onClick={()=>paginate(currentPage-1)}href="#seccionOfertas" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
                {pageNumbers.map( number=>{
                    return(
                        <li key= {number} className="page-item">
                            <a onClick={()=>paginate(number)} href="#seccionOfertas" className = "page-link">
                                {number}
                            </a>
                        </li>
                    )
                })}

            <li class={nextPage}>
                <a class="page-link" onClick={()=>paginate(currentPage+1)} href="#seccionOfertas" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
            </ul>

        </nav>
    )
}

export default Pagination


