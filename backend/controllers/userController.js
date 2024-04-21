import User from "../models/userModel.js";

/** @type {import("express").RequestHandler} */
export const getUsersForSidebars = async (req, res) => {
    try {
        const loggedInUsers = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUsers } }).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in  getting users for sidebar: ", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
