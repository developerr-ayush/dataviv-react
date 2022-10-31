import React from 'react'
import Projects from './landing/Projects'
import AllService from './ServiceItem.js/AllService'
import DataAi from './ServiceItem.js/DataAi'
import More from './ServiceItem.js/More'

export default function Service({service}) {
  return (
    <>

    <DataAi service={service}/>
    <AllService/>
    <Projects/>
    <More/>
    </>
  )
}
