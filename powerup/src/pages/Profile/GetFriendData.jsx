import React, { useEffect,useState } from "react"
import { BACKEND_URL } from "../../StaticData";
/*

'weight'
'height'
'stepGoal'
'calGoal'
'weightGoal'
'name' //for profedgeile pics with ui-avatars.com
'updatedAt' // to send health warning notifications (probably not need)
'cal24h' //Sum cals burnt in 24 hours
'step24h' //Sum steps taken in 24 hours
'foodCal' //Food cal intake for today
'foodPro' //food protien intake for today
'foodFat' //foot fat intake for today
'calIntake7d'
'friendArray'
*/
export default function GetFriendData(props) {
  useEffect(() => {
    async function fetchData() {
      const userid = props.id;
      let email = '';
      let res = await fetch(`${BACKEND_URL}/api/users/find`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userid: userid
        }),
      });
      let resJson = await res.json();
      console.log(resJson, userid, email)
      if (res.status === 200) {
        localStorage.setItem('friendweight', resJson.weight);
        localStorage.setItem('friendheight', resJson.height);
        localStorage.setItem('friendstepGoal', resJson.stepGoal);
        localStorage.setItem('friendcalGoal', resJson.calGoal);
        localStorage.setItem('friendweightGoal', resJson.weightGoal);
        localStorage.setItem('friendname', resJson.name);
        localStorage.setItem('friendemail', resJson.email);
        email = resJson.email;
      }//2
      props.update(resJson.data);
      res = await fetch(`${BACKEND_URL}/api/info/getCalories`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        }),
      });
      resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        localStorage.setItem('friendcal24h', resJson.sum);
      }//3
      props.update(resJson.data);
      res = await fetch(`${BACKEND_URL}/api/info/getSteps`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        }),
      });
      resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        localStorage.setItem('friendstep24h', resJson.sum);
      }//5
      props.update(resJson.data);
      res = await fetch(`${BACKEND_URL}/api/meals/getdetails`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userid: userid
        }),
      });
      resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        localStorage.setItem('friendfoodCal', resJson.calories);
      }//7
      props.update(resJson.data);
      res = await fetch(`${BACKEND_URL}/api/friend/if-competition`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userid: userid
        }),
      });
      resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        props.challenge(resJson.data);
      }
    }
    fetchData()
  }, [])
  return (
    <></>
  )
}