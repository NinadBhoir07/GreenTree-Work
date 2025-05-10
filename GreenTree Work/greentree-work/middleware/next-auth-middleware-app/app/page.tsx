'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const LazyComponent = dynamic(() => import('./components/HeavyComponents'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default function Home() {
  const [show, setShow] = useState(false)

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Welcome, you're logged in!</h1>
      <button onClick={() => setShow(true)} className="bg-green-600 text-white px-4 py-2">
        Load Lazy Component
      </button>
      {show && <LazyComponent />}
    </div>
  )
}
