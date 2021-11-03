import Cookie from "js-cookie";




export const isAuth = () => {
    const token = Cookie.get("token")
    const user = JSON.parse(localStorage.getItem("user"))
    return !!(token && user);

}

export const clearUser = () => {
    Cookie.remove("token")
    localStorage.removeItem("user")
}
