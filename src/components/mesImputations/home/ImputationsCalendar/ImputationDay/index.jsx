import React, { useState, useEffect } from 'react'
import { ButtonBase, Checkbox, Link, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import { grey } from '@mui/material/colors'
import moment from 'moment'
import { useTranslation } from 'next-i18next'
import { defaultDateFormat, isInSameDay } from '../../../../../utils/dateUtils'

function Task({ task }) {
  return (
    <>
      <Typography
        variant="subtitle2"
        sx={{
          marginTop: 1.5,
        }}
      >
        {task.name}
      </Typography>
      {task.subTasks.map((subTask) => (
        <Typography
          sx={{
            marginLeft: 2,
          }}
          variant="caption"
          paragraph
        >
          {subTask}
        </Typography>
      ))}
    </>
  )
}
Task.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subTasks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

function TasksList({ tasks }) {
  const { t } = useTranslation('mes-imputations-calendar')

  const [tasksToShow, setTasksToShow] = useState([])
  const nbTasksToShow = 2

  useEffect(() => {
    const computedTasksToShow = []
    tasks.forEach((task) => {
      const newTask = task
      newTask.subTasks.length = 1
      computedTasksToShow.push(newTask)
    })

    computedTasksToShow.length = nbTasksToShow
    setTasksToShow(computedTasksToShow)
  }, [tasks])

  return (
    <>
      {tasksToShow.map((task) => (
        <Task task={task} />
      ))}
      {tasks.length - nbTasksToShow > 0 && (
        <Link variant="button" href="/">
          {t('et')} {tasks.length - nbTasksToShow} {t('other_imputations')}
        </Link>
      )}
    </>
  )
}
TasksList.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
}

export default function ImputationDay({
  day,
  tasks,
  checked,
  addCheckedDate,
  showCheckbox,
}) {
  const theme = useTheme()
  const getBoxColor = () => {
    if (isInSameDay(moment(), day)) return theme.palette.primary.main
    if (tasks.length === 0) return grey[400]

    return grey[700]
  }
  return (
    <ButtonBase
      component="div"
      sx={{
        width: '100%',
        minHeight: '200px',
        display: 'block',
        backgroundColor: `${checked ? `${theme.palette.primary.main}10` : ''}`,
        borderTop: `2px solid ${getBoxColor()}`,
        py: 2,
        px: 1,
      }}
    >
      <Checkbox
        sx={{
          position: 'absolute',
          top: 8,
          right: '0px',
          display: showCheckbox ? 'flex' : 'none',
        }}
        checked={checked}
        onClick={() => {
          addCheckedDate(day.format(defaultDateFormat))
        }}
      />
      <Typography sx={{ color: getBoxColor() }} variant="h4">
        {day.date() < 10 ? `0${day.date()}` : day.date()}
      </Typography>
      <TasksList tasks={tasks} />
    </ButtonBase>
  )
}
ImputationDay.propTypes = {
  day: PropTypes.shape(moment).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  checked: PropTypes.bool.isRequired,
  addCheckedDate: PropTypes.func.isRequired,
  showCheckbox: PropTypes.bool.isRequired,
}
