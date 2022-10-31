import React from 'react'
import serviceImage from '../../images/service/connect.jpg'

export default function More() {
  return (
    <div className="more-section ">
    <div className="container">
        <div className="row align-items-center my-4 overflow-hidden">
            <div className="col-md-6 my-4" data-aos="fade-right">
                <h2>Get Started <br/>With Us.</h2>
                <br/>
                <p className="primary-text-color">Just click on button and then submit your details and we will contact you.</p>
                <a href="contact.html" className="btn btn-primary custom-button-2">Get Started</a>
            </div>
            <div className="col-md-6 my-4" data-aos="fade-left">
                <img src={serviceImage} alt="" className="img-fluid"/>
            </div>
        </div>
    </div>
</div>

  )
}
