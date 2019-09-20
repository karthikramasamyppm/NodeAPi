const mongoose = require('mongoose');

//mongoose.connect('mongodb://karthik:karthik123$@ds123499.mlab.com:23499/testemployee', (err) => {
mongoose.connect('mongodb+srv://karthik12:karthik12@cluster0-kakaw.mongodb.net/test', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;


