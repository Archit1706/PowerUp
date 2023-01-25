import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCalories24, getCalories7d } from "../../StaticData";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import "./Charts.css";

import { BACKEND_URL } from "../../StaticData";
import { AiFillRobot } from "react-icons/ai";

const CaloriesBurnt = () => {
    // console.log(getCalories24, getCalories7d);
    const weekArray = (array) => {
        const date = new Date();
        const count = 6 - date.getDay();
        for (let i = 0; i < count; i++) {
            array.shift();
        }
        return array;
    };
    const hourArray = (array) => {
        const date = new Date();
        console.log(date.getHours());
        const count = 23 - date.getHours();
        for (let i = 0; i < count; i++) {
            array.shift();
        }
        return array;
    };
    const [weekData, setWeekData] = useState({
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Weekly Calories Burnt",
                data: weekArray(JSON.parse(localStorage.getItem("cal7dArray"))),
                backgroundColor: [
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(0, 0, 0, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(0, 0, 0, 1)",
                ],
                borderWidth: 1,
            },
        ],
    });

    const [hourData, setHourData] = useState({
        labels: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
        ],
        datasets: [
            {
                label: "Hourly Calories Burnt",
                data: hourArray(
                    JSON.parse(localStorage.getItem("cal24hArray"))
                ), //getCalories24.data,
                backgroundColor: [
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(0, 0, 0, 0.2)",
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(0, 0, 0, 0.2)",
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(0, 0, 0, 0.2)",
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(0, 0, 0, 1)",
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(0, 0, 0, 1)",
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(0, 0, 0, 1)",
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
            },
        ],
    });
    /*useEffect(() => {
		fetch(`${BACKEND_URL}/api/info/getcalories`,{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: localStorage.getItem("email")
			}),
		})
      .then(res => res.json())
      .then(res => res.data)
			.then(res => setHourData({...hourData, data: res}))
      .catch(err =>console.log(err))
		},[]);
  console.log(hourData)*/
    return (
        <div className="bg-violet-50 -mt-4">
            <Link to="/chat/exercise">
                <button
                    className="fixed bottom-20 right-6 z-50 border-none outline-none bg-violet-500 text-white cursor-pointer p-4 rounded animate-bounce hover:scale-105 hover:bg-violet-600"
                    title="Chat with ExerciseBot"
                >
                    <AiFillRobot />
                </button>
            </Link>
            <div className="chartMenu">
                <p>Hourly Calories Burnt</p>
            </div>
            <div className="chartCard">
                <div className="chartBox border-2 border-violet-900 border-solid shadow-md shadow-violet-200">
                    <LineChart id="myChart" chartData={hourData} />
                </div>
            </div>
            <hr />
            <div className="chartMenu">
                <p>Weekly Calories Burnt</p>
            </div>
            <div className="chartCard">
                <div className="chartBox border-2 border-violet-900 border-solid shadow-md shadow-violet-200">
                    <BarChart id="myChart" chartData={weekData} />
                </div>
            </div>
            <div className="flex justify-center text-center">
                <button className="w-auto text-white bg-violet-500 hover:scale-105 ease-in-out duration-300 p-4 m-4 rounded-lg shadow-md shadow-violet-700">
                    Refresh
                </button>
            </div>
        </div>
    );
};

export default CaloriesBurnt;
