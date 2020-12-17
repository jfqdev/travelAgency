import React from "react";
import RESOURCES_HOST from "../../../ResourcesHost";

const Institutional = () => {
  return (
    <div>
      <a id="seccionInstitucional"></a>
      <div class="row text-center justify-content-center mt-4">
        <div class="col-lg-3 mb-5 mb-lg-0">
          <img
            class="img-fluid"
            src={`http://${RESOURCES_HOST}/icons/instit/logo_instit1.png`}
            style={{ width: "35px" }}
          />
          <p class="institutional-title mb-1">
            Comercialización de servicios Turísticos
          </p>
          <p class="institutional-body">
            Nos dedicamos a la comercializacín de mayorista de Servicios
            Turísticos específicamente vinculados a los deportes desde Uruguay y
            para el mundo.
          </p>
        </div>

        <div class="col-lg-3 mb-5 mb-lg-0 ">
          <img
            class="img-fluid"
            src={`http://${RESOURCES_HOST}/icons/instit/logo_instit2.png`}
            style={{ width: "35px" }}
          />
          <p class="institutional-title mb-1">Alto grado de especialización</p>
          <p class="institutional-body">
            Promovemos un alto grado de especialización lo cual nos permite
            brindar un servicio de excelencia potenciando una de nuestras
            ventajas comparativas al ser una de las Agencias de Viajes con mayor
            cantidad de sucursales operativas en el país.
          </p>
        </div>

        <div class="col-lg-3 mb-5 mb-lg-0 ">
          <img
            class="img-fluid"
            src={`http://${RESOURCES_HOST}/icons/instit/logo_instit3.png`}
            style={{ width: "35px", objectFit: "scale-down" }}
          />
          <p class="institutional-title mb-1">Vivimos y respiramos deportes</p>
          <p class="institutional-body">
            Vivimos y respiramos deportes todos los días del año, durante casi
            una década y eso nos permite tener conocimiento pleno de lo que
            hacemos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Institutional;
