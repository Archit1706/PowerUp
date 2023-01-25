const router = require("express").Router();
const User = require("../models/usersModel");
const openai = require('openai');
const axios = require("axios")

router.get("/test", async (req, res) => { // ${process.env.BACKEND_URL}/api/chat/test
  try{
      const result = await axios({
        method:"POST",
        "Content-Type": "application/json",
        url: `${process.env.BACKEND_URL}/api/users/buy`,
        data:{
        points: "3000",
        userid: '63ca9686e84428a6d612f506',
        }
      });
      console.log(result.data)
      res.send({
        message:"success",
        data:[],
        success:true
      })
    } catch(e){
      console.log(e);
    }
});

module.exports = router;


/*
router.get("/test", async (req, res) => { // ${process.env.BACKEND_URL}/api/chat/test
  try{
      const result = await axios({
        method:"GET",
        "Content-Type": "application/json",
        url: "${process.env.BACKEND_URL}/api/friend/search",
        data:{
          userid:"63c7ec5d9c7e7bff2bab7032",
        }
      });
      console.log(result.data)
      res.send({
        message:"success",
        data:[],
        success:true
      })
    } catch(e){
      console.log(e);
    }
});
*/

/*
const result = await axios({
        method:"POST",
        "Content-Type": "application/json",
        url: `${process.env.BACKEND_URL}/api/meals/add`,
        data:{
          name: "Roti",
        userid: '63c7acd80c57c2e2c694650b',
        quantity: 1,
        }
      });
      console.log(result.data)
      res.send({
        message:"success",
        data:[],
        success:true
      })
*/

/*
const result = await axios({
        method:"POST",
        "Content-Type": "application/json",
        url: `${process.env.BACKEND_URL}/api/friend/add`,
        data:{
          userid:"63c7ec5d9c7e7bff2bab7032",
          friendid:"63c7ef219c7e7bff2bab703b"
        }
      });
      console.log(result.data)
      res.send({
        message:"success",
        data:[],
        success:true
      })
    } catch(e){
      console.log(e);
    }
  */