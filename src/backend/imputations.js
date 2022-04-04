import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import axios from '../config/axios'
import { useCurrentUser } from './currentUser'

const getImputations = async (startDate, endDate, collabId) =>
  axios
    .get(
      `/collaboratorjava/api/imputations?date.greaterOrEqualThan=${startDate}&date.lessOrEqualThan=${endDate}&collaboratorId.equals=${collabId}`,
    )
    .then(({ data }) => data)

export const useImputations = (startDate, endDate) => {
  const { data: user = { id: -1 } } = useCurrentUser()

  const { isLoading, error, data, isFetching } = useQuery(
    `imputations(${startDate}/${endDate})`,
    () => getImputations(startDate, endDate, user.id),
  )

  return { isLoading, error, data, isFetching }
}
