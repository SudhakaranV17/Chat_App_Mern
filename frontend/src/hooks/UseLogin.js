import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const UseLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data);
            console.log("logged");
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { loading, login }
}

export default UseLogin

function handleInputErrors(username, password) {
    if (!username || !password) {
        toast.error("Please Fill in all the Fields.")
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be atleast 6 characters.")
        return false;
    }
    return true
}