// import React from 'react'
// import Slide1 from '../assets/slider1.png'
// import Slide2 from '../assets/slider2.png'
// import Slide3 from '../assets/slider3.png'
// const SlideBar = () => {
//   return (
//     <div  className='' >
//       <div id="carouselExampleIndicators" className="carousel slide " >
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner ">
//     <div className="carousel-item active">
   
//     <img 
//   src={Slide1} 
//   className="d-block mx-auto"
//   style={{ height: "400px", objectFit: "contain" }}
//   alt="" 
// />
//     </div>
//     <div class="carousel-item">

//     <img 
//   src={Slide2} 
//   className="d-block mx-auto"
//   style={{ height: "400px", objectFit: "contain" }}
//   alt="" 
// />

//     </div>
//     <div class="carousel-item">

//     <img 
//   src={Slide3} 
//   className="d-block mx-auto"
//   style={{ height: "400px", objectFit: "contain" }}
//   alt="" 
// />
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//     </div>
//   )
// }

// export default SlideBar







import React from "react";
import Slide1 from "../assets/slider1.png";
import Slide2 from "../assets/slider2.png";
import Slide3 from "../assets/slider3.png";

const SlideBar = () => {
  return (
    <div className="slider-container mt-5">

<div
id="carouselExampleIndicators"
className="carousel slide"
data-bs-ride="carousel"     // auto start
data-bs-interval="2000"     // har 2 sec me change
data-bs-wrap="true"         // infinite loop
data-bs-pause="false"       // hover pe bhi na rukhe
>

        {/* Indicators */}
        <div className="carousel-indicators">
          <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-black"></button>
          <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="bg-black"></button>
          <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="bg-black"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={Slide1} className="carousel-img" alt="slide1" />
           
          </div>

          <div className="carousel-item">
            <img src={Slide2} className="carousel-img" alt="slide2" />
            
          </div>

          <div className="carousel-item">
            <img src={Slide3} className="carousel-img" alt="slide3" />
            
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </div>
  );
};

export default SlideBar;
