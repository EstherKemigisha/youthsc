import type { SiteNavIcon } from '../../data/siteNav'

type MenuNavIconProps = {
  name: SiteNavIcon
}

export function MenuNavIcon({ name }: MenuNavIconProps) {
  return (
    <span className="site-menu__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {name === 'home' && (
          <path
            d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        )}
        {name === 'about' && (
          <>
            <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M6 19c0-3.314 2.686-5 6-5s6 1.686 6 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </>
        )}
        {name === 'events' && (
          <>
            <rect
              x="5"
              y="6"
              width="14"
              height="13"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M9 4v3M15 4v3M5 10h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </>
        )}
        {name === 'stories' && (
          <>
            <rect
              x="5"
              y="7"
              width="10"
              height="11"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M15 10.5 19 8v8l-4-2.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </>
        )}
        {name === 'register' && (
          <>
            <path
              d="M8 5h8l2 2v12H6V7l2-2Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M9 12.5 11 14.5l4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
    </span>
  )
}
