import React from 'react'
import { profileEn } from '../content/profile-en.js'
import { profileJa } from '../content/profile-ja.js'
import { profileZh } from '../content/profile-zh.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './ProfilePage.css'

const profiles = { en: profileEn, ja: profileJa, zh: profileZh }

export default function ProfilePage({ lang, noHeader }) {
  const profile = profiles[lang] || profileEn
  const revealRef = useScrollReveal()

  return (
    <div className="profile-page" ref={revealRef}>
      {!noHeader && (
        <header className="profile-header">
          <button type="button" className="lang-switch" aria-label="Change language">
            Language
          </button>
        </header>
      )}

      <main className="profile-main">
        <section className="hero hero-glass" data-reveal>
          <div className="hero-image-slot" aria-hidden="true">
            {/* Drop your photo or visual here — e.g. <img src="..." alt="" /> */}
          </div>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-contact">
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            <span className="sep">·</span>
            <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
            <span className="sep">·</span>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </section>

        <section className="profile-section" data-reveal>
          <h2>{profile.sections.education}</h2>
          {profile.education.map((edu, i) => (
            <div key={i} className="card education-card">
              <div className="card-head">
                <strong>
                  {edu.school}
                  {edu.schoolEn ? <span className="card-school-en"> {edu.schoolEn}</span> : null}
                </strong>
                <span className="muted">{edu.period}</span>
              </div>
              <p className="card-sub">{edu.degree}</p>
              {edu.focus ? <p className="card-focus">{edu.focus}</p> : null}
              {edu.highlights?.length > 0 && (
                <ul className="card-list">
                  {edu.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className="profile-section" data-reveal>
          <h2>{profile.sections.experience}</h2>
          {profile.experience.map((job, i) => (
            <div key={i} className="card">
              <div className="card-head">
                <strong>{job.company}</strong>
                <span className="muted">{job.period}</span>
              </div>
              <p className="card-role">{job.role}</p>
              <ul className="card-list">
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="profile-section" data-reveal>
          <h2>{profile.sections.research}</h2>
          {profile.research.map((item, i) => (
            <div key={i} className="card">
              <div className="card-head">
                <strong>{item.title}</strong>
                {item.period && <span className="muted">{item.period}</span>}
              </div>
              <ul className="card-list">
                {item.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="profile-section" data-reveal>
          <h2>{profile.sections.skills}</h2>
          <div className="card skills-card">
            <div className="skills-block">
              <span className="skills-label">{profile.skillsLabels.technical}</span>
              <div className="skills-value skills-tags">
                {profile.skills.technical.map((s, i) => (
                  <span key={i} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div className="skills-block">
              <span className="skills-label">{profile.skillsLabels.software}</span>
              <div className="skills-value skills-tags">
                {profile.skills.software.map((s, i) => (
                  <span key={i} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div className="skills-block">
              <span className="skills-label">{profile.skillsLabels.languages}</span>
              <div className="skills-value skills-langs">
                <span><strong>{profile.skillsLabels.native}</strong> {profile.skills.languages.native}</span>
                <span><strong>{profile.skillsLabels.conversational}</strong> {profile.skills.languages.conversational}</span>
                <span><strong>{profile.skillsLabels.basic}</strong> {profile.skills.languages.basic}</span>
              </div>
            </div>
            <div className="skills-block">
              <span className="skills-label">{profile.skillsLabels.hobbies}</span>
              <span className="skills-value">{profile.hobbies}</span>
            </div>
          </div>
        </section>

        <section className="profile-section" data-reveal>
          <h2>{profile.sections.activities}</h2>
          <ul className="activities-list">
            {profile.activities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="profile-footer" data-reveal>
        <p className="muted">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  )
}
