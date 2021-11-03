const express = require("express");
//const {  } = require('../controller/category');
const {
  requireSignin,
  adminMiddleware,

} = require("../common-middleware/index");
const {
 createProduct,
  getProductsBySlug,
  getProductDetailsById,
  deleteProductById,
  getProducts,

} = require("../controllers/productCtrl");
const cloudinary = require('cloudinary').v2;
const multer = require("multer");
const { CloudinaryStorage } = require('multer-storage-cloudinary')// const multer = require("multer");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");

cloudinary.config({
  cloud_name: 'shankardhaka',
  api_key: '263245838243143',
  api_secret: '5UbPc_lVBJgj5bE5Utm_9V9YRic'
}); 

const storage =  new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "photos",
  allowedFormats: ['jpg', 'jpeg', 'png'],
  transformation: [{ width: 960, height: 960, crop: "limit" }],
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    callback(undefined, name);
  }
});

const upload = multer({storage: storage});

router.post( "/product/create",upload.array("productPictures"),
createProduct
);
router.get("/products/:slug", getProductsBySlug);
//router.get('/category/getcategory', getCategories);
router.get("/product/:productId", getProductDetailsById);
router.delete(
  "/product/deleteProductById",
  requireSignin,
  adminMiddleware,
  deleteProductById
 
);

// router.get("/productall",   getProductall);
router.get(
   "/getProducts",
  // requireSignin,
  // adminMiddleware,
  getProducts
);

module.exports = router;











// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null,  "images/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, shortid.generate() + "-" + file.originalname);
//   },
// });

// const upload = multer({storage });
