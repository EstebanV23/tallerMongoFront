
export default function Td ({ children, className, ...props }) {
  return (
    <td className={`px-6 py-2 text-gray-900 ${className}`} {...props}>{children}</td>
  )
}
