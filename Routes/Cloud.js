const cloudinary = require('cloudinary');
const dotenv = require('dotenv')
dotenv.config()
cloudinary.config({
Cloud_name=process.env.Cloud_name
cloud_API_Key=process.env.cloud_API_Key
cloud_API_Secret=process.env.cloud_API_Secret
})

module.exports = cloudinary;