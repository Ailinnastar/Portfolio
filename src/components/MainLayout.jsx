import React from 'react'
import ProfilePage from '../pages/ProfilePage.jsx'
import SelfIntroductionPage from '../pages/SelfIntroductionPage.jsx'
import ProjectsPage from '../pages/ProjectsPage.jsx'
import './MainLayout.css'

const navLabels = {
  en: { language: 'Language', resume: 'Resume', selfIntro: 'Self Introduction', projects: 'Projects' },
  ja: { language: '言語', resume: '職歴', selfIntro: '自己紹介', projects: 'プロジェクト' },
  zh: { language: '语言', resume: '简历', selfIntro: '自我介绍', projects: '项目' },
}

export default function MainLayout({ lang, view, onViewChange, onBackToGateway }) {
  const labels = navLabels[lang] || navLabels.en
  return (
    <div className="main-layout">
      <header className="main-header">
        <button
          type="button"
          className="main-header-btn lang-switch"
          onClick={onBackToGateway}
          aria-label="Change language"
        >
          {labels.language}
        </button>
        <nav className="main-nav" aria-label="Site sections">
          <button
            type="button"
            className={`main-header-btn nav-link ${view === 'resume' ? 'active' : ''}`}
            onClick={() => onViewChange('resume')}
          >
            {labels.resume}
          </button>
          <span className="nav-sep">·</span>
          <button
            type="button"
            className={`main-header-btn nav-link ${view === 'intro' ? 'active' : ''}`}
            onClick={() => onViewChange('intro')}
          >
            {labels.selfIntro}
          </button>
          <span className="nav-sep">·</span>
          <button
            type="button"
            className={`main-header-btn nav-link ${view === 'projects' ? 'active' : ''}`}
            onClick={() => onViewChange('projects')}
          >
            {labels.projects}
          </button>
        </nav>
      </header>
      <main className="main-content">
        {view === 'resume' && <ProfilePage lang={lang} noHeader />}
        {view === 'intro' && <SelfIntroductionPage lang={lang} />}
        {view === 'projects' && <ProjectsPage lang={lang} />}
      </main>
    </div>
  )
}
