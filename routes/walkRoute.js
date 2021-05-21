const express = require("express");
const router = express.Router();
const Walk = require("../models/walkModel");


router.route("/walk").post((req,resp)=>{
    const walkDate = new Date()
    const walkDuration = parseInt(req.body.walkDuration);
    const pooped = req.body.pooped;
    const peed = req.body.peed;
    const newWalkEntry = new Walk({walkDate,walkDuration,pooped,peed})
    newWalkEntry.save();
})

router.route("/walklist").get((req,resp) => {
    Walk.find()
    .then(walkEntry => resp.json(walkEntry))
});


module.exports = router;