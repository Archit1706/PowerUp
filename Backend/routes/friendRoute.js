const router = require("express").Router();
const User = require("../models/usersModel");

router.post("/add", async (req, res) => {
  try {
    const user = await User.findById(req.body.userid);
    user.friend = [...user.friend, req.body.friendid];
    await user.save();
    res.status(200).send({
      message: "Friend added",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to add a friend",
      success: false,
    });
  }
});

router.post('/search', async (req, res) => {
    try {
        const user = await User.findById(req.body.userid);
        const userIds = user.friend;
        const users = await User.find({ _id: { $in: userIds } });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error searching friends' });
    }
});

router.post('/competition',async(req,res)=>{
    try{
        const user = await User.findById(req.body.userid);
        const friend = await User.findById(req.body.friendid);
        const id = req.body.friendid
        const email = friend.email
        const info = {
              _id: id,
              email: email
          }

        user.competition = [...user.competition, info]
        await user.save();
        res.status(200).send({
          message: "Competition added",
          success: true,
        });
    }catch (error) {
        res.status(500).send({
        message: "Failed to add Competition",
        success: false,
    });
    }
})

router.post('/if-competition',async(req,res)=>{
    try{
        const user = await User.findById(req.body.userid);
        if(user.competition.length){
          const emails = user.competition.map(competitor => competitor.email);
          res.status(200).send({
            message:"Competitons are available",
            data:emails,
            success: true,
          });
        }
        else{
          res.status(200).send({
            message: "There are no competitons",
            data:false,
            success: true,
          });
        }
    }catch (error) {
        res.status(500).send({
        message: "Failed to check",
        success: false,
    });
    }
})


module.exports = router;

// name, refreshToken, stepGoal, calGoal

/*
[
  {
      _id: id of friend,
      email: of friend
  },
  {
      _id: id of friend,
      email: of friend
  }
]
*/