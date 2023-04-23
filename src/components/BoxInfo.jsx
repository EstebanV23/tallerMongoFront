import React from 'react'

export default function BoxInfo ({ children, className, ...props }) {
  return (
    <div className={`p-2 md:p-8 bg-slate-50 rounded-lg ${className}`} {...props}>
      {children}
    </div>
  )
}
