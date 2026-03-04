import React, { useState } from 'react'
import { projectsEn } from '../content/projects-en.js'
import { projectsJa } from '../content/projects-ja.js'
import { projectsZh } from '../content/projects-zh.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './ProjectsPage.css'

const projectContent = { en: projectsEn, ja: projectsJa, zh: projectsZh }

export default function ProjectsPage({ lang }) {
  const content = projectContent[lang] || projectsEn
  const [activeTab, setActiveTab] = useState('internship')
  const revealRef = useScrollReveal()

  return (
    <div className="projects-page" ref={revealRef}>
      <header className="projects-header" data-reveal>
        <div className="projects-visual-slot" aria-hidden="true">
          {/* Optional: drop a banner or visual here — e.g. <img src="..." alt="" /> */}
        </div>
        <h1 className="projects-title">{content.pageTitle}</h1>
        <p className="projects-subtitle">{content.pageSubtitle}</p>
      </header>

      <nav className="projects-tabs projects-tabs-glass" role="tablist" aria-label="Project categories" data-reveal>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'internship'}
          aria-controls="panel-internship"
          id="tab-internship"
          className={`projects-tab ${activeTab === 'internship' ? 'active' : ''}`}
          onClick={() => setActiveTab('internship')}
        >
          {content.tabs.internship}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'academic'}
          aria-controls="panel-academic"
          id="tab-academic"
          className={`projects-tab ${activeTab === 'academic' ? 'active' : ''}`}
          onClick={() => setActiveTab('academic')}
        >
          {content.tabs.academic}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'personal'}
          aria-controls="panel-personal"
          id="tab-personal"
          className={`projects-tab ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          {content.tabs.personal}
        </button>
      </nav>

      <div className="projects-panels">
        {activeTab === 'internship' && (
          <section
            id="panel-internship"
            role="tabpanel"
            aria-labelledby="tab-internship"
            className="projects-panel"
            data-reveal
          >
            <p className="panel-description">{content.panelDescriptions.internship}</p>
            {content.internship.map((item, i) => (
              <article key={i} className="project-card">
                <div className="project-card-head">
                  <h3 className="project-card-title">{item.title}</h3>
                  <span className="project-card-meta">{item.company} · {item.period}</span>
                </div>
                <p className="project-card-role">{item.role}</p>
                <p className="project-card-desc">{item.description}</p>
                <ul className="project-card-list">
                  {item.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}

        {activeTab === 'academic' && (
          <section
            id="panel-academic"
            role="tabpanel"
            aria-labelledby="tab-academic"
            className="projects-panel"
            data-reveal
          >
            <p className="panel-description">{content.panelDescriptions.academic}</p>
            {content.academic.map((item, i) => (
              <article key={i} className="project-card">
                <div className="project-card-head">
                  <h3 className="project-card-title">{item.title}</h3>
                  <span className="project-card-meta">{item.period}{item.context ? ` · ${item.context}` : ''}</span>
                </div>
                <ul className="project-card-list">
                  {item.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}

        {activeTab === 'personal' && (
          <section
            id="panel-personal"
            role="tabpanel"
            aria-labelledby="tab-personal"
            className="projects-panel"
            data-reveal
          >
            <p className="panel-description">{content.panelDescriptions.personal}</p>
            {content.personal.map((item, i) => (
              <article key={i} className="project-card">
                <div className="project-card-head">
                  <h3 className="project-card-title">{item.title}</h3>
                  <span className="project-card-meta">{item.period}{item.context ? ` · ${item.context}` : ''}</span>
                </div>
                <ul className="project-card-list">
                  {item.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}
