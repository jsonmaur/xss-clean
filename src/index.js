import { clean } from './xss'

/**
 * export middleware
 * @return {function} Middleware function
 */
module.exports = function () {
  return (req, res, next) => {
    if (req.body) req.body = clean(req.body)
    if (req.query) req.query = clean(req.query)
    if (req.params) req.params = clean(req.params)

    next()
  }
}
