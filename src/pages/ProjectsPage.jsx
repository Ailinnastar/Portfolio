import React, { useState, useRef, useLayoutEffect } from 'react';
import { projectsEn } from '../content/projects-en.js';
import { projectsJa } from '../content/projects-ja.js';
import { projectsZh } from '../content/projects-zh.js';
import './ProjectsPage.css';

const projectContent = { en: projectsEn, ja: projectsJa, zh: projectsZh };
const CLICK_THRESHOLD_PX = 8;

export default function ProjectsPage({ lang }) {
  const content = projectContent[lang] || projectsEn;
  const [activeTab, setActiveTab] = useState('internship');
  const [openedCard, setOpenedCard] = useState(null);
  const pileRef = useRef(null);
  const zIndexCounterRef = useRef(0);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const draggableInstancesRef = useRef([]);

  const currentList = content[activeTab];
  const list = Array.isArray(currentList) ? currentList : [];

  useLayoutEffect(() => {
    const gsap = window.gsap;
    const Draggable = window.Draggable;
    const InertiaPlugin = window.InertiaPlugin;
    if (!gsap || !Draggable || !pileRef.current) return;

    if (InertiaPlugin) {
      gsap.registerPlugin(Draggable, InertiaPlugin);
    } else {
      gsap.registerPlugin(Draggable);
    }

    const container = pileRef.current;
    const cards = container.querySelectorAll('.pile-card');
    if (!cards.length) return;

    draggableInstancesRef.current.forEach((d) => d.kill());
    draggableInstancesRef.current = [];
    zIndexCounterRef.current = 0;
    const tab = activeTab;
    const openCard = (index) => setOpenedCard({ tab, index });

    cards.forEach((card, i) => {
      const rot = (Math.random() * 16) - 8;
      const xOff = (Math.random() * 100) - 50;
      const yOff = (Math.random() * 60) - 30;

      gsap.set(card, {
        rotation: rot,
        x: xOff,
        y: yOff,
        zIndex: i + 1,
      });
      zIndexCounterRef.current = Math.max(zIndexCounterRef.current, i + 1);

      const opts = {
        type: 'x,y',
        edgeResistance: 0.5,
        bounds: '#pile-container',
        onPress() {
          dragStartRef.current = { x: this.pointerX, y: this.pointerY };
          zIndexCounterRef.current += 1;
          gsap.set(this.target, { zIndex: zIndexCounterRef.current });
        },
        onRelease() {
          const dx = this.pointerX - dragStartRef.current.x;
          const dy = this.pointerY - dragStartRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist <= CLICK_THRESHOLD_PX) {
            const index = parseInt(this.target.getAttribute('data-index'), 10);
            if (!Number.isNaN(index)) openCard(index);
          }
        },
      };
      if (InertiaPlugin) opts.inertia = true;

      const instances = Draggable.create(card, opts);
      draggableInstancesRef.current.push(...instances);
    });

    return () => {
      draggableInstancesRef.current.forEach((d) => d.kill());
      draggableInstancesRef.current = [];
    };
  }, [activeTab]);

  const openedList = openedCard && content[openedCard.tab];
  const openedItem = openedCard && Array.isArray(openedList) && openedList[openedCard.index] != null
    ? openedList[openedCard.index]
    : null;

  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1 className="projects-title">{content.pageTitle}</h1>
        <p className="projects-subtitle">{content.pageSubtitle}</p>
      </header>

      <nav className="projects-tabs" role="tablist">
        {['internship', 'academic', 'personal'].map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={`projects-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => { setActiveTab(tab); setOpenedCard(null); }}
          >
            {content.tabs && content.tabs[tab] != null ? content.tabs[tab] : tab}
          </button>
        ))}
      </nav>

      <div id="pile-container" className="pile-container" ref={pileRef}>
        {list.map((item, i) => (
          <article
            key={`${activeTab}-${i}`}
            className="project-card pile-card"
            data-index={i}
          >
            <div className="card-cover-wrap">
              {item.cover ? (
                <img src={`${import.meta.env.BASE_URL}${item.cover}`} alt="" />
              ) : null}
            </div>
            <div className="card-inner">
              <span className="card-tag">{item.period}</span>
              <h3 className="project-card-title">{item.title}</h3>
              <p className="project-card-teaser">{item.company || item.context}</p>
              <div className="card-footer">Click to view details</div>
            </div>
          </article>
        ))}
      </div>

      {openedItem && (
        <div className="diary-overlay" onClick={() => setOpenedCard(null)} role="dialog" aria-modal="true" aria-label="Project details">
          <div className="diary-panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="diary-close" onClick={() => setOpenedCard(null)} aria-label="Close">×</button>
            <div className="diary-content">
              <h2 className="diary-title">{openedItem.title}</h2>
              {(openedItem.company || openedItem.period) && (
                <p className="diary-meta">{[openedItem.company, openedItem.period].filter(Boolean).join(' · ')}{openedItem.context ? ` · ${openedItem.context}` : ''}</p>
              )}
              {openedItem.link && (
                <p className="diary-project-link">
                  <a href={openedItem.link} target="_blank" rel="noopener noreferrer" className="diary-link-button">
                    {content.sectionTitles?.viewProject ?? 'View project →'}
                  </a>
                </p>
              )}
              {openedItem.description && <p className="diary-desc">{openedItem.description}</p>}
              {openedItem.approach && (
                <div className="diary-approach">
                  <h3 className="diary-section-title">{content.sectionTitles?.approach ?? 'How I approached it'}</h3>
                  <p className="diary-approach-text">{openedItem.approach}</p>
                </div>
              )}
              {openedItem.points && openedItem.points.length > 0 && (
                <>
                  <h3 className="diary-section-title">{content.sectionTitles?.outcomes ?? 'Key outcomes'}</h3>
                  <ul className="diary-list">
                    {openedItem.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}