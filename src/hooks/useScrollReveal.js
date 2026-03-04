import { useEffect, useRef } from 'react'

const defaultOptions = { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }

/**
 * Adds 'revealed' class to elements when they enter the viewport (for scroll-triggered animations).
 * Use with data-reveal on the element and a ref to its container that has multiple [data-reveal] children.
 */
export function useScrollReveal(options = {}) {
  const opts = { ...defaultOptions, ...options }
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const els = container.querySelectorAll('[data-reveal]')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      opts
    )

    els.forEach((el) => observer.observe(el))
    return () => els.forEach((el) => observer.unobserve(el))
  }, [opts.rootMargin, opts.threshold])

  return containerRef
}
