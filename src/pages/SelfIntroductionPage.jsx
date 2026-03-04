import React from 'react'
import { executiveSummaryEn } from '../content/executive-summary-en.js'
import { executiveSummaryJa } from '../content/executive-summary-ja.js'
import { executiveSummaryZh } from '../content/executive-summary-zh.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './SelfIntroductionPage.css'

const summaries = { en: executiveSummaryEn, ja: executiveSummaryJa, zh: executiveSummaryZh }

export default function SelfIntroductionPage({ lang }) {
  const content = summaries[lang] || executiveSummaryEn
  const revealRef = useScrollReveal()

  return (
    <div className="self-intro-page" ref={revealRef}>
      <section className="intro-hero" data-reveal>
        <h1 className="intro-title">{content.title}</h1>
      </section>
      <section className="intro-content intro-glass" data-reveal>
        <div className="executive-summary">
          {content.summary.map((paragraph, i) => (
            <p key={i} className="summary-para">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}
