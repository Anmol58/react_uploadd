import React from "react";
import web from "../src/images/img1.png";
import {NavLink} from "react-router-dom";
const Home = ( ) => { 
    return (
        <>
       <section id="header" className="d-flex align-items-center">
       <div className="container-fluid ">
<div className='row'>
    <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>
                Welcome to <strong className="brand-name">RecommendationPoint</strong>
            </h1>
            <h2 className="my-3">
                We bring you the best recommended list of series on different platform
            </h2>
            <div className="mt-3">
                <NavLink to="/netflix" className="btn-get-started ">Get Started</NavLink>
            </div>
        </div>
        <div className="col-lg-6 order-1 orderlg-2 header-img">
            <img src={web} className="img-fluid animated" alt="homeimg"/>
        </div>
        </div>
    </div>
</div>
    </div>
       </section>
        </>
    );
};

export default Home;