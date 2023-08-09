const mongoose  = require("mongoose");
const config = require

const connectDB = async () => {
    mongoose
    .connect(config.mongodb.url, config.mongodb.options)
    .then((data) => {
        console.log("Database connetion successfully!");
    })
    .catch((error) => {
        console.log("Database connetion error : ",error);
    });
};

module.exports = { connectDB };