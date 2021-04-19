import React from "react";
import featured from "../../../images/featured.png"

const FeaturedService = () => {
  return (
    <section className="features-service pd-0 pb-md-5 my-5">
      <div className="container md-5">
        <div className="row mb-">
          <div className="col-md-5 mb-4 m-md-0">
            <img src={featured} alt="" className="img-fluid" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1>Exceptional Dental Care, on your Term</h1>
            <p className="text-secondary my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium pariatur
               nisi dicta esse nobis vel facilis doloremque minus recusandae est porro quo neque, hic
               debitis alias accusantium culpa repudiandae repellendus voluptatem commodi in. Minima,
                facere tenetur! Aut nostrum consectetur, laboriosam culpa architecto accusamus expedita
                 at voluptate. Alias, inventore laudantium!
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
