import { API } from "../Api";
import Axios from 'axios'

const Index = async() => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }
    return await Axios.get(`${API}/products`, config)
}

const Single = async(id) => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }

    return await Axios.get(`${API}/products/${id}`, config)
}


const Limit = async(number) => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }

    return await Axios.get(`${API}/products?limit=${number}`, config)
}


const Products = {
    Index,
    Single,
    Limit
}


export default Products