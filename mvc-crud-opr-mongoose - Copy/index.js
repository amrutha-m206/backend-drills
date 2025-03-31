let express= require('express');
let mongoose=require('mongoose');

const { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate } = require('./App/controllers/web/userEnquiryController.js');
const enquiryRoutes = require('./App/routes/web/enquiryRoutes.js');
require('dotenv').config();
let app=express();

app.use(express.json());
app.use("/web/api/enquiry",enquiryRoutes);
//http://localhost:8000/web/api/enquiry/rnquiry-insert


mongoose.connect(process.env.DBURL).then(()=>{ //to ensure server starts only after database is connected
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log("Server running on port "+process.env.PORT);
    })
})



//.save() and .connect() in Mongoose return Promises, which resolve when the operation is successful or reject when an error occurs.


/*1. find() in MongoDB (Native Query)
👉 Used in MongoDB shell or Node.js with MongoDB driver.
👉 Returns a cursor (you need .toArray() to get actual data).

 2. find() in Mongoose (ODM for MongoDB)
👉 Used in Mongoose to query the database.
👉 Returns a Promise (no need for .toArray()).
*/
