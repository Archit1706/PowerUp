import React, { useState } from "react";
import { getCalories24, getCalories7d } from "../../StaticData";
import { Link } from "react-router-dom";
import { AiFillRobot } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";

import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
// import PieChart from '../../components/PieChart'
import "./Charts.css";

const CaloriesIntake = () => {
    // console.log(getCalories24, getCalories7d);
    const weekArray = (array) => {
        const date = new Date();
        const count = 6 - date.getDay();
        for (let i = 0; i < count; i++) {
            array.shift();
        }
        return array;
    };
    const [weekData, setWeekData] = useState({
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Weekly Calorie Intake",
                data: weekArray(
                    JSON.parse(localStorage.getItem("calIntake7d"))
                ), //getCalories7d.data,
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
                label: "Hourly Calorie Intake",
                data: JSON.parse(localStorage.getItem("foodCal")),
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

    return (
        <div className="bg-red-50 -mt-4">
            <Link to="/chat/diet">
                <button
                    className="fixed bottom-20 right-6 z-50 border-none outline-none bg-red-500 text-white cursor-pointer p-4 rounded animate-bounce hover:scale-105 hover:bg-red-600"
                    title="Chat with DietBot"
                >
                    <AiFillRobot />
                </button>
            </Link>

            <div className="flex justify-center items-center">
                <p className="font-bold text-md tracking-wide text-red-500">
                    Nutritional Stats of the day
                </p>
            </div>

            {window.innerWidth < 575 ? (
                <Carousel>
                    <div className="stat bg-white">
                        <div className="stat-title text-pink-700">
                            Calories Consumed
                        </div>
                        <div className="stat-value">
                            {Number(localStorage.getItem("foodCal")).toFixed(2)}
                            {" Cal"}
                        </div>
                    </div>

                    <div className="stat bg-white">
                        <div className="stat-title text-pink-700">Fats</div>
                        <div className="stat-value">
                            {Number(localStorage.getItem("foodFat")).toFixed(2)}
                            {" fats"}
                        </div>
                    </div>

                    <div className="stat bg-white">
                        <div className="stat-title text-pink-700">Proteins</div>
                        <div className="stat-value">
                            {Number(localStorage.getItem("foodPro")).toFixed(2)}
                            {" units"}
                        </div>
                    </div>
                </Carousel>
            ) : (
                <div className="flex justify-center p-4">
                    <div className="stats shadow">
                        <div className="stat bg-white">
                            <div className="stat-title text-pink-700">
                                Calories Consumed
                            </div>
                            <div className="stat-value">
                                {Number(localStorage.getItem("foodCal")).toFixed(2)}
                                {" Cal"}
                            </div>
                        </div>

                        <div className="stat bg-white">
                            <div className="stat-title text-pink-700">Fats</div>
                            <div className="stat-value">
                                {Number(localStorage.getItem("foodFat")).toFixed(2)}
                                {" fats"}
                            </div>
                        </div>

                        <div className="stat bg-white">
                            <div className="stat-title text-pink-700">
                                Proteins
                            </div>
                            <div className="stat-value">
                                {Number(localStorage.getItem("foodPro")).toFixed(2)}
                                {" units"}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <hr />
            <div className="chartMenu">
                <p>Weekly Calories Intake</p>
            </div>
            <div className="chartCard">
                <div className="chartBox border-2 border-red-900 border-solid shadow-md shadow-red-200">
                    <BarChart id="myChart" chartData={weekData} />
                </div>
            </div>
            <div className="flex justify-center text-center">
               
                <button
                    className="btn text-white bg-red-500 hover:scale-105 ease-in-out duration-300 p-4 m-4 rounded-lg shadow-md shadow-red-700 hover:bg-red-600"
                >
                    Refresh
                </button>

            </div>
        </div>
    );
};

export default CaloriesIntake;
