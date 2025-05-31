import { User } from "../Models/user.model.js";

export const getLoggedInUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
    }
}
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({})
        return res.status(200).json(users)
    } catch (error) {
        console.log(error);
        
    }
}
export const findUserById = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
    }
}
export const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new:true, runValidators:true})
        return res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error);
    }
}

