import React, { useState } from 'react'
import LanguageGateway from './components/LanguageGateway.jsx'
import MainLayout from './components/MainLayout.jsx'

export default function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('portfolio-lang') || null
    }
    return null
  })
  const [view, setView] = useState('resume')

  const handleSelectLanguage = (lang) => {
    setLanguage(lang)
  }

  const handleBackToGateway = () => {
    setLanguage(null)
  }

  if (language) {
    return (
      <MainLayout
        lang={language}
        view={view}
        onViewChange={setView}
        onBackToGateway={handleBackToGateway}
      />
    )
  }

  return <LanguageGateway onSelectLanguage={handleSelectLanguage} />
}
