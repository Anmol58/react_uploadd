import React from "react";
import webb from "../src/images/img2.jpg"


function Card(){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={webb} alt="myPic" className="card__img" />
                <div className="card__info">
                    <span className="card__category"> A Netflix Original Series</span>
                    <h3 className="card__title"> DARK </h3>
                    <a href="" target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
         </>
    )
}



const Netflix = ( ) => {
    return (
       < Card/>
    );
};

export default Netflix;