const {model,Schema}= require('../connection');
const myschema= new Schema({
    email : String,
    username : String,
    password : Number
});
module.exports= model('users', myschema);
