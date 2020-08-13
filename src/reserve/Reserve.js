const { Schema, model } = require('mongoose');
const timestamps = require('mongoose-timestamp');

const ReserveSchema = new Schema({
    session: {
        type: String,
        required: true,
    },
    email: String,
    username: String,
    sku: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

ReserveSchema.plugin(timestamps);
module.exports = model('reserve', ReserveSchema);