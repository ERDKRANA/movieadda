import React, { Component } from "react";

class Carousal extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://weneedfun.com/wp-content/uploads/2016/08/Movie-Wallpapers-14.jpg"
                class="d-block w-100 car-img"
                alt="first slide"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://wallsdesk.com/wp-content/uploads/2016/05/anduin-lothar-in-warcraft-movie.jpg"
                class="d-block w-100 car-img"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.traileraddict.com/article/wp-content/uploads/2020/04/wwe-wrestlers-in-movies.jpg"
                class="d-block w-100 car-img"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
export default Carousal;