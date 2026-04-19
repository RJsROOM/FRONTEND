import axios from 'axios'


const instance= axios.create({
    baseURL: 'https://fakestoreapi.com',
    // withCredentials: true----this helps in jwt-tokenization
})


instance.interceptors.request.use(
    function (config){
        // do something before request is sent
        console.log("request-->", config)
        return config
    },
    function (error){
        // do something with request error
        return Promise.reject(error)
    }
)




instance.interceptors.response.use(
    function (response){
        // any status code that lie within the range of 2xx cause this function to trigger
        // can do anything with response data
        console.log("response-->", response)
        return response
    },
    function (error){
        // any status code that falls outside of 2xx cause this function to trigger
        // can do something from response error
        return Promise.reject(error);
    }
)


export default instance;