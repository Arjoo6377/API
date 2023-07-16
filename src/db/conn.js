const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/olymics",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    console.log("mongoose connect");
})
.catch((e) => {
    console.log("no connection")
})