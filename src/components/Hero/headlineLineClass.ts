export function headlineLineClassName(line: string) {
  if (line === 'A GENERATION') {
    return 'headline__line headline__line--generation'
  }
  if (line === 'SATISFIED') {
    return 'headline__line headline__line--serif'
  }
  if (line === 'in Christ') {
    return 'headline__line headline__line--script'
  }
  return 'headline__line'
}
