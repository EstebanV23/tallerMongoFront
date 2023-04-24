import configuration from '../config/config'

export default async function getAllStudents (userDoId) {
  return await fetch(`${configuration.URI_BACKEND}/login/allStudents/${userDoId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
