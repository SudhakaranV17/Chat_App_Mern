import express from "express";
import Conversation from "../models/coversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


/** @type {import("express").RequestHandler} */
export const sendMessage = async (req, res) => {
    try {
        // GETTING COVERSATION AND MESSAGES FROM USERS
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        // SAVE COVERSATION AND MESSAGE TO DATABASE
        await Promise.all([conversation.save(), newMessage.save()])
        res.status(201).json(newMessage)

        // SOCKET IO FUNCTIONALITY for instant messages
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverId) {
            // send events to specific client
            // 'newMessage is an event passing to frontend'
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }


    } catch (error) {
        console.log("Error in  sending message: ", error.message);
        res.status(500).json({ error: `Error on Sending Message ${error.message}` });
    }

}

/** 
 * 
 * @type {import("express").RequestHandler} 
 * */
export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;  // ID of the other user in the conversation
        const userId = req.user._id;  // ID of the current user

        // Find the conversation involving both users
        const conversation = await Conversation.findOne({
            participants: { $all: [userId, userToChatId] },
        }).populate({
            path: 'messages',
            match: {
                $or: [
                    { senderId: userId, deletedForSender: false },
                    { receiverId: userId, deletedForReceiver: false }
                ]
            }
        });

        if (conversation) {
            // Send the filtered messages to the client
            res.status(200).json(conversation.messages);
        } else {
            res.status(404).json({ error: "Conversation not found" });
        }

    } catch (error) {
        console.error("Error in retrieving messages:", error.message);
        res.status(500).json({ error: `Error in retrieving messages: ${error.message}` });
    }
};

/** 
 * 
 * @type {import("express").RequestHandler} 
 * */
export const clearMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate('messages');

        if (conversation) {
            const updateMessages = conversation.messages.map(async (message) => {
                if (message.senderId.toString() === senderId.toString()) {
                    return Message.findByIdAndUpdate(message._id, { deletedForSender: true });
                } else if (message.receiverId.toString() === senderId.toString()) {
                    return Message.findByIdAndUpdate(message._id, { deletedForReceiver: true });
                }
            });

            await Promise.all(updateMessages);

            res.status(200).json({ message: 'Messages cleared for the user' });
        } else {
            res.status(404).json({ error: "Conversation not found" });
        }

    } catch (error) {
        console.error("Error in clearing messages:", error.message);
        res.status(500).json({ error: `Error in clearing messages: ${error.message}` });
    }

}
