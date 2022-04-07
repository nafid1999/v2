import { useQuery } from 'react-query'
import axios from '../config/axios'

const prefixUrl = '/collaboratorjava/api/'

export const useCollabsCount = () => {
  const { data } = useQuery('collabCount', () =>
    axios({
      url: `${prefixUrl}collaborators/count`,
    }).then((res) => res.data),
  )
  return { data }
}

export const useListAbsences = (page = 0) => {
  const { data } = useQuery('absneces', () =>
    axios({
      url: `${prefixUrl}absences-activities`,
      params: { size: 3, page },
    }).then((res) => res.data),
  )
  return { data }
}
