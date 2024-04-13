'use client'

import React from 'react'


export default function Button({ children, onClick }) {
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      onClick={onClick}
      className="flex
      max-w-fit
      cursor-pointer
      items-center
      rounded-base border-2 border-black bg-main px-10 py-3
      text-white
      font-bold shadow-base transition-all
      hover:translate-x-boxShadowX
      hover:translate-y-boxShadowY
      hover:shadow-none"
    >
      {children}
    </button>
  )
}
