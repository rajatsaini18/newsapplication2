import React, { Component } from 'react';
import image1 from './image1.avif';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';

export default class Carousel extends Component {
  render() {
    return (
      <div className="position-relative d-flex justify-content-center align-items-center" >
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ height: '600px', width: '1400px', overflow: 'hidden' }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="position-absolute w-100" style={{ bottom: '0', height: '80%', background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0, 1))' }}></div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}


