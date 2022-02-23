import { API } from "../Api";
import Axios from 'axios'

const Index = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    return await Axios.get(`${API}/products/categories`, config)
}


const Category = async(category) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    return await Axios.get(`${API}/products/category/${category}`, config)
}


const Categories = {
    Index,
    Category
}


export default Categories