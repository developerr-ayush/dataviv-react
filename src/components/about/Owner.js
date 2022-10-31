import React from 'react';
import owner from '../../images/vedant-sir-removebg-preview.png';
import comingSoon from '../../images/about/comming-soon.jpg';

const Owner = () => {
    return (
        <div className="scene">
    
    
    
            <div className="container text-white">
                <div className="row  align-items-center overflow-hidden">
                    <div className="col-lg-6 my-5" data-aos="fade-right">
                        <div className="img">
    
                            <img src={owner} className="test1" alt="owner"/>
                        </div>
                    </div>
                    <div className="col-lg-6 my-5" data-aos="fade-left">
                        <h2>
                            Chief Executive Officier Profile
                        </h2>
                        <h5 className="primary-text-color mt-3">Vedant Ahluwalia</h5>
                        <p>Mr. Vedant Ahluwalia is an MS. in Computational and Mathematical Engineering from Stanford
                            University with vast experience in technology products and Artificial Intelligence. He has been
                            associated with various large Entities including the UNDP, Tudor Investment Corporation,
                            Coursera, and more across a wide variety of fields bringing problem solving expertise across
                            sectors.
                        </p>
                        <a href="https://www.linkedin.com/in/vedant-ahluwalia-bb258262/" className="btn btn-primary custom-button-2 ms-0 px-3 py-2">
                            <span>
    
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </span>
                            <span>
    
                                &nbsp; View On Linkedin
                            </span>
                        </a>
    
                    </div>
                </div>
    
    
                <div className="row align-items-center flex-wrap-reverse overflow-hidden">
                    <div className="col-lg-6 my-5" data-aos="fade-right">
                        <h2>
                            Welcome to Dataviv Technologies
                        </h2>
                        <p>Our CEO Mr. Vedant Ahluwalia is an MS. in Computational and Mathematical Engineering from
                            Stanford University with vast experience in technology products and Artificial Intelligence. He
                            has been associated with various large Entities including the UNDP, Tudor Investment
                            Corporation, Coursera, and more across a wide variety of fields bringing problem solving
                            expertise across sectors. With the mission to bring India to the world, bringing the top level
                            of worldwide knowledge to India, he Setup Dataviv Technologies that would conduct research
                            across various disciplines including educating the Youth of India with development and growth of
                            India as a focus.
                        </p>
                    </div>
                    <div className="col-lg-6 my-5" data-aos="fade-left">
                        <div className="image">
                            <img src={comingSoon} alt="tech" className="shadow"/>
    
                        </div>
                    </div>
                </div>
    
            </div>
    
    
        </div>
    );
}

export default Owner;
