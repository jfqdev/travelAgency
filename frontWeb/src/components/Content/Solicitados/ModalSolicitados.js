import React from "react";
import { useForm } from "react-hook-form";
const HOST = require("../../../Host");

const ModalSolicitados = ({
  imageid,
  destination,
  price,
  description,
  index,
}) => {
  //---------------->Handle Form Request logic <------------------------

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
          destination: destination,
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
  //---------------->End of Handling Form Request logic <------------------------

  return (
    <div
      class="modal fade"
      id={`SolicitadosModal${index}`}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="container " style={{ borderRadius: "0px 30px 30px 30px" }}>
          <div class="row">
            <img
              class="img-fluid"
              id="cardImage"
              style={{ borderRadius: "0px 30px 0px 0px" }}
              src={imageid}
              alt=""
            />
          </div>
          <div class="row">
            <div
              class="modal-content"
              style={{ borderRadius: "0px 0px 30px 30px" }}
            >
              <div class="modal-header">
                <h5
                  class="modal-title"
                  id="exampleModalLabel"
                  style={{ color: "black" }}
                >
                  {destination}
                </h5>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <form onSubmit={handleSubmit(onSubmitContact)}>
                    <div class="form-group row">
                      <input
                        type="text"
                        ref={register({ required: true })}
                        class="form-control"
                        lass="form-control"
                        placeholder="Name"
                        id="recipient-name"
                        name="name"
                      />
                      <p style={{ color: "red", marginLeft: "5px" }}>
                        {errors.name && "Required field"}
                      </p>
                    </div>
                    <div class="form-group row">
                      <input
                        type="text"
                        ref={register({ required: true })}
                        class="form-control"
                        placeholder="Email"
                        id="recipient-name"
                        name="email"
                      />
                      <p style={{ color: "red", marginLeft: "5px" }}>
                        {errors.email && "Required field"}
                      </p>
                    </div>
                    <div class="form-group row">
                      <textarea
                        class="form-control"
                        ref={register({ required: true })}
                        placeholder="Message"
                        id="message-text"
                        name="msg"
                      ></textarea>
                      <p style={{ color: "red", marginLeft: "5px" }}>
                        {errors.msg && "Required field"}
                      </p>
                    </div>
                    <div class="modal-footer justify-content-between">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button class="btn chat-button ">
                        Send <i class="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSolicitados;
