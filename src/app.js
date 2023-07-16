const express = require("express")
require("../src/db/conn")
const MensRanking = require("../src/models/mens");
const app = express()
const port = process.env.PORT || 4000;
app.use(express.json());
app.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);

      const insertMens =  await addingMensRecords.save();
      res.send(insertMens)
        res.status(201).send(insertMens);
    }
    catch (e) {
        console.log(e)
        res.status(400).send(e);
    }
})
app.get("/mens", async (req, res) => {
    try {
        const getMens=await MensRanking.find({});
      res.send(getMens);
        
    }
    catch (e) {
        console.log(e)
        res.status(400).send(e);
    }
})
app.patch("/mens/:id", async (req, res) => {
    try {
        const _id=req.params.id;
        const getMen=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
      res.send(getMen);
        
    }
    catch (e) {
        console.log(e)
        res.status(400).send(e);
    }
})
app.delete("/mens/:id", async (req, res) => {
    try {
        const _id=req.params.id;
        const getMen=await MensRanking.findByIdAndDelete(_id);
      res.send(getMen);
        
    }
    catch (e) {
        console.log(e)
        res.status(400).send(e);
    }
})
app.get("/", async (req, res) => {
    res.send("port connected");
})
app.listen(port, () => {
    console.log("connection is connected")
})