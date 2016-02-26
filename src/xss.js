import { inHTMLData } from 'xss-filters'

/**
 * clean for xss
 * @param {string/object} data The value to sanitize
 * @return {string/object} Returns the sanitized value
 */
export function clean(data = '') {
  let isObject = false
  if (typeof data === 'object') {
    data = JSON.stringify(data)
    isObject = true
  }

  data = inHTMLData(data).trim()
  if (isObject) data = JSON.parse(data)

  return data
}
