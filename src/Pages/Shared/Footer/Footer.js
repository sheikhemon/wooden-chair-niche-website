import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="d-md-flex align-items-center text-center footer text-white pb-2 pt-2">
                {/* ========== footer course link ========== */}
                <div className="col-md-4 col-12 mt-5 mb-5 ">
                    <h5 className="footer-heading">Categories</h5>
                    <li className="li-style">Wooden Black</li>
                    <li className="li-style">Wooden Gray</li>
                    <li className="li-style">All Chairs</li>
                </div>
                {/* ============footer nav link ============ */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5 className="footer-heading">Product Visit</h5>
                    <li className="li-style ">Brown Chair</li>
                    <li className="li-style">Gray Chair</li>
                    <li className="li-style">Offer</li>
                </div>
                {/* =========== social media =========== */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5 className="footer-heading">Social</h5>
                    <div className="icon-footer">
                        <i className="fs-4  m-2 fab fa-facebook"></i>
                        <i className="fs-4 m-2 fab fa-google ms-3"></i>
                        <i className="fs-4  m-2 fab fa-twitter ms-3"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;