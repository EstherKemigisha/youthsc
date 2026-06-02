export function parseNavHref(href: string): { path: string; hash: string } {
  const hashIndex = href.indexOf('#')
  if (hashIndex === -1) {
    return { path: href || '/', hash: '' }
  }
  return {
    path: href.slice(0, hashIndex) || '/',
    hash: href.slice(hashIndex),
  }
}

export function scrollToSection(hash: string) {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const id = hash.replace(/^#/, '')
  const target = document.getElementById(id)
  if (!target) return

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
