const validationLoginInputs = {
  email: {
    validate: {
      required: true,
      minLength: 4
    },
    messages: {
      required: 'Email is required',
      minLength: 'Min 4 caracters, pls'
    }
  },
  password: {
    validate: {
      required: true,
      minLength: 4
    },
    messages: {
      required: 'Password is required',
      minLength: 'Min 4 caracters, pls'
    }
  }
}

export default validationLoginInputs
