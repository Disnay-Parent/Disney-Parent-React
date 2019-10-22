import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    //replace the local host api with the correct api from Elan

    return axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: token
        }
    })
};

