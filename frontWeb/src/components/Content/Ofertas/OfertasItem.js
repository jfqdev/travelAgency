import React from "react";
import ModalOferta from "./ModalOferta";

const OfertasItem = ({ imageid, destination, price, description, index }) => {
  return (
    //xl lg md sm col
    <>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 portfolio-item">
        <div class="card h-100 card-oferta shadow" id="package_1">
          <a href="#">
            <img
              class="card-img-top card-image"
              id="cardImage"
              src={imageid}
              alt=""
            />
          </a>
          <div class="card-body p-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-2">
                <h4
                  class="card-title card-oferta-text-title fontMont-semi-bold"
                  id="cardDestinantion"
                >
                  {destination}
                </h4>
              </li>

              <li class="list-group-item p-2">
                <p
                  class="card-text card-oferta-text-info "
                  id="cardDescription"
                >
                  {description}
                </p>
              </li>
              <li class="list-group-item p-2">
                <h2 class="card-text card-oferta-text-info " id="cardPrice">
                  ${price}
                </h2>
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <button
              type="button"
              class="btn infoButton-oferta"
              data-toggle="modal"
              data-target={`#OfertaModal${index}`}
              data-whatever="@mdo"
            >
              + INFO
            </button>
            <ModalOferta
              index={index}
              imageid={imageid}
              destination={destination}
              price={price}
              description={description}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfertasItem;
