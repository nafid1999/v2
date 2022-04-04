import { useQuery } from 'react-query'
import axios from '../config/axios'

const getCurrentUser = () =>
  axios({ url: 'api/account' }).then(({ data }) => data)

// eslint-disable-next-line import/prefer-default-export
export const useCurrentUser = () => {
  const { isLoading, error, data, isFetching } = useQuery('currentUser', () =>
    getCurrentUser(),
  )
  return { isLoading, error, data, isFetching }
}
