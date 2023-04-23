import configuration from '../config/config'

export default async function updateUser (id, data) {
  return await fetch(`${configuration.URI_BACKEND}/login/update/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
}
