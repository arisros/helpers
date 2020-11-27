/**
 * 
 * @param {string} url url with template interpolation somepharse={{value}}anotherKey={{anotherValue}}
 * @param {object} fields fields reflected key value for replacing template
 * @example ('somepharse={{value}}anotherKey={{anotherValue}}', {
 *  value: 'some_id',
 *  anotherValue: 'kaboom'
 * })
 */

const parseParamsInterpolation = (pharse, fields) => {
  const keys = pharse.match(/(\{\{[a-zA-Z]+\}\})/gi)
  return keys.reduce((prev, item) => {
    const key = /\{\{(\w+)\}\}/.exec(item)[1]
    const parsed = prev.replace(item, fields[key])
    return parsed
  }, pharse)
}

export default parseParamsInterpolation
