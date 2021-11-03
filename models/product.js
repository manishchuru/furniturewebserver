// // const mongoose = require('mongoose');
// // const productSchema = new mongoose.Schema({
// //     name: { 
// //         type: String, 
// //        // required: true, 
// //         trim: true 
// //     },
// //     slug: { 
// //         type: String, 
// //        required: false
// //     },
// //     price: { 
// //         type: Number, 
// //        // required: true 
// //     },
// //     quantity: {
// //         type: Number,
// //       //  required: true
// //     },
// //     description: {
// //         type: String,
// //   //      required: true,
// //         trim: true
// //     },
// //     offer: { type: Number }, 
// //    // photo : {data:Buffer, contentType: String},
// //    // productPictures:{data:Buffer, contentType: String} ,
// //     filename:{type:String,
// //         unique:true,
// //     },
// //     productPictures: [
// //         { img: { type: String } }
// //     ],
// //     // imageUrl: {
// //     //     type: String,
// //     //     required: true
// //     //   },
// //     reviews: [
// //         {
// //             userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
// //             review: String
// //         }
// //     ],
// //     category: {type:String, ref: 'Category', required: true },
// //     createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
// //     updatedAt: Date,

// // }, { timestamps: true });


// // module.exports = mongoose.model('Product', productSchema);









// // const mongoose = require('mongoose');
// // const Schema = mongoose.Schema;

// // const ItemSchema = new Schema({
// //     title: {
// //         type: String,
// //         required: true
// //     },
// //     description: {
// //         type: String,
// //         required: true
// //     },
// //     category:{
// //         type: String,
// //         required: true
// //     },
// //     price: {
// //         type: Number,
// //         required: true
// //     },
// //     date_added: {
// //         type: Date,
// //         default: Date.now
// //     },
// // });

// // module.exports = Item = mongoose.model('item',ItemSchema);



// // const mongoose = require('mongoose');
// // const productSchema = new mongoose.Schema({
// //     name: { 
// //         type: String, 
// //         required: true, 
// //         trim: true 
// //     },
// //     slug: { 
// //         type: String, 
// //         required: true
// //    //     unique: true 
// //     },
// //     price: { 
// //         type: Number, 
// //         required: true 
// //     },
// //     quantity: {
// //         type: Number,
// //         required: true
// //     },
// //     description: {
// //         type: String,
// //         required: true,
// //         trim: true
// //     },
// //     offer: { type: Number },
// //     productPictures: [
// //         { img: { type: String } }
// //     ],
// //     reviews: [
// //         {
// //             userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
// //             review: String
// //         }
// //     ],
// //     category: { type:String, ref: 'Category', required: true },
// //     createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
// //     updatedAt: Date,

// // }, { timestamps: true });


// // module.exports = mongoose.model('Product', productSchema);







// const mongoose = require('mongoose');
// const productSchema = new mongoose.Schema({
//     name: { 
//         type: String, 
//         required: true, 
//         trim: true 
//     },
//     slug: { 
//         type: String, 
//         required: true, 
//         unique: true 
//     },
//     price: { 
//         type: Number, 
//         required: true 
//     },
//     quantity: {
//         type: Number,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     offer: { type: Number },
//     productPictures: [
//         { img: { type: String } }
//     ],
//     reviews: [
//         {
//             userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
//             review: String
//         }
//     ],
//     category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
//     createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     updatedAt: Date,

// }, { timestamps: true });


// module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    slug: { 
        type: String
        // required: true, 
        // unique: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    offer: { type: Number },
    productPictures: [
        { img: { type: String } }
    ],
    reviews: [
        {
            userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String
        }
    ],
    category: { type:String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedAt: Date,

}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);