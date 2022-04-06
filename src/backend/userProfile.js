import { useQuery } from 'react-query'
import axios from '../config/axios'

const prefixUrl = '/collaboratorjava/api/'

// eslint-disable-next-line import/prefer-default-export
export const useProfileInfo = (idUser = 38) => {
  const { data: dataProfile, isLoading } = useQuery('collabCount', () =>
    axios({
      url: `${prefixUrl}collaborators/${idUser}/profile`,
    }).then((res) => res.data),
  )

  return { dataProfile }
}
