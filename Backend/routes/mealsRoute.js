require("dotenv").config();
const router = require("express").Router();
const Meal = require("../models/mealModel");
const axios = require("axios");
const User = require("../models/usersModel");

const APP_ID = process.env.APP_ID;
const FOOD_API_KEY = process.env.FOOD_API_KEY;

router.post("/add", async (req, res) => {
  const currentUser_id = req.body.userid;
  var date = new Date();
  date = date.toLocaleDateString();

  const name = req.body.name;
  const quantity = req.body.quantity;
  var calories = 0;
  var proteins = 0;
  var fats = 0;
  // for(var i=0;i<len;i++)
  // {
  // const quantity=parseInt(names[0].quantity);

  // const foodname=name;
  axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${FOOD_API_KEY}&ingr=${name}&nutrition-type=cooking`)
    .then(async function (response) {
      // console.log(response);
      var instancecalories = response.data.parsed[0].food.nutrients.ENERC_KCAL;
      var instanceproteins = response.data.parsed[0].food.nutrients.PROCNT;
      var instancefats = response.data.parsed[0].food.nutrients.FAT;
      instancecalories = instancecalories * quantity;
      instanceproteins = instanceproteins * quantity;
      instancefats = instancefats * quantity;
      calories = calories + instancecalories;
      fats = fats + instancefats;
      proteins = proteins + instanceproteins;


      // if(i==len-1)
      // {
      const newMeal = new Meal({ userid: currentUser_id, date, calories, proteins, fats });
      return res.json(await newMeal.save());
      // }

    }).catch(function (error) {
      console.log(error);
    });
  // }



});

router.post("/getdetails", async (req, res) => {
  // const type=req.body.type;
  var date = new Date();
  date = date.toLocaleDateString();
  const userid = req.body.userid;
  Meal.find({ userid: req.body.userid, date: date }, 'calories proteins fats', async (err, meals) => {
    if (err) {
      console.log(err);
    } else {
      let calsum = 0, prosum = 0, fatsum = 0;
      for (const meal of meals) {
        calsum += meal.calories
        prosum += meal.proteins
        fatsum += meal.fats
      }
      res.json({ calories: calsum, proteins: prosum, fats: fatsum });
    }
  })
});

router.post("/weeklyCals", async (req, res) => {
  // const type=req.body.type;
  var date = new Date();
  const userid = req.body.userid;
  Meal.find({ userid: req.body.userid }, 'date calories', async (err, meals) => {
    if (err) {
      console.log(err);
    } else {
      let calsum = []
      for (let i = 0; i < 6; i++) {
        let sum = 0;
        for (const meal of meals) {
          if (meal.date == date.toLocaleDateString()) {
            sum += meal.calories
          }
        }
        date.setDate(date.getDate() - 1);
        calsum.unshift(sum)
      }
      res.json({ sum: calsum, });
    }
  })
});

module.exports = router;

