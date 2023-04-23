import validationLoginInputs from './validationLoginInputs'
import validationRegisterInputs from './validationRegisterInputs'

const validationPersonalInformation = {
  firstName: {
    validate: {
      required: true,
      minLength: 3
    },
    messages: {
      required: 'First name is required',
      minLength: 'First name must be at least 3 characters'
    }
  },
  firstSurname: {
    validate: {
      required: true,
      minLength: 3
    },
    messages: {
      required: 'First surname is required',
      minLength: 'First surname must be at least 3 characters'
    }
  },
  email: validationLoginInputs.email,
  documentId: validationRegisterInputs.documentId,
  typeDocument: validationRegisterInputs.typeDocument,
  lastSurname: {
    validate: {
      required: true,
      minLength: 3
    },
    messages: {
      required: 'Last surname is required',
      minLength: 'Last surname must be at least 3 characters'
    }
  },
  middleName: {
    validate: {
      required: true,
      minLength: 3
    },
    messages: {
      required: 'middle name is required',
      minLength: 'middle name must be at least 3 characters'
    }
  },
  phone: {
    validate: {
      required: true,
      pattern: /^(\d{3,10})$/
    },
    messages: {
      required: 'Phone is required',
      pattern: 'Phone should have between 3 and 10 digits'
    }
  }
}

export default validationPersonalInformation
