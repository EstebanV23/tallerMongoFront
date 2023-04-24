import configuration from '../config/config'

export default async function deleteStudent (registerId, userId, userDoId) {
  return fetch(`${configuration.URI_BACKEND}/students/delete/${registerId}/${userId}/${userDoId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}
