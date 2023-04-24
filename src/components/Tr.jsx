export default function Tr ({ children, className, denied, ...props }) {
  const color = denied ? 'hover:bg-red-100' : 'hover:bg-slate-100'
  return (
    <tr className={`${color} border-b-2 py-3 ${className}`} {...props}>{children}</tr>
  )
}
