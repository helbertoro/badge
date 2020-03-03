import React from 'react'
import Logo from '../assets/images/logo.png'
import '../styles/Thanks.sass'

const Thanks = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-4 text-right">
          <img className="logo" src={Logo} alt="Instituto Distrital de Ciencia, Biotecnología e Innovación en Salud - IDCBIS"/>
        </div>
      </div>
      <div className="row">
        <div className="col mt-5 text-center">
          <h1>Tus datos fueron registrados</h1>
        </div>
      </div>
    </div>
  )
}

export default Thanks
