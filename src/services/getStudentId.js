import configuration from '../config/config'

export default async function getStudentId (id) {
  return await fetch(`${configuration.URI_BACKEND}/login/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
