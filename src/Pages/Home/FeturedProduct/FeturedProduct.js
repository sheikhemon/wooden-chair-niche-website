import React from 'react';
import product from '../../images/product.png'
import './FeatureProduct.css'

const FeturedProduct = () => {
  return (
    <div className="p-5 bg-feature ">
      <h2 className="mb-5 text-feature">FEATURE <span>PRODUCT</span> </h2>
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center bg-feature-content">
          <div className="col-md-6">
            <img src={product} className="img-fluid img-feature" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body feature-content-text">
              <h5 className="card-title text-start">HONEST DEAL OF THE WEEK
              </h5>
              <h6 className="fs-6 price text-start">Price : $125.00</h6>
              <p className="card-text content-text text-start">Strong and Durable- Wooden chairs are made from solid wood and needless to say, they are extremely strong. They can easily withstand the wear and tear of daily use and are sure to remain functional for a very long period of time. Their enhanced durability also eliminates the need to replace them any time soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeturedProduct;