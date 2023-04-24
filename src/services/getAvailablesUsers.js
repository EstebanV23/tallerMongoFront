import configuration from '../config/config'

export default async function getAvailablesUsers (userDoId) {
  return await fetch(`${configuration.URI_BACKEND}/login/availables/${userDoId}`)
    .then(response => response.json())
    .catch(error => console.log(error))
}
