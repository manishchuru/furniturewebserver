const express = require("express");
const { requireSignin, adminMiddleware } = require("../../common-middleware/index");
const {
  updateOrder,
  getCustomerOrders,
} = require("../../controllers/admin/orderadmin");
const router = express.Router();

router.post(`/order/update`,
//  requireSignin, adminMiddleware, 
 updateOrder);
router.get(
  `/order/getCustomerOrders`,
  requireSignin,
  adminMiddleware,
  getCustomerOrders
);

module.exports = router;

