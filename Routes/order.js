
const express = require("express");

const { requireSignin, userMiddleware } = require("../common-middleware/index");
const { addOrder, getOrders, getOrder } = require("../controllers/order");
const router = require("express").Router();

router.post("/user/addOrder/create", requireSignin, userMiddleware, addOrder);
router.get("/user/getOrders", 
requireSignin, userMiddleware, 
getOrders);
router.post("/getOrder", requireSignin, userMiddleware, getOrder);


module.exports = router