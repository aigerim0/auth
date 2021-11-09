import Cookie from 'js-cookie'

export const isAuth = () => {
  const token = Cookie.get('token')
  // eslint-disable-next-line no-undef
  const user = JSON.parse(localStorage.getItem('user'))
  return !!(token && user)
}

export const clearUser = () => {
  Cookie.remove('token')
  // eslint-disable-next-line no-undef
  localStorage.removeItem('user')
}
