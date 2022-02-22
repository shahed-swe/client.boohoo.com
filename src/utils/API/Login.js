import Axios from 'axios'
import { API } from '../Api'


const Login = async(data) => {
    const config =  {
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }
    
    return await Axios.post(`${API}/auth/login`, data, config)
}

const Registration = async (data) => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
        }
    }

    return await Axios.post(`${API}/users`, data, config)
}

const Authentication = {
    Login,
    Registration
}

export default Authentication