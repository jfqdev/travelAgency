import React, { useState, useEffect } from "react";
import OfertasItem from "./OfertasItem";
import Pagination from "./Pagination";

const Ofertas = ({ ofertasData }) => {
  const [ofertasPerPage, setOfertasPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  //Get current ofertas
  const indexOfLastOferta = currentPage * ofertasPerPage;
  const indexOfFirstOferta = indexOfLastOferta - ofertasPerPage;
  const currentOfertas = ofertasData.slice(
    indexOfFirstOferta,
    indexOfLastOferta
  );

  //Creo las cards (ofertaItems) correspondientes a las current ofertas.
  const ofertasItems = currentOfertas.map((oferta, index) => {
    let { imageid, destination, price, description } = oferta;

    return (
      <OfertasItem
        key={index}
        index={index}
        imageid={imageid}
        destination={destination}
        price={price}
        description={description}
      />
    );
  });

  //Helper para cambiar de pagina, triggeado desde pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <a id="seccionOfertas"></a>
      <div class="mytextdivider col-md-12 pb-3">
        <div class="mytexttitledivider">
          <h3 className="text-content-subtitulos fontMont-light">Items</h3>
        </div>
        <div class="divider"></div>
      </div>
      <div class="spinner-grow d-none" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      {ofertasItems}
      <div class="col-md-12 mb-3">
        <Pagination
          ofertasPerPage={ofertasPerPage}
          totalOfertas={ofertasData.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Ofertas;
