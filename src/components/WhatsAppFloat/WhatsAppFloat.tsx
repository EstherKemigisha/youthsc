import { SocialIcon } from '../Hero/SocialIcon'
import { HERO_CONTENT } from '../../data/heroContent'
import './WhatsAppFloat.css'

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={HERO_CONTENT.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={HERO_CONTENT.whatsapp.label}
      title={HERO_CONTENT.whatsapp.label}
    >
      <SocialIcon platform="whatsapp" className="whatsapp-float__icon" />
    </a>
  )
}
