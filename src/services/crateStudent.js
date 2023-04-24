import configuration from '../config/config'

export default async function crateStudent (data, userId, userDoIt) {
  return await fetch(`${configuration.URI_BACKEND}/students/add/${userId}/${userDoIt}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}
