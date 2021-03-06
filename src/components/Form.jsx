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
    
    for (const prop in this.state) {
      if(!this.state[prop]) {
        return alert('Todos los campos son obligatorios')
      }
    }

    document.getElementById("carneForm").submit();
  }

  render() {
    return (
      <div className="row">
        <div className="col-5">
          <div className="carneContainer">
            <div className="carneContainer__name">{this.state.name}</div>
            <div className="carneContainer__id">
              <span className="carneContainer__id--type">
                {this.state.typeIdentification ?
                  `${this.state.typeIdentification}: ${this.state.identification}` : ''
                }
              </span>
              <span className="carneContainer__id--rh">
                {this.state.rh ?
                  `RH: ${this.state.rh}` : ''
                }
              </span>
            </div>
            <div className="carneContainer__date">
              Vence: 31/12/2020
            </div>
          </div>
        </div>
        <div className="col-7">
          <form action="http://contratistas.idcbis.org.co/api/carne" onSubmit={this.handleSubmit} id="carneForm" method="post" encType="multipart/form-data">
            <div className="form-row">
              {FormInputs.inputs.map((item, id) => (
  
                item.type === 'select' ? (
                  <div key={id} className={`form-group col-${item.size}`}>
                    <label htmlFor={item.name}>{item.label}<span className="red">*</span></label>
                    <select className="form-control" name={item.name} id={item.name} onChange={this.handleInputChange}>
                      {item.options.map((opt, optId) => (
                        <option key={optId} name={opt.code}>{opt.code}</option>
                      ))}
                    </select>
                    <small className="form-text text-muted">{item.helper}</small>
                  </div>
                ) : (
                  <div key={id} className={`form-group col-${item.size}`}>
                    <label htmlFor={item.name}>{item.label}<span className="red">*</span> <small className="form-text text-muted">{item.helper}</small></label>
                    <input type={item.type} className="form-control" id={item.name} name={item.name} onChange={this.handleInputChange} />
                  </div>
                )
  
              ))}
  
              <button className="btn btn-info" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default Form
