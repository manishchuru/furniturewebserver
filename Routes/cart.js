// const express = require("express");
// const {
//   addItemToCart,
//   addToCart,
//   getCartItem,
//   removeCartItems
//  // getCartItembyid,
// } = require("../controllers/cart");
// const { requireSignin, userMiddleware } = require("../common-middleware/index");
// const router = express.Router();

// router.post(
//   "/user/cart/addtocart",
//   requireSignin,
//   userMiddleware,
//   addItemToCart
// );
// //router.post('/user/cart/addToCartByLogin', requireSignin, userMiddleware, addToCart);
// router.get("/user/getCartItems", requireSignin, userMiddleware, getCartItem);
// //router.get("/user/getCartItemss", requireSignin, userMiddleware,getCartItembyid);

// router.post(
//   "/user/cart/removeItem",
//   requireSignin,
//   userMiddleware,
//   removeCartItems
// );

// module.exports = router;




const express = require("express");
const {
  addItemToCart,
  addToCart,
  getCartItems,
  removeCartItems,
} = require("../controllers/cart");
const { requireSignin, userMiddleware } = require("../common-middleware/index");
const router = express.Router();

router.post(
  "/user/cart/addtocart",
  requireSignin,
  userMiddleware,
  addItemToCart
);
//router.post('/user/cart/addToCartByLogin', requireSignin, userMiddleware, addToCart);
router.get("/user/getCartItems", requireSignin, userMiddleware, getCartItems);
//new update
router.delete(
  "/user/cart/removeItem",
  requireSignin,
  userMiddleware,
  removeCartItems
);

module.exports = router;