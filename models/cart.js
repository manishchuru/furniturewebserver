// const mongoose = require('mongoose');
// const cartSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     cartItems: [
//         {
//             product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//             quantity: { type: Number, default: 1 },
//             //price: { type: Number, required: true }
//         }
//     ]
// }, { timestamps: true });


// module.exports = mongoose.model('Cart', cartSchema);


















// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const CartSchema = new Schema({
//     userId: {
//         type: String,
//     },
//     items: [{
//         productId: {
//             type: String,
//         },
//         name: String,
//         quantity: {
//             type: Number,
//             required: true,
//             min: [1, 'Quantity can not be less then 1.'],
//             default: 1
//         },
//         price: Number
//     }],
//     bill: {
//         type: Number,
//         required: true,
//         default: 0
//     }
// });

// module.exports = Cart = mongoose.model('cart',CartSchema);





const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, default: 1 },
            //price: { type: Number, required: true }
        }
    ]
}, { timestamps: true });


module.exports = mongoose.model('Cart', cartSchema);