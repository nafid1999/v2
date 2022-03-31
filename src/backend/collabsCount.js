import { useQuery } from 'react-query'
import axios from '../config/axios'

const prefixUrl = '/collaboratorjava/api/'

// eslint-disable-next-line import/prefer-default-export
export const useCollabsCount = () => {
  const { data } = useQuery('collabCount', () =>
    axios({
      url: `${prefixUrl}collaborators/count`,
    }).then((res) => res.data),
  )
  return { data }
}
