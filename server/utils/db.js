const mongoose = require("mongoose");
require("dotenv").config();  

const main = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(" MongoDB Connected Successfully");
    } catch (error) {
        console.error(" MongoDB Connection Error:", error);
    }
};

module.exports = main;
