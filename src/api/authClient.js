import axios from "axios";

const authClient = axios.create({
    baseURL: "http://localhost:5000/auth",
    timeout: 5000,
    headers: {"Content-Type": "application/json"}
})

export default authClient; 