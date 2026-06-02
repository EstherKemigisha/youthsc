import type { BottomNavIcon } from '../../data/siteNav'

type BottomNavIconProps = {
  name: BottomNavIcon
}

export function BottomNavIcon({ name }: BottomNavIconProps) {
  return (
    <span className="bottom-nav__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {name === 'home' && (
          <path
            d="M5 11.5 12 5l7 6.5V18a1.25 1.25 0 0 1-1.25 1.25H15v-5.5H9v5.5H6.25A1.25 1.25 0 0 1 5 18v-6.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
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
              strokeWidth="1.5"
            />
            <path
              d="M9 4.25v2.75M15 4.25v2.75M5 10.25h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9.25 13.25h1.1M11.45 13.25h1.1M13.65 13.25h1.1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </>
        )}
        {name === 'about' && (
          <>
            <circle cx="12" cy="8.25" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M6.25 18.75c0-3.18 2.58-5.5 5.75-5.5s5.75 2.32 5.75 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </>
        )}
        {name === 'interviews' && (
          <>
            <rect
              x="4.5"
              y="7"
              width="10.5"
              height="11"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M15 10.25 19.5 7.75v8.5L15 13.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </>
        )}
        {name === 'donate' && (
          <path
            d="M12 20.5s-6-3.8-6-7.6c0-2.9 2.4-4.9 6-4.9s6 2 6 4.9c0 3.8-6 7.6-6 7.6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        )}
        {name === 'collection' && (
          <>
            <path
              d="M7 8.5h10l1 2h2.5v9H5.5v-9H7l1-2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M9 12h6M9 15h4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </span>
  )
}
