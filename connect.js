const mongoose = require('mongoose');

const db = "mongodb+srv://pauthing01:mongodbPT@cluster0.sp3yp.mongodb.net/mangadb"

mongoose.connect(db).then(() => {
    console.log("Connected to database");
})

.catch(() => {
    console.log("Failed to connect database");
})

const filmSchema = new mongoose.Schema({
    Title: {type: String},
    Year: {type: String},
    Genre: {type: String}
});

const connect = mongoose.model('books', filmSchema);
module.exports = connect;