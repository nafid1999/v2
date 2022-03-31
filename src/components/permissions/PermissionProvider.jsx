import { get } from 'lodash'
import { useCurrentUser } from '../../backend'

function hasPermission(permissions, permission) {
  return get(JSON.parse(permissions), permission, false)
}

function PermissionProvider({ permission, children }) {
  const { isLoading, data = {} } = useCurrentUser()
  const permissions = data?.permissions || '{}'

  const isAuthorised = hasPermission(permissions, permission)

  if (isAuthorised && !isLoading) return children

  return null
}

export default PermissionProvider
