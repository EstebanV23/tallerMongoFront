import { motion } from 'framer-motion'
import { variantsIcons } from '../constans/variantsIcons'

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
            fill='#fff'
            stroke='#fff'
            strokeWidth='6.27'
            d='M100 15v20H50V15H0v20h-50v50H0V65h50v20h50V65h50V15z'
            data-color='fill'
          />
          <use y='-100' xlinkHref='#a' />
          <use y='100' xlinkHref='#a' />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='#aaa' />
      <rect width='100%' height='100%' fill='url(#p)' />
    </svg>
  )
}

export function WarningIcon ({ className, props }) {
  return (
    <motion.svg
      variants={variantsIcons}
      initial='initial'
      animate='animate'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
      viewBox='0 96 960 960'
    >
      <path d='M40 936l440-760 440 760H40zm104-60h672L480 296 144 876zm340.175-57q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5zM454 708h60V484h-60v224zm26-122z' />
    </motion.svg>
  )
}

export function DangerousIcon ({ className, props }) {
  return (
    <motion.svg
      variants={variantsIcons}
      initial='initial'
      animate='animate'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
      viewBox='0 96 960 960'
    >
      <path d='M330 936L120 726V426l210-210h300l210 210v300L630 936H330zm27-195l123-123 123 123 42-42-123-123 123-123-42-42-123 123-123-123-42 42 123 123-123 123 42 42zm-2 135h250l175-175V451L605 276H355L180 451v250l175 175zm125-300z' />
    </motion.svg>
  )
}

export function SuccessIcon ({ className, props }) {
  return (
    <motion.svg
      variants={variantsIcons}
      initial='initial'
      animate='animate'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
      viewBox='0 96 960 960'
    >
      <path d='M421 758l283-283-46-45-237 237-120-120-45 45 165 166zm59 218q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916zm0-340z' />
    </motion.svg>
  )
}
