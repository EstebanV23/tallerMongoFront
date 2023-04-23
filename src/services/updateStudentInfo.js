import configuration from '../config/config'

export default async function updateStudentInfo (id, data) {
  return await fetch(`${configuration.URI_BACKEND}/students/update/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
}
