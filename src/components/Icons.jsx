export function PatterSvg ({ className, props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
      {...props}
      preserveAspectRatio='none'
    >
      <defs>
        <pattern
          id='p'
          width='100'
          height='100'
          patternTransform='rotate(16) scale(1.43)'
          patternUnits='userSpaceOnUse'
        >
          <path
            id='a'
            fill='#BBF7D0'
            stroke='#BBF7D0'
            strokeWidth='6.27'
            d='M100 15v20H50V15H0v20h-50v50H0V65h50v20h50V65h50V15z'
            data-color='fill'
          />
          <use y='-100' xlinkHref='#a' />
          <use y='100' xlinkHref='#a' />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='#86EFAC' />
      <rect width='100%' height='100%' fill='url(#p)' />
    </svg>
  )
}
