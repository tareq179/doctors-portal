import React from "react";
import Fluoride from "../../../images/Fluoride.png";
import Cavity from "../../../images/Cavity.png";
import Tooth from "../../../images/tooth.png";
import ServicesDetails from "../Header/ServicesDetails/ServicesDetails";

const serviceData = [
  {
    img: Fluoride,
    name: "Fluoride Treatment",
  },
  {
    img: Cavity,
    name: "Cavity Filling",
  },
  {
    img: Tooth,
    name: "Tooth Whitening",
  },
];

const Services = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h4 style={{ color: "#1CC7C1" }}>OUR SERVICES</h4>
        <h1>Services We Provide</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 p-3 row mt-5 pt-5">
          {
                serviceData.map(service => <ServicesDetails service={service}></ServicesDetails>)
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
