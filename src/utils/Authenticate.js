import jwt_decode from "jwt-decode"

export const isAuthenticate = () => {
    const token = localStorage.getItem("token")
    if (token) {
        const user = jwt_decode(token)
        console.log(user)
        if (user) {
            return true
        } else {
            return false
        }
    }
}