import jwt from 'jsonwebtoken'

export default function authenticate (req, res, next) {
  const header = req.headers.authorization
  if (!header) {
    return res.status(401).json({ message: 'Missing authorization header' })
  }
  const [scheme, token] = header.split(' ')
  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Invalid authorization header' })
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { id: payload.sub, role: payload.role }
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}
