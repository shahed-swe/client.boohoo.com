import jwt_decode from "jwt-decode"

export const isAuthenticate = () => {
    const token = localStorage.getItem("token")
    if (token) {
        const user = jwt_decode(token)
        if (user) {
            return user
        } else {
            return false
        }
    }
}