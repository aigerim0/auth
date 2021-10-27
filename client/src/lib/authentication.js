import Cookie from "js-cookie";


export  const authentication = (data) => {
    Cookie.set("token",data.token,{expires:1})
    localStorage.setItem("user",JSON.stringify(data.user))
}

export const isAuth = () => {
    const token = Cookie.get("token")
    const user = JSON.parse(localStorage.getItem("user"))
    return !!(token && user);

}

export const clearUser = () => {
    Cookie.remove("token")
    localStorage.removeItem("user")
}
