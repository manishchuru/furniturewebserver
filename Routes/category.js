// const router = require('express').Router()
// const categoryCtrl = require('../controllers/categoryCtrl')
// // const auth = require('../middleware/auth')
// // const authAdmin = require('../middleware/authAdmin')


// router.route('/category')
//     .get(categoryCtrl.getCategories)
//     .post( categoryCtrl.createCategory)

// router.route('/category/:id')
//     .delete(categoryCtrl.deleteCategory)
//     .put(categoryCtrl.updateCategory)


// module.exports = router





const express = require("express");
// const {
//   addCategory,
//   getCategories,
//   updateCategories,
//   deleteCategories,
// } = require("../controllers/category");
const router = express.Router();
const { requireSignin, adminMiddleware} = require("../common-middleware/index");
const {addCategory,getCategories,getcategoryBySlug}  = require('../controllers/categoryCtrl')
router.post( "/category/create",addCategory);
router.get( "/category/getcate",getCategories);
router.get( "/category/:slug",getcategoryBySlug);
//router.get( "/category/getcate/:slug",getCategoriesbyslug);
//router.get( "/category/:slug",getCategoriesbyid);
module.exports = router;



























// const express = require("express");
// const {
//   addCategory,
//   getCategories,
//   updateCategories,
//   deleteCategories,
// } = require("../controllers/categoryCtrl");
// const {
//   requireSignin,
//   adminMiddleware,

// } = require("../common-middleware");
// const router = express.Router();
// const shortid = require("shortid");
// const path = require("path");
// const multer = require("multer");

// router.post(
//   "/category/create",
//   requireSignin,
//   superAdminMiddleware,
//   upload.single("categoryImage"),
//   addCategory
// );
// router.get("/category/getcategory", getCategories);
// router.post(
//   "/category/update",
//   requireSignin,
//   superAdminMiddleware,
//   upload.array("categoryImage"),
//   updateCategories
// );
// router.post(
//   "/category/delete",
//   requireSignin,
//   superAdminMiddleware,
//   deleteCategories
// );

// module.exports = router;













// // // const express = require("express");
// // // const {
// // //   addCategory,
// // //   getCategories,
// // //   updateCategories,
// // //   deleteCategories,
// // // } = require("../controllers/category");
// // // const {
// // //   requireSignin,
// // //   adminMiddleware

// // // } = require("../common-middleware");
// // // const router = express.Router();

// // // router.post(
// // //   "/category/create",
// // //   requireSignin,
// // //   addCategory
// // // );
// // // router.get("/category/getcategory", getCategories);
// // router.post(
// //   "/category/update",
// //   requireSignin,
// //   updateCategories
// // );
// // router.post(
// //   "/category/delete",
// //   requireSignin,
// //   deleteCategories
// // );

// // module.exports = router;








// // const express = require("express");
// // const {
// //   addCategory,
// //   getCategories,
// //   updateCategories,
// //   deleteCategories,
// // } = require("../controllers/category");
// // const {
// //   requireSignin,
// //   adminMiddleware
// // } = require("../common-middleware");
// // const router = express.Router();
// // const shortid = require("shortid");


// // router.post(
// //   "/category/create",
// //   requireSignin,

// //   addCategory
// // );
// // router.get("/category/getcategory", getCategories);
// // router.post(
// //   "/category/update",
// //   requireSignin,
// //   updateCategories
// // );
// // router.post(
// //   "/category/delete",
// //   requireSignin,
// //   deleteCategories
// // );

// // module.exports = router;




