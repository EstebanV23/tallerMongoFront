const validationScores = {
  all: {
    validate: {
      required: true,
      pattern: /^(0*(?:[1-9][0-9]{0,1}|1\d{2}|2[0-9]{2}|300))$/
    },
    messages: {
      required: 'Score is required',
      pattern: 'Score must be greater than 0 and less than 300'
    }
  }
}

export default validationScores
