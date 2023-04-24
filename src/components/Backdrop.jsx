
export default function Backdrop ({ ...props }) {
  return (
    <div className='fixed left-0 top-0 w-screen h-screen z-20 bg-black bg-opacity-30' {...props} />
  )
}
