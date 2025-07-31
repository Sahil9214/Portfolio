import { contactFormStore } from "@/lib/types";
import axios from "axios";

export const postApiCall = async(payload:contactFormStore)=>{
    try{
        const response = await axios.post('/api/contact',payload)
        return response
    }
    catch(error){
        throw error
    }
}