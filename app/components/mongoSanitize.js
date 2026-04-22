export default function mongoSanitize(req, _res, next) {
  const sanitize = (obj) => {
    if (!obj || typeof obj !== 'object') return
    for (const key of Object.keys(obj)) {
      if (key.startsWith('$') || key.includes('.')) {
        delete obj[key]
        continue
      }
      sanitize(obj[key])
    }
  }

  sanitize(req.body)
  sanitize(req.query)
  sanitize(req.params)
  next()
}
