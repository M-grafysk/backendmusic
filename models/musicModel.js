const {model,Schema}= require('../connection');
const myschema= new Schema({
    title : String,
    thumbnail : String,
    audio : String,
    singername : String,
    companyname : String,
    lyrics : String,
    date : Date
});
module.exports= model('music', myschema);
