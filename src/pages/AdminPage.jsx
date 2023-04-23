import { Outlet } from 'react-router-dom'

export default function AdminPage () {
  return (
    <div className='w-full bg-slate-200'>
      <div className='max-w-6xl m-auto p-3 pt-20 min-h-[calc(100vh-64px)]'>
        <Outlet />
      </div>
    </div>
  )
}
