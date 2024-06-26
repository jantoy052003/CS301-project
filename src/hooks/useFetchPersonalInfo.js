import { useState } from "react";
import api from "../lib/api"

export const useFetchPersonalInfo = (apiError) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [name, setName] = useState([])
    const [last_name, setLastName] = useState([])
    const [email, setEmail] =useState([])

    //Fetch Personal Info
    const fetchInfo = async () => {
        try {
            const res = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setName(res.data.profile[0].name)
            setLastName(res.data.profile[0].last_name)
            setEmail(res.data.profile[0].email)
        } catch (error) {
            apiError("An error occurred while fetching Personal Information", error)
        }
    }
    return [setToken, token, name, last_name, email, fetchInfo]
}