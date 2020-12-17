import React, { useState } from "react";
import { useForm } from "react-hook-form";
const HOST = require("../../Host");
const RESOURCES_HOST = require("../../ResourcesHost");

const Footer = () => {
  //Use this on <form onsubmit={handleSubmit(ACTION)> || <input ref={register}} to handle form submiting
  const { register, handleSubmit, errors } = useForm();

  //When submit run this.
  const onSubmitContact = (data) => {
    postContact(data);
    console.log(data);
  };

  //Post request trigger when submit
  const postContact = async (data) => {
    const { name, email, msg } = data;

    try {
      const res = await fetch(`http://${HOST}/api/contact`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          msg: msg,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <a id="seccionContacto"></a>
      <div class="custFooter-div mt-3">
        <div class="container">
          <div class="row py-4 justify-content-center pb-0 text-center">
            <div class="col-lg-3 col-sm-6 col-12 mb-3">
              <div>
                <img
                  class="img-fluid mr-3"
                  src={`http://${RESOURCES_HOST}/icons/foot/logo_foot_phone.png`}
                  style={{ width: "25px", objectFit: "scale-down" }}
                />
                <p class="custFooter-p">0800-888-888-888</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12 mb-3">
              <div>
                <img
                  class="img-fluid mr-3"
                  src={`http://${RESOURCES_HOST}/icons/foot/logo_foot_mail.png`}
                  style={{ width: "25px", objectFit: "scale-down" }}
                />
                <p class="custFooter-p">info@sportravel.com</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12 mb-3">
              <div>
                <img
                  class="img-fluid mr-3"
                  src={`http://${RESOURCES_HOST}/icons/foot/logo_foot_mail.png`}
                  style={{ width: "25px", objectFit: "scale-down" }}
                />
                <div style={{ display: "inline-block" }}>
                  <p class="custFooter-p mr-2">Dirección</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12 mb-3">
              <div>
                <img
                  class="img-fluid mr-3 social-media-btn"
                  src={`http://${RESOURCES_HOST}/icons/foot/logo_foot_fbk.png`}
                  style={{ width: "25px", objectFit: "scale-down" }}
                />
                <img
                  class="img-fluid mr-3 social-media-btn"
                  src={`http://${RESOURCES_HOST}/icons/foot/logo_foot_insta.png`}
                  style={{ width: "25px", objectFit: "scale-down" }}
                />
                <img
                  class="img-fluid mr-3 social-media-btn"
                  src={`http://${RESOURCES_HOST}/icons/foot/logo_foot_twit.png`}
                  style={{ width: "25px", objectFit: "scale-down" }}
                />
              </div>
            </div>
          </div>
          <div class="row mr-0">
            <div class="col-lg-3 col-sm-12 col-12 mb-1 ">
              <p class="custSsubFooter">Política de privacidad</p>
            </div>
            <div class="col-lg-3 col-sm-12 col-12 mb-1 ">
              <p class="custSsubFooter">Términos y condiciones</p>
            </div>
            <div class="col-lg-3 col-sm-12 col-12 mb-1 ">
              <p class="custSsubFooter">Promociones vigentes</p>
            </div>
            <div class="col-lg-3 col-sm-12 col-12 mb-1">
              <p class="custSsubFooter">Defensa al consumidor</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <input type="checkbox" id="check" />
        <label class="chat-btn" for="check">
          {" "}
          <i class="fas fa-envelope"></i> <i class="fa fa-times close"></i>{" "}
        </label>
        <div class="wrapper">
          <div class="header">
            <p style={{ fontWeight: "bold", display: "inline" }}>CONSULTAS </p>
            <input type="checkbox" id="check" />
            <label style={{ cursor: "pointer" }} for="check">
              <i class="fas fa-caret-down fa-2x "></i>{" "}
            </label>
          </div>
          <form onSubmit={handleSubmit(onSubmitContact)} class="chat-form">
            <input
              type="text"
              ref={register({ required: true })}
              class="form-control"
              placeholder="Nombre"
              name="name"
            />
            <input
              type="text"
              ref={register({ required: true })}
              class="form-control"
              placeholder="Email"
              name="email"
            />
            <textarea
              class="form-control"
              ref={register({ required: true })}
              placeholder="Mensaje"
              name="msg"
            ></textarea>
            <p
              style={{ color: "white", marginBottom: "5px", marginLeft: "5px" }}
            >
              {(errors.name || errors.msg || errors.email) &&
                "Formulario Incompleto"}
            </p>
            <button class="btn chat-button">
              Enviar <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
