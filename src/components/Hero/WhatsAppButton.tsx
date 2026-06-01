import { SocialIcon } from './SocialIcon'

type WhatsAppButtonProps = {
  href: string
  label?: string
}

export function WhatsAppButton({
  href,
  label = 'Chat on WhatsApp',
}: WhatsAppButtonProps) {
  return (
    <a
      className="whatsapp-btn hero__circle-btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <SocialIcon platform="whatsapp" className="whatsapp-btn__icon" />
    </a>
  )
}
