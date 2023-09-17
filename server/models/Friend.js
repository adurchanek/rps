import mongoose from "mongoose";

const FriendSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        picturePath: {
            type: String,
            default: "",
        },
        occupation: String,
        location: String,
    }, {timestamps: true});

module.exports = mongoose.model("Friend", FriendSchema)
