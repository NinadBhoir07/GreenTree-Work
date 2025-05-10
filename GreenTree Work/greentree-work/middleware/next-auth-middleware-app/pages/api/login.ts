import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'cookies-next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { username, password } = req.body

  if (username === 'admin' && password === 'admin') {
    setCookie('isAuthenticated', 'true', { req, res, maxAge: 60 * 60 })
    return res.status(200).json({ success: true })
  }

  return res.status(401).json({ error: 'Invalid credentials' })
}
