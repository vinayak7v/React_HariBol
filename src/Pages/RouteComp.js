import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import DataStore from '../Data/DataStore'
import Footer from '../Functionality/Footer'
import Header from '../Functionality/Header'


function RouteComp() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
         <DataStore/>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default RouteComp