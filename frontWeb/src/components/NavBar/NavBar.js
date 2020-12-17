import React, { useState } from "react";
const RESOURCES_HOST = require("../../ResourcesHost");

const NavBar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg  navbar-dark fixed-top"
        style={{ height: "10px", backgroundColor: "#04197c" }}
      ></nav>
      <nav class="navbar navbar-expand-lg  mt-2 shadow custom-navbar fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="">
            <img
              class="img-fluid"
              src={`http://${RESOURCES_HOST}/icons/instit/logo.png `}
              style={{ width: "150px" }}
            />
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <i
                class="fas fa-bars"
                style={{ color: "indigo", fontSize: "28px" }}
              ></i>
            </span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarResponsive"
          >
            <ul class="navbar-nav justify-content-center">
              <li class="nav-item pl-lg-5 pr-lg-5 text-center">
                <a
                  class="nav-link custom-navbar-item-color"
                  href="#seccionSolicitados"
                >
                  HIGHLIGHTS
                </a>
              </li>
              <li class="nav-item pl-lg-5 pr-lg-5 text-center">
                <a
                  class="nav-link custom-navbar-item-color"
                  href="#seccionOfertas"
                >
                  ITEMS
                </a>
              </li>
              <li class="nav-item pl-lg-5 pr-lg-5 text-center">
                <a
                  class="nav-link custom-navbar-item-color mt-2.5"
                  href="#seccionInstitucional"
                >
                  INSTITUTIONAL
                </a>
              </li>
              <li class="nav-item pl-lg-5 pr-lg-5 text-center">
                <a
                  class="nav-link custom-navbar-item-color"
                  href="#seccionContacto"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
