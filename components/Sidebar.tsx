"use client"

import Example from "./Example"

export default function Sidebar() {
    console.log("From Sidebar, client")
  return (
    <div>
        Sidebar
        <Example/>
    </div>
  )
}
