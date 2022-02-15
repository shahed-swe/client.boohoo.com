import Axios from 'axios'
import { API } from '../Api'


const Login = async(data) => {
    const config =  {
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }
    
    return await Axios.post(`${API}/login`, data, config)
}

const Authentication = {
    Login
}

export default Authentication