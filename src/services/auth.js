import { navigate } from 'gatsby';
const fetch = require('node-fetch');

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("ats-system-user")
    ? JSON.parse(window.localStorage.getItem("ats-system-user"))
    : {}

const setUser = user =>
  window.localStorage.setItem("ats-system-user", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  fetch(`${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/login`, {
    method: "POST",
    mode: "cors",
    redirect: 'follow',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ username: username, password: password })
  })
  .then(result => result.json())
  .then(json => {
    if (!json.errors) {
      setUser(json.user);
    }
  })
  .catch(err => console.log(err))
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = function() {
  setUser({})
  fetch('http://localhost:80/logout', {
    mathod: "GET",
    mode: "cors",
    redirect: 'follow'
  })
  .then(navigate('/'))
  .catch(err => console.log(err))
}
