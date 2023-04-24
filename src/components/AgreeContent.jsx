import SecondaryButton from './SecondaryButton'

export default function AgreeContent ({ setOpen, functionExe, title, message }) {
  return (
    <>
      <p className='text-3xl'>{title}</p>
      <p className='text-md text-gray-400'>{message}</p>
      <div className='flex m-auto gap-3'>
        <SecondaryButton color='green' onClick={() => functionExe()}>Yes</SecondaryButton>
        <SecondaryButton color='red' onClick={() => setOpen(false)}>Cancel</SecondaryButton>
      </div>
    </>
  )
}
