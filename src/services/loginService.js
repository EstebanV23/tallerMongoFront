import config from '../config/config'

export default async function loginService ({ firstName, firstSurname, typeDocument, documentId, email, password, role }) {
  return fetch(`${config.URI_BACKEND}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
}
