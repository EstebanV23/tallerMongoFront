export default function RenderConditional ({ children, condition }) {
  return condition ? children : null
}
