const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware.js");
const User = require("../models/usersModel");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios")
const { google } = require("googleapis")


router.post("/getSteps", async (req, res) => {
  try {
    User.findOne({ email: req.body.email }, 'refreshToken', async (err, user) => {
      if (err) {
        console.log(err);
      } else {
        const code = await getAccess(user.refreshToken)
        let interval = 1;
        let timeframe = 24;
        if (req.body.duration == "7d") {
          interval = 24
          timeframe = 168
        }
        try {
          const result = await axios({
            method: "POST",
            headers: {
              authorization: "Bearer " + code.token
            },
            "Content-Type": "application/json",
            url: 'https://fitness.googleapis.com/fitness/v1/users/me/dataset:aggregate',
            data: {
              "aggregateBy": [{
                //"dataTypeName": "com.google.step_count.delta",
                "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
              }],
              "bucketByTime": { "durationMillis": (interval * 3600000) },
              "startTimeMillis": Date.now() - (timeframe * 3600000),
              "endTimeMillis": Date.now()
            }
          });
          let sum = 0;
          let stepsHourly = [];
          if (result.status === 200) {
            const stepArray = result.data.bucket
            for (const dataSet of stepArray) {
              for (const points of dataSet.dataset) {
                for (const steps of points.point) {
                  stepsHourly.push(steps.value[0].intVal);
                  sum += steps.value[0].intVal;
                }
                if (!points.point.length) {
                  stepsHourly.push(0)
                }
              }
            }
          }
          res.send({
            message: "success",
            data: stepsHourly,
            sum: sum,
            success: true
          })
        } catch (e) {
          console.log(e);
        }
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Couldn't get steps",
      data: error,
      success: false,
    });
  }
});
router.post("/getCalories", async (req, res) => {
  try {
    User.findOne({ email: req.body.email }, 'refreshToken', async (err, user) => {
      if (err) {
        console.log(err);
      } else {
        const code = await getAccess(user.refreshToken)
        let interval = 1;
        let timeframe = 24;
        if (req.body.duration == "7d") {
          interval = 24
          timeframe = 168
        }
        try {
          const result = await axios({
            method: "POST",
            headers: {
              authorization: "Bearer " + code.token
            },
            "Content-Type": "application/json",
            url: 'https://fitness.googleapis.com/fitness/v1/users/me/dataset:aggregate',
            data: {
              "aggregateBy": [{
                "dataTypeName": "com.google.calories.expended",
                //"dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
              }],
              "bucketByTime": { "durationMillis": (interval * 3600000) },
              "startTimeMillis": Date.now() - (timeframe * 3600000),
              "endTimeMillis": Date.now()
            }
          });
          let sum = 0;
          let calsHourly = []
          if (result.status === 200) {
            const calArray = result.data.bucket
            for (const dataSet of calArray) {
              for (const points of dataSet.dataset) {
                for (const cals of points.point) {
                  calsHourly.push(cals.value[0].fpVal)
                  sum += cals.value[0].fpVal;
                }
                if (!points.point.length) {
                  calsHourly.push(0)
                }
              }
            }
          }
          res.send({
            message: "success",
            data: calsHourly,
            sum: sum,
            success: true
          })
        } catch (e) {
          console.log(e);
        }
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Couldn't get steps",
      data: error,
      success: false,
    });
  }
});
router.post("/getGoals", async (req, res) => {
  try {
    User.findOne({ email: req.body.email }, 'weight height stepGoal calGoal weightGoal', (err, user) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send({
          message: "success",
          data: {
            weight: user.weight,
            height: user.height,
            stepGoal: user.stepGoal,
            calGoal: user.calGoal,
            weightGoal: user.weightGoal
          },
          success: true,
        });
      }
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Couldn't get steps",
      data: error,
      success: false,
    });
  }
});

async function getAccess(refreshToken) {
  const oauth2Client = new google.auth.OAuth2(
    `${process.env.GOOGLE_WEB_CLIENT_ID}.apps.googleusercontent.com`,
    `${process.env.GOOGLE_API_KEY}`,
    "https://bodywise.sidd065.repl.co/auth/getToken")
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  return await oauth2Client.getAccessToken();
};
module.exports = router;


