'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    if (res.ok) {
      router.push('/')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Login</h1>
      <input className="border p-2 mb-2 w-full" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input className="border p-2 mb-2 w-full" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-600 text-white px-4 py-2" onClick={handleSubmit}>Login</button>
    </div>
  )
}