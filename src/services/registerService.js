import config from '../config/config'

export default async function registerService (data) {
  return fetch(`${config.URI_BACKEND}/login/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
}
