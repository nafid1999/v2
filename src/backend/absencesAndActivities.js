import { useQuery } from 'react-query'
import axios from '../config/axios'

const prefixUrl = '/collaboratorjava/api/'

// eslint-disable-next-line import/prefer-default-export
export const useListAbsences = (page = 1) => {
  const { data } = useQuery('absneces', () =>
    axios({
      url: `${prefixUrl}absences-activities`,
      params: { size: 3, page },
    }).then((res) => res.data),
  )
  return { data }
}
