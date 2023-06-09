import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import ContactLinks from "./components/contactLinks/contactLinks";
import Foooter from "./components/footer/footer";

export default function Contact() {
  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_lactv4o";
    const templateId = "template_rr1157v";
    const apiKey = "FG8SbNlecRE-IskTu";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        if (result.text === "OK") {
          Swal.fire({
            title: "Mensaje enviado!",
            text: "Pronto responderé tu mensaje.",
            icon: "success",
          });
        } else {
          console.log(result.text);
          Swal.fire({
            title: "Error!",
            text: "Intentalo de nuevo.",
            icon: "error",
          });
        }
      });
  };

  return (
    <>
      <section className="animate-fade-left animate-once animate-duration-1000  animate-ease-in-out">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-16 mt-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Envíame un mensaje
          </h2>
          <form
            ref={refForm}
            action=""
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Nombre..."
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tu email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Mensaje..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Envíar mensaje
            </button>
          </form>
        </div>
      </section>
      <div className="flex flex-1 flex-col justify-center items-center max-md:mt-2 max-lg:mt-10" >
      <div className="flex items-center justify-center flex-col animate-fade animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-5 mb-5">
       Redes sociales
        </h2>
      </div>
        <ContactLinks/>
        <div className="m-3">
        <Foooter/>
        </div>
      </div>
    </>
  );
}
