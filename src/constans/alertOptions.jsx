import { DangerousIcon, SuccessIcon, WarningIcon } from '../components/Icons'

const stylesIcons = 'h-[18px]'

const alertOptions = {
  success: {
    color: 'text-green-500',
    icon: <SuccessIcon className={`fill-green-500 ${stylesIcons}`} />
  },
  error: {
    color: 'text-red-400',
    icon: <DangerousIcon className={`fill-red-400 ${stylesIcons}`} />
  },
  warning: {
    color: 'text-yellow-500',
    icon: <WarningIcon className={`fill-yellow-500 ${stylesIcons}`} />
  },
  default: {
    color: 'text-slate-500',
    icon: <SuccessIcon className={`fill-slate-500 ${stylesIcons}`} />
  }
}

export default alertOptions
