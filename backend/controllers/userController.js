import User from "../models/userModel.js";

/** @type {import("express").RequestHandler} */
export const getUsersForSidebars = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        console.log("Users for sidebar fetched successfully");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error fetching users for sidebar:", error.stack);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
