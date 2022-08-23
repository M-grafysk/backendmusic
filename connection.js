const mongoose = require('mongoose');
const dbname='mytestdb23';
const url=`mongodb+srv://MuskanDwivedi:Muskan12@cluster0.bdy4p6e.mongodb.net/musicappp?retryWrites=true&w=majority`
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});
module.exports=mongoose;