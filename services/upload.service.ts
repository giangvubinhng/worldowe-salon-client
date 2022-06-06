import axios, { AxiosResponse } from 'axios'
interface GET_RESPONSE {
    success: boolean;
    message: string;
    profile_image: string;
}
const URI = 'http://localhost:5000'

export const uploadProfilePic = async (file: string | Blob) => {

    const formData = new FormData();
    formData.append('profile', file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
        withCredentials: true
    }
    try{
        const result = await axios.post(`${URI}/upload/profile`, formData, config)
        return result.data
    } catch(e: any){
        return e.reponse.data
    }

}

export const retrieveProfilePic = async(id: number | string) => {

    try{
        const result = await axios.get(`${URI}/upload/profile`, {params: {id}})
        if(result.status === 200){
            return `${URI}${result.data.profile_image}`
        }
    }
    catch(e: any){
        return e.response.data
    }

}