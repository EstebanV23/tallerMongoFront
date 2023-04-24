import configuration from '../config/config'

export default async function studentDeniedService (data, studentId, userDoId) {
  return await fetch(`${configuration.URI_BACKEND}/students/denied/${studentId}/${userDoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}
