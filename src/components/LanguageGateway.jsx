import React, { useState } from 'react'
import './LanguageGateway.css'

const LOCATIONS = [
  'Sydney',
  'London',
  'San Diego',
  'Shanghai',
  'Tokyo',
  'Hong Kong',
  'Los Angeles',
  'Barcelona',
  'Singapore',
  'New York',
]

const LANGUAGES = [
  { id: 'en', label: 'English', fontClass: 'lang-en' },
  { id: 'ja', label: '日本語', fontClass: 'lang-ja' },
  { id: 'zh', label: '简体中文', fontClass: 'lang-zh' },
]

export default function LanguageGateway({ onSelectLanguage }) {
  const [selectedId, setSelectedId] = useState(null)

  const handleSelect = (id) => {
    setSelectedId(id)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-lang', id)
    }
  }

  const handleEnter = () => {
    if (selectedId) onSelectLanguage?.(selectedId)
  }

  return (
    <div className="language-gateway">
      <div className="gateway-content">
        <h1 className="gateway-title">Choose your language</h1>

        <nav className="language-options" role="navigation" aria-label="Language selection">
          {LANGUAGES.map(({ id, label, fontClass }) => (
            <button
              key={id}
              className={`language-option ${fontClass} ${selectedId === id ? 'selected' : ''}`}
              onClick={() => handleSelect(id)}
              aria-pressed={selectedId === id}
              aria-label={label}
            >
              <span className="option-label">{label}</span>
            </button>
          ))}
        </nav>

        {selectedId && (
          <button
            className="enter-site-btn"
            onClick={handleEnter}
            aria-label="Enter site"
          >
            Enter site
          </button>
        )}

        <div className="location-ticker-wrap" aria-hidden="true">
          <div className="location-ticker">
            {[...LOCATIONS, ...LOCATIONS].map((loc, i) => (
              <span key={`${loc}-${i}`} className="ticker-item">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
