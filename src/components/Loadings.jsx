import { createPortal } from 'react-dom'
import '../assets/loader.css'

export default function Loadings () {
  return createPortal(
    <div className='w-screen z-50 h-screen backdrop-blur-[1px] fixed top-0 left-0 grid place-items-center bg-black bg-opacity-50'>
      <span className='loader' />
    </div>
    , document.getElementById('loadings'))
}

export function LoadingComponent ({ className = '' }) {
  return <span className='loaderComponent' />
}
