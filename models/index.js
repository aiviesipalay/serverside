const mongoose = require("mongoose");
const uri = "mongodb+srv://feverblue1990:HjElxx9qSLlTjVuU@cluster0.hrrdjsx.mongodb.net/?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };