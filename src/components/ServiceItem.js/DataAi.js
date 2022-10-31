import React from 'react'
import ServicesIndividual from './ServicesIndividual'

export default function DataAi(props) {
  return (
    <div className="software">
        <div className="container">
            <div className="row  text-white overflow-hidden">
                <div className="col-12" data-aos="zoom-in">
                    <h2>Great Solutions For Business</h2>
                    <p className="primary-text-color">Great Solutions For Business
                        The models are developed as defining either the current state of the process, in which case the
                        final product is called the “as-is” snapshot model.</p>

                </div>
                {props.service.map((skill,index)=>{
                    return <ServicesIndividual key={index} service={skill}/>
                })}
            </div>
        </div>
    </div>
  )
}
