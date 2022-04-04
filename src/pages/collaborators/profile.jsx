import React from 'react'
import { setUpLangPages } from '../../utils/langUtils'
import Profile from '../../components/profile'

export default function Profil() {
  return <Profile />
}

export async function getStaticProps({ locale }) {
  return setUpLangPages(locale)
}
