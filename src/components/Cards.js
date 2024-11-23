import React from "react";
import defaultImage from "../assets/default-image.jpg";

export default function catalog() {
  return (
    <div className="container mb-4">
      <div className="row">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={defaultImage}
                className="card-img-top"
                alt={`Product ${index + 1}`}
              />
              <div className="card-body">
                <h5 className="card-title">Product {index + 1}</h5>
                <p className="card-text">Description of product {index + 1}.</p>
                <button className="btn btn-primary">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
