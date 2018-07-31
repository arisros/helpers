function consistentArray(a) {
  let b = [] // save the keys from array
  let c = [] // return data array
  a.forEach(e => b = mergeArray(b, Object.keys(e)))
  c = a.map(e => {
    let r = {}
    b.forEach(d => r[d] = e[d] ? e[d] : null)
    return r
  })
  return c
}

function mergeArray(e, a) {
  return e.concat(...a)
}

