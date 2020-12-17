import React, { useState } from "react";
import Carrusel from "./Carrusel";

const Solicitados = ({ masSolicitados }) => {
  return (
    <>
      <a id="seccionSolicitados"></a>
      <div class="col-md-12 p-3"></div>
      <div class="mytextdivider col-md-12" id="highlightSection">
        <div class="mytexttitledivider">
          <h3 className="text-content-subtitulos fontMont-light">
            Highlights{" "}
          </h3>
        </div>
        <div class="divider"></div>
      </div>
      <Carrusel masSolicitados={masSolicitados} />
    </>
  );
};

export default Solicitados;
