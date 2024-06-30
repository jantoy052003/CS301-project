import { useState } from "react";
import api from "../lib/api"

export const useEditPersonalInfo = (apiError) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [name, setName] = useState([])
    

    const editInfo = async () => {
        try {
            const res = await api.put(`/profile/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            // const data = {
            //     name: name,
            // }
        // setName(res.data.name)
        console.log("test")
        } catch (error) {
            //apiError("An error occurred while fetching Personal Information", error)
        }
    }
    return [editInfo]
}