const mongoose = require("mongoose");
const uri = "mongodb+srv://feverblue1990:3p42ow4HSnzuCfau@cluster0.wjv7nus.mongodb.net/?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };