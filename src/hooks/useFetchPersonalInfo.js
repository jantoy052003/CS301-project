import { useState } from "react";
import api from "../lib/api"

export const useFetchPersonalInfo = (apiError) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [name, setName] = useState([])
    const [last_name, setLastName] = useState([])
    const [email, setEmail] =useState([])

    const [street, setStreet] =useState([])
    const [city, setCity] =useState([])
    const [state, setState] =useState([])
    const [country, setCountry] =useState([])
    const [zip, setZip] =useState([])
    const [phone, setPhone] =useState([])

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

            setStreet(res.data.address[0].street)
            setCity(res.data.address[0].city)
            setState(res.data.address[0].state)
            setCountry(res.data.address[0].country)
            setZip(res.data.address[0].zip)
            setPhone(res.data.address[0].phone)

        } catch (error) {
            apiError("An error occurred while fetching Personal Information", error)
        }
    }
    return [setToken, token, setName, setLastName, setEmail, setStreet, setCity, setState, setCountry, setZip, setPhone, name, last_name, email, street, city, state, country, zip, phone, fetchInfo]
}