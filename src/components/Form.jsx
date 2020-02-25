import React from 'react'
import '../styles/components/Form.sass'
import FormInputs from '../utils/FormInputs.js'

const Form = () => {
  return (
    <form action="">
      {FormInputs.inputs.map((item, id) => (

        <div key={id} className="form-group">
          <label htmlFor={item.name}>{item.label}</label>
          <input type={item.type} className="form-control" id={item.name} />
          <small className="form-text text-muted">{item.helper}</small>
        </div>

      ))}
    </form>
  )

}

export default Form
