import React from "react";
import Slider from "react-slick";

function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="projects">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide-card">
            <h3>1</h3>
          </div>
          <div className="slide-card">
            <h3>2</h3>
          </div>
          <div className="slide-card">
            <h3>3</h3>
          </div>
          <div className="slide-card">
            <h3>4</h3>
          </div>
          <div className="slide-card">
            <h3>5</h3>
          </div>
          <div className="slide-card">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
