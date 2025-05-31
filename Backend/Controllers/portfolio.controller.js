import {Portfolio}  from '../Models/portfolio.model.js'
import { User } from '../Models/user.model.js'

export const createPortfolio = async (req, res) => {
    try {
        const {title, description, liveLink, codeLink, techStack} = req.body
        const img = req.file?.path
        const portfolio = await Portfolio.create({
            userId:req.user._id,
            title,
            description,
            img,
            liveLink,
            codeLink,
            techStack:techStack?.split(',') || []
        })
        const user = await User.findById(req.user._id)
        user.portfolios.push(portfolio._id)
        await user.save()
        return res.status(200).json(portfolio)
    } catch (error) {
        console.log(error);
        
    }
}
export const getAllPortfolio = async (req, res) => {
    try {
        const portfolios = await Portfolio.find({}).populate('userId', '-password').sort('createdAt')
        return res.status(200).json(portfolios)
    } catch (error) {
        console.log(error);
        
    }
}
export const findPortfolioById = async (req, res) => {
    try {
        const {id} = req.params
        const portfolio = await Portfolio.findById(id).populate('userId', '-password').sort('createdAt')
        return res.status(200).json(portfolio)
    } catch (error) {
        console.log(error);
        
    }
}
export const updatePortfolio = async (req, res) => {
    try {
        const {id} = req.params
        const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, req.body, {new:true, runValidators:true})
        return res.status(200).json(updatedPortfolio)
    } catch (error) {
        console.log(error);
    }
}


export const deletePortfolio = async (req, res) => {
    try {
        const {id} = req.params
        const deletedPortfolio = await Portfolio.findByIdAndDelete(id)
        return res.status(200).json(deletedPortfolio)
    } catch (error) {
        console.log(error);
    }
}

