const router = require("express").Router();
const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware.js");

//register a new user
router.get("/ping", async (req, res) => {
    try {
      res.send({
        message: "pong",
        success: true,
        data: null,
      });
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });
router.post("/register", async (req, res) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.send({
          message: "User already exists",
          success: false,
          data: null,
        });
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
      const newUser = new User(req.body);
      await newUser.save();
      res.send({
        message: "User created successfully",
        success: true,
        data: null,
      });
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });

  // login user

router.post("/login", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (!userExists) {
      return res.send({
        message: "User does not exist",
        success: false,
        data: null,
      });
    }

    // if (userExists.isBlocked) {
    //   return res.send({
    //     message: "Your account is blocked , please contact admin",
    //     success: false,
    //     data: null,
    //   });
    // }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userExists.password
    );

    if (!passwordMatch) {
      return res.send({
        message: "Incorrect password",
        success: false,
        data: null,
      });
    }
    //here we are encrypting the userId and sending it as a token
    const jwt_secret = 'w4AKsO1dihm0Cggi';
    const token = jwt.sign({ userId: userExists._id }, jwt_secret, {
      expiresIn: "90d",
    });

    res.send({
      message: "User logged in successfully",
      success: true,
      email: userExists.email,
      id: userExists._id,
      name: userExists.name
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
});
router.post("/goals", async (req, res) => {
  try {
    console.log(req.body) //Doing it the correct was not updating properly
    User.updateOne({ email: req.body.email }, {$set: {weight: req.body.weight}}, function(err, res) {
    console.log(err);
  });
    User.updateOne({ email: req.body.email }, {$set: {height: req.body.height}}, function(err, res) {
    console.log(err);
  });
    User.updateOne({ email: req.body.email }, {$set: {stepGoal: req.body.stepGoal}}, function(err, res) {
    console.log(err);
  });
    User.updateOne({ email: req.body.email }, {$set: {calGoal: req.body.calGoal}}, function(err, res) {
    console.log(err);
  });
    User.updateOne({ email: req.body.email }, {$set: {weightGoal: req.body.weightGoal}}, function(err, res) {
    console.log(err);
  });
    User.updateOne({ email: req.body.email }, {$set: {veg: req.body.veg}}, function(err, res) {
    console.log(err);
  });
    User.updateOne({ email: req.body.email }, {$set: {vegan: req.body.vegan}}, function(err, res) {
    console.log(err);
  });
    User.updateOne({ email: req.body.email }, {$set: {condition: req.body.condition}}, function(err, res) {
    console.log(err);
  });
    res.send({
      message: "success",
      success: true,
      data: null,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
});

router.post('/find', async (req, res) => {
    try {
        const user = await User.findById(req.body.userid);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error searching user' });
    }
});
router.post('/buy', async (req, res) => {
    try {
        const user = await User.findById(req.body.userid);
        const points = Number(req.body.points);
        console.log(user, points)
        if (Number(user.points)>=points){
          user.points-=points
          user.save()
          res.status(200).json({
            status:'Purchase Successful. Please check your email.',
            data:true
          })
        } else {
          res.status(200).json({
            status:'Not Enough Credits',
            data:false
          })
        }
      
    } catch (error) {
        res.status(500).json({ message: 'Error searching user' });
    }
});
  
module.exports = router;