import axios, { AxiosResponse } from 'axios'
interface GET_RESPONSE {
    success: boolean;
    message: string;
    profile_image: string;
}
const URI = process.env.NEXT_PUBLIC_SERVER;
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
