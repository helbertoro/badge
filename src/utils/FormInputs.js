const FormInputs = {
  inputs: [
    {
      label: 'Nombre completo',
      name: 'name',
      type: 'text',
      options: {},
      size: '12',
      helper: ''
    },
    {
      label: 'Tipo de identificación',
      name: 'typeIdentification',
      type: 'select',
      options: [
        {
          name: '',
          code: ''
        },
        {
          name: 'Cédula de Ciudadanía',
          code: 'CC'
        },
        {
          name: 'Cédula de Extranjería',
          code: 'CE'
        },
        {
          name: 'Pasaporte',
          code: 'PA'
        }
      ],
      size: '4',
      helper: ''
    },
    {
      label: 'Número de identificación',
      name: 'identification',
      type: 'number',
      options: {},
      size: '8',
      helper: ''
    },
    {
      label: 'RH',
      name: 'rh',
      type: 'text',
      options: {},
      size: '3',
      helper: ''
    },
    {
      label: 'Fecha de nacimiento',
      name: 'birthday',
      type: 'date',
      options: {},
      size: '9',
      helper: ''
    },
    {
      label: 'Dirección',
      name: 'address',
      type: 'text',
      options: {},
      size: '12',
      helper: ''
    },
    {
      label: 'Número de celular',
      name: 'phone',
      type: 'text',
      options: {},
      size: '6',
      helper: ''
    },
    {
      label: 'Correo electrónico',
      name: 'email',
      type: 'email',
      options: {},
      size: '6',
      helper: ''
    },
    {
      label: 'Profesión',
      name: 'profession',
      type: 'text',
      options: {},
      size: '6',
      helper: ''
    },
    {
      label: 'Grupo de trabajo',
      name: 'workGroup',
      type: 'text',
      options: {},
      size: '6',
      helper: ''
    },
    {
      label: 'Foto',
      name: 'picture',
      type: 'file',
      options: {},
      size: '12',
      helper: 'Fondo blanco, solo rostro como el carné de ejemplo.'
    },
  ]
}

export default FormInputs
