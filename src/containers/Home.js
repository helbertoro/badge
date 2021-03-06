import React from 'react'
import Form from '../components/Form'
import Logo from '../assets/images/logo.png'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-4 text-right">
          <img className="logo" src={Logo} alt="Instituto Distrital de Ciencia, Biotecnología e Innovación en Salud - IDCBIS"/>
        </div>
      </div>
      <Form />
    </div>
  )
}

export default Home
