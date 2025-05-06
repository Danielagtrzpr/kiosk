import React from 'react'

export default function Heading({children}:{children:React.ReactNode}) {
  return (
    <h2 className="text-2xl py-4">{children}</h2>
  )
}
