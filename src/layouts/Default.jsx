import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Container, MenuItem, Select } from '@mui/material'
import { useRouter } from 'next/router'
import { useLangStore, useThemeStore } from '../store/preferredParamsStore'

export default function DefaultLayout({ children }) {
  const { allLangs, currentLang, changeLang } = useLangStore()
  const { push, basePath } = useRouter()
  const { toggleTheme } = useThemeStore()

  useEffect(() => {
    push(basePath, basePath, { locale: currentLang })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLang])

  const handleLangChange = (event) => {
    changeLang(event.target.value)
  }

  return (
    <Container maxWidth="full" sx={{ bgcolor: 'background.default' }}>
      <div>
        <Select
          variant="standard"
          color="primary"
          sx={{ background: 'primary' }}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={handleLangChange}
          defaultValue={currentLang}
        >
          {allLangs.map((lang) => (
            <MenuItem key={lang} value={lang}>
              {lang}
            </MenuItem>
          ))}
        </Select>
        <Button onClick={toggleTheme} sx={{ bgcolor: 'primary' }}>
          toggle theme
        </Button>
      </div>
      {children}
    </Container>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
