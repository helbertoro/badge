import React, { Component } from 'react'
import '../styles/components/Form.sass'
import FormInputs from '../utils/FormInputs.js'

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {
    let formItem = {}

    FormInputs.inputs.map((item, id) => (
      formItem[item.name] = ''
    ))

    this.setState(formItem)

    setTimeout(() => {
      console.log(this.state)
    }, 1000);
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-7">
          <form onSubmit={this.handleSubmit}>
          <h2>{this.state.name}</h2>
            <div className="form-row">
              {FormInputs.inputs.map((item, id) => (
  
                item.type === 'select' ? (
                  <div key={id} className={`form-group col-${item.size}`}>
                    <label htmlFor={item.name}>{item.label}</label>
                    <select className="form-control" name={item.name} id={item.name} onChange={this.handleInputChange}>
                      {item.options.map((opt, optId) => (
                        <option key={optId} name={opt.code}>{opt.code}</option>
                      ))}
                    </select>
                    <small className="form-text text-muted">{item.helper}</small>
                  </div>
                ) : (
                  <div key={id} className={`form-group col-${item.size}`}>
                    <label htmlFor={item.name}>{item.label}</label>
                    <input type={item.type} className="form-control" id={item.name} name={item.name} onChange={this.handleInputChange} />
                    <small className="form-text text-muted">{item.helper}</small>
                  </div>
                )
  
              ))}
  
              <button className="btn btn-success" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default Form
