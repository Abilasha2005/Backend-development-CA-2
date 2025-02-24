const {connect} = require ('mongoose');
const connectDB = async (url)=>{
    try{
        await connect(url)
        console.log('Connected to the Database')
    }
    catch (error){
        console.log('Error connecting to the Database')
        console.log(error);
    }
}

module.exports = connectDB;
