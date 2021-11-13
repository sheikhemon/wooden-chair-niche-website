import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, img, des, price } = props.service;
    return (
        <div className="col-md-4 col-12 col-sm-12 py-2 pb-5 text-center">
            <div className="card service-bg">
                <img src={img} className="card-img-top img-fluid" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="price">Price: ${price}</h6>
                    <p className="card-text">{des.slice(0, 60)}</p>

                    {/* =========Dynamic Route setup=========== */}

                    <Link to={`/purchase/${_id}`} ><button className="live btn-buy"><i className="fas fa-cart-plus"></i> Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;