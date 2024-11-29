import express from "express"
import userAuth from "../middlewares/userAuth.js"
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders } from "../controllers/order.controller.js"
import adminAuth from "../middlewares/authAdmin.middleware.js"

const orderRouter = express.Router()

// Admin features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status',adminAuth, updateStatus)

// Payment features
orderRouter.post('/place', userAuth, placeOrder)
orderRouter.post('/stripe', userAuth, placeOrderStripe)
orderRouter.post('/razorpay', userAuth, placeOrderRazorpay)

// User features
orderRouter.post('/userOrders', userAuth, userOrders)

export default orderRouter