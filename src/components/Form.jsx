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

    return 'ok';
    /* return this.handleFetchSubmit() */
  }

  /* handleFetchSubmit() {
    var url = 'http://contratistas.idcbis.org.co/api/carne';
    var data = this.state;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => console.log('Success:', res))
    .catch(error => console.error('Error:', error));

  } */

  render() {
    return (
      <div className="row">
        <div className="col-5">
          <div className="carneContainer">
            <div className="carneContainer__name">{this.state.name}</div>
            <div className="carneContainer__id">
              <span className="carneContainer__id--type">
                {this.state.type_identification ?
                  `${this.state.type_identification}: ${this.state.identification}` : ''
                }
              </span>
              <span className="carneContainer__id--rh">
                {this.state.rh ?
                  `RH: ${this.state.rh}` : ''
                }
              </span>
            </div>
            <div className="carneContainer__date">
              Vence: 31/02/2020
            </div>
          </div>
        </div>
        <div className="col-7">
          <form action="http://contratistas.idcbis.org.co/api/carne" onSubmit={this.handleSubmit} id="carneForm" method="post" enctype="multipart/form-data">
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
                    <label htmlFor={item.name}>{item.label}<span className="red">*</span></label>
                    <input type={item.type} className="form-control" id={item.name} name={item.name} onChange={this.handleInputChange} />
                    <small className="form-text text-muted">{item.helper}</small>
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
