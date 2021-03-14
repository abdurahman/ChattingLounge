const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chattingSchema = new Schema(
    {
        from_user: {
            type: String,
        },
        to_user: {
            type: String,
        },
        room: {
            type: String,
        },
        message: {
            type: String,
        },
        date: {
            type: Date,
            timestamps: true
        }

    });

let chatting = mongoose.model("chatting", chattingSchema);
module.exports = chatting;
