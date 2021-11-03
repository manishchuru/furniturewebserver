const Cart = require('../models/cart')

exports.cart = async () => {
    const carts = await Cart.find().populate({
        path: "items.gameId",
        select: "name price total"
    });
    return carts[0];
}

exports.addItem = async payload => {
    const newItem = await Cart.create(payload);
    return newItem
}