import React, { useEffect,useState } from "react"
import { BACKEND_URL } from "./StaticData"
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
export default function GetData(props) {
  const [notified, setNotified] = useState(false)
  useEffect(() => {
    const hourSum = (array) =>{
      const date = new Date();
      let sum = 0;
      const count = 23-date.getHours();
      for (let i=count; i<24; i++){
        sum+=array[i]
      }
      return sum
    }
    const handleNotification = (text) => {
    if (!('Notification' in window)) {
      alert('This browser does not support notifications');
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted' && !notified) {
          new Notification(text);
          setNotified(true)
        }
      });
    }
    };
    props.update(1)
    async function fetchData() {
      const userid = localStorage.getItem("id");
      const email = localStorage.getItem("email");
      let updatedAt = ''
      //1
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
        localStorage.setItem('weight', resJson.weight);
        localStorage.setItem('height', resJson.height);
        localStorage.setItem('stepGoal', resJson.stepGoal);
        localStorage.setItem('calGoal', resJson.calGoal);
        localStorage.setItem('weightGoal', resJson.weightGoal);
        localStorage.setItem('name', resJson.name);
        localStorage.setItem('vegan',resJson.vegan)
        localStorage.setItem('veg',resJson.veg)
        localStorage.setItem('diabetic',resJson.diabetic)
        localStorage.setItem('points',resJson.points)
        localStorage.setItem('updatedAt', resJson.updatedAt)
        updatedAt=resJson.updatedAt
      }
      const date = new Date(updatedAt)
      if (Date.now() - date >= 7 * 24 * 60 * 60 * 1000) {
        handleNotification('You havent updated your health information in two weeks');
      }
      //2
      props.update(1)
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
        localStorage.setItem('cal24h', hourSum(resJson.data));
        localStorage.setItem("cal24hArray", JSON.stringify(resJson.data));
        
      }//3
      props.update(1)
      res = await fetch(`${BACKEND_URL}/api/info/getCalories`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          duration:'7d'
        }),
      });
      resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        localStorage.setItem('cal7d', resJson.sum);
        localStorage.setItem("cal7dArray", JSON.stringify(resJson.data));
      }//4
      props.update(1)
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
        localStorage.setItem('step24h', hourSum(resJson.data));
        localStorage.setItem("step24hArray", JSON.stringify(resJson.data));
      }//5
      props.update(1)
      res = await fetch(`${BACKEND_URL}/api/info/getSteps`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          duration:'7d'
        }),
      });
      resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        localStorage.setItem('step7d', resJson.sum);
        localStorage.setItem("step7dArray", JSON.stringify(resJson.data));
      }//6
      props.update(1)
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
        localStorage.setItem('foodCal', resJson.calories);
        localStorage.setItem('foodPro', resJson.proteins);
        localStorage.setItem('foodFat', resJson.fats);
      }//7
      props.update(1)
      res = await fetch(`${BACKEND_URL}/api/meals/weeklyCals`, {
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
        localStorage.setItem('calIntake7d', JSON.stringify(resJson.sum));
      }//8
      res = await fetch(`${BACKEND_URL}/api/friend/search`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userid: localStorage.getItem("id")
        }),
      });
      resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        localStorage.setItem('friendArray', JSON.stringify(resJson))
      }
    }
    fetchData()
  }, [])
  return (
    <></>
  )
}