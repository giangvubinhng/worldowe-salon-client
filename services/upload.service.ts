import axios, { AxiosResponse } from 'axios'
interface GET_RESPONSE {
    success: boolean;
    message: string;
    profile_image: string;
}
const URI = 'http://localhost:5000/upload'
const PICTURE_DB = 'http://localhost:5000/uploads/profiles'
interface FILE {
    file: string | Blob;
}

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
        const result = await axios.post(`${URI}/profile`, formData, config)
        return result.data
    } catch(e: any){
        return e.reponse.data
    }

}

export const retrieveProfilePic = async(id: number | string) => {

    try{
        const result = await axios.get(`${URI}/profile`, {params: {id}})
        if(result.status === 200){
            return `${PICTURE_DB}/${result.data.profile_image}`
        }
    }
    catch(e: any){
        return e.response.data
    }

}