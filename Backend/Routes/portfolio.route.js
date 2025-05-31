import e from "express"
import { createPortfolio, deletePortfolio, findPortfolioById, getAllPortfolio, updatePortfolio } from "../Controllers/portfolio.controller.js"
import { protect } from "../Middlewares/protect.js"
import { upload } from "../Middlewares/fileUpload.js"

const portfolioRouter = e.Router()
portfolioRouter.post('/',protect, upload.single('image'), createPortfolio)
portfolioRouter.get('/',protect, getAllPortfolio)
portfolioRouter.get('/:id',protect, findPortfolioById)
portfolioRouter.put('/:id',protect, updatePortfolio)
portfolioRouter.delete('/:id',protect, deletePortfolio)


export default portfolioRouter