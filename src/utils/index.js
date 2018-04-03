export const storage = {
  set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  get (key) {
    return JSON.parse(window.localStorage.getItem(key))
  }
}

export const z = (num, d) => {
  let res = num
  for (let i = 0; i < d; i++) {
    res = '0' + res
  }
  return res.slice(-d)
}
