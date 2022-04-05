import { useQuery } from 'react-query'
import axios from '../config/axios'

const prefixUrl = '/collaboratorjava/api/'

// eslint-disable-next-line import/prefer-default-export
export const useProfileInfo = (idUser) => {
  console.log(idUser)
  const { data } = useQuery('collabCount', () =>
    axios({
      url: `${prefixUrl}collaborators/11/profile`,
    }).then((res) => res.data),
  )
  return { data }
}
