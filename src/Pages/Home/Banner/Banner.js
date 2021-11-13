import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="bannar p-5">
            <div className="row ">
                <div className="headding">
                    <h1 className="headding" >
                        Modern & Innovative Chair
                    </h1>
                    <h4 className="make-context">We Will Make Your Life More Comfortable</h4>
                    <p className="bannarText w-50">
                        Strong and Durable- Wooden chairs are made from solid wood and needless to say, they are extremely strong. They can easily withstand the wear and tear of daily use and are sure to remain functional for a very long period of time. Their enhanced durability also eliminates the need to replace them any time soon.
                    </p>
                    <div>
                        <NavLink to="/explore">
                            <button className="bannarBtn my-3 px-4 fw-bold py-1">Buy More </button>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;