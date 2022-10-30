import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Cuveetop from '../designs/Cuveetop';
import Cuveebottom from '../designs/Cuveebottom';

const options = {

    responsive: {
        0: {
            items: 3,
        },
        600: {
            items: 6,
        },
    },
    center: true,
    loop: true,
    margin: 20,
};
export default function Countries() {
    return (
        <>
            <div className="partners add-bg text-center">
                <Cuveetop />
                <div className="container" data-aos="fade-up">
                    <h2>Countries We Serve</h2>
                    <p className="primary-text-color-2">
                        We offer our services in following Countries
                    </p>
                    <ReactOwlCarousel className=" clients-img" {...options}>
                        <div className="items">
                            <div className="countries-carousel">
                                <h4>Bahrain</h4>
                            </div>
                        </div>
                        <div className="items">
                            <div className="countries-carousel">
                                <h4>USA</h4>
                            </div>
                        </div>
                        <div className="items">
                            <div className="countries-carousel">
                                <h4>Australia</h4>
                            </div>
                        </div>
                        <div className="items">
                            <div className="countries-carousel">
                                <h4>Fiji</h4>
                            </div>
                        </div>
                        <div className="items">
                            <div className="countries-carousel">
                                <h4>India</h4>
                            </div>
                        </div>
                        <div className="items">
                            <div className="countries-carousel">
                                <h4>Dubai</h4>
                            </div>
                        </div>
                        <div className="items">
                            <div className="countries-carousel">
                                <h4>Canada</h4>
                            </div>
                        </div>
                        <div className="items">
                            <div className="countries-carousel">
                                <h4>Germany</h4>
                            </div>
                        </div>
                        <div className="items">
                            <div className="countries-carousel">
                                <h4>Italy</h4>
                            </div>
                        </div>
                    </ReactOwlCarousel>
                </div>

            </div>
            <Cuveebottom/>
        </>
    )

}
