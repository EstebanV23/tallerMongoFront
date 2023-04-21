const validationRegisterInputs = {
  email: {
    validate: {
      required: true,
      pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    messages: {
      required: 'Email is required',
      pattern: 'Bad email format. Example: Youremail@domain.com'
    }
  },
  password: {
    validate: {
      required: true,
      minLength: 8
    },
    messages: {
      required: 'Password is required',
      minLength: 'The password must be at least 8 characters long'
    }
  },
  confirmPassword: {
    validate: {
      required: true,
      validate: function (cb) {
        return (values) => {
          cb(values)
        }
      }
    },
    messages: {
      required: 'Password is required',
      validate: 'Passwords do not match'
    }
  },
  documentId: {
    validate: {
      required: true,
      pattern: /^[0-9]{7,10}$/
    },
    messages: {
      required: 'Document is required',
      pattern: 'Document must be between 7 and 10 digits'
    }
  },
  typeDocument: {
    validate: {
      required: true
    },
    messages: {
      required: 'Type document is required'
    }
  },
  firstName: {
    validate: {
      required: true,
      minLength: 5
    },
    messages: {
      required: 'The first name is required',
      minLength: 'The name must be at least 5 characters long'
    }
  },
  firstSurname: {
    validate: {
      required: true,
      minLength: 5
    },
    messages: {
      required: 'The first surname is required',
      minLength: 'The surname must be at least 5 characters long'
    }
  }
}

export default validationRegisterInputs
