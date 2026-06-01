export function getVisibleSlideCount(viewportWidth: number): number {
  if (viewportWidth <= 520) return 1
  if (viewportWidth <= 900) return 2
  return 3
}
