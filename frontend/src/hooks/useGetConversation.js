import { Error } from "mongoose";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/users", {
                    headers: {
                        "accepts": "application/json"
                    }
                })

                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                if (res.ok) {
                    setConversations(data);
                    // console.log(data); // Log the fetched data, not the state
                }
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getConversations();
    }, [])
    return { loading, conversations }
}

export default useGetConversation