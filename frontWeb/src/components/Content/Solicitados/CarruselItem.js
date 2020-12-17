import React from "react";
import ModalSolicitados from "./ModalSolicitados";

const CarruselItem = ({
  index,
  solicitadoImage,
  title,
  nextImage,
  nextTitle,
}) => {
  const splitTitle = title.split(",");
  const splitNextTitle = nextTitle.split(",");

  if (index === 0) {
    //Primeros dos slides
    return (
      <div class="carousel-item active">
        <div class="row justify-content-around">
          <div class="col-md-6 col-lg-5 portfolio-item">
            <div class="card" style={{ border: 0 }}>
              <img
                class="img-fluid card-clase-img shadow"
                alt="100%x280"
                src={solicitadoImage}
              />
              <div className="card-info-position">
                <h4 class="card-title fontMont-semi-bold" id="cardDestinantion">
                  {`${splitTitle[0]}, ${splitTitle[1]}`}
                </h4>
                <button
                  class="btn center infoButton infoButton-oferta "
                  data-toggle="modal"
                  data-target={`#SolicitadosModal${index}`}
                >
                  + INFO
                </button>
                <ModalSolicitados
                  index={index}
                  imageid={solicitadoImage}
                  destination={title}
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 portfolio-item">
            <div class="card" style={{ border: 0 }}>
              <img
                class="img-fluid card-clase-img shadow"
                alt="100%x280"
                src={nextImage}
              />
              <div className="card-info-position">
                <h4 class="card-title fontMont-semi-bold" id="cardDestinantion">
                  {`${splitNextTitle[0]}, ${splitNextTitle[1]}`}
                </h4>
                <button
                  class="btn center infoButton infoButton-oferta"
                  data-toggle="modal"
                  data-target={`#SolicitadosModal${index + 1}`}
                >
                  + INFO
                </button>
                <ModalSolicitados
                  index={index + 1}
                  imageid={nextImage}
                  destination={nextTitle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    //Ultimo elemento suelto
  } else if (!nextImage) {
    return (
      <div class="carousel-item">
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-5">
            <div class="card" style={{ border: 0 }}>
              <img
                class="img-fluid card-clase-img shadow"
                alt="100%x280"
                src={solicitadoImage}
              />
              <div className="card-info-position">
                <h4 class="card-title fontMont-semi-bold" id="cardDestinantion">
                  {`${splitTitle[0]}, ${splitTitle[1]}`}
                </h4>
                <a href="#" class="btn center infoButton infoButton-oferta">
                  + INFO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    //Pares de slides subsiguientes.
    return (
      <div class="carousel-item">
        <div class="row justify-content-around">
          <div class="col-md-6 col-lg-5 portfolio-item">
            <div class="card" style={{ border: 0 }}>
              <img
                class="img-fluid card-clase-img shadow"
                alt="100%x280"
                src={solicitadoImage}
              />
              <div className="card-info-position">
                <h4 class="card-title fontMont-semi-bold" id="cardDestinantion">
                  {`${splitTitle[0]}, ${splitTitle[1]}`}
                </h4>
                <button
                  class="btn center infoButton infoButton-oferta "
                  data-toggle="modal"
                  data-target={`#SolicitadosModal${index}`}
                >
                  + INFO
                </button>
                <ModalSolicitados
                  index={index}
                  imageid={solicitadoImage}
                  destination={title}
                />
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-5 portfolio-item">
            <div class="card" style={{ border: 0 }}>
              <img
                class="img-fluid card-clase-img shadow"
                alt="100%x280"
                src={nextImage}
              />
              <div className="card-info-position">
                <h4 class="card-title fontMont-semi-bold" id="cardDestinantion">
                  {`${splitNextTitle[0]}, ${splitNextTitle[1]}`}
                </h4>
                <button
                  class="btn center infoButton infoButton-oferta "
                  data-toggle="modal"
                  data-target={`#SolicitadosModal${index + 1}`}
                >
                  + INFO
                </button>
                <ModalSolicitados
                  index={index + 1}
                  imageid={solicitadoImage}
                  destination={title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CarruselItem;
