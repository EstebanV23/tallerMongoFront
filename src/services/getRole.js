import config from '../config/config'

export default async function getRole (idRoleName) {
  return fetch(`${config.URI_BACKEND}/rol/`)
    .then(res => res.json())
}
