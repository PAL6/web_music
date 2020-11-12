import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

export function getMethod(url, query = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: query
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        })
    })
}