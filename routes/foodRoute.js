const express = require("express");
const router = express.Router();
const Food = require("../models/foodModel");

router.route("/food").post((req,resp) => {
    const foodTime= new Date();
    const foodGr= req.body.foodGr;
    const treated= req.body.treated;
    const treatQuantity= req.body.treatQuantity;
    const newFoodEntry = new Food({foodTime, foodGr,treated,treatQuantity});

    newFoodEntry.save();
})

router.route("/foodlist").get((req,resp) => {
    Food.find()
        .then(foodEntry => resp.json(foodEntry))
});


module.exports = router;