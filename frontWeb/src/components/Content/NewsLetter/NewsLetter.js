import React from "react";
import { useForm } from "react-hook-form";
const HOST = require("../../../Host");

const Newsletter = ({ newsLetterData }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmitSubscriber = (data) => {
    postSubscriber(data);
    console.log(data);
  };

  //Post operation request
  const postSubscriber = async (data) => {
    const { email } = data;

    try {
      const res = await fetch(`http://${HOST}/api/subscribers`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
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

  let title, description, imageid;
  if (newsLetterData.length !== 0) {
    title = newsLetterData[0].title;
    description = newsLetterData[0].description;
    imageid = newsLetterData[0].imageid;
    // AGREGAR LOGICA PARA CUANDO EXISTAN LOS VISIBLES E INVISIBLES OJO.
  }

  return (
    <div
      class="container-fluid"
      style={{ backgroundImage: `url(${imageid})`, backgroundSize: "cover" }}
    >
      <div class="row pt-3 pl-5">
        <h3 class="text-white fontMont-bold">{title}</h3>
      </div>
      <div class="row pt-1 pl-5">
        <h6 class="text-white fontMont-regular">{description}</h6>
      </div>
      <div class="row pt-1 pl-5 pb-3">
        <form class="form-inline" onSubmit={handleSubmit(onSubmitSubscriber)}>
          <div class="form-group mr-sm-3 mb-2">
            <label for="subscriptionField" class="sr-only"></label>
            <input
              ref={register({ required: true })}
              class="form-control"
              placeholder={(errors.email && "Email Required") || "Email"}
              name="email"
            />
          </div>
          <button class="btn btn-primary mb-2 subscribeButton">
            Suscribite
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
