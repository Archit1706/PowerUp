import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import { BACKEND_URL } from "../StaticData";

export default function Goals() {
    const navigate = useNavigate();
    const [weight, setweight] = useState(undefined);
    const [height, setheight] = useState(undefined);
    const [stepGoal, setstepGoal] = useState(undefined);
    const [calGoal, setcalGoal] = useState(undefined);
    const [weightGoal, setweightGoal] = useState("");
    const [veg, setVeg] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [condition, setCondition] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(veg, vegan, condition);
            if (weight && height && stepGoal && calGoal && weightGoal) {
                let res = await fetch(`${BACKEND_URL}/api/users/goals`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: localStorage.getItem("email"),
                        weight: weight,
                        height: height,
                        stepGoal: stepGoal,
                        calGoal: calGoal,
                        weightGoal: weightGoal,
                        veg: veg,
                        vegan: vegan,
                        condition: condition,
                    }),
                });
                let resJson = await res.json();
                if (res.status === 200 && resJson.success) {
                    navigate("/signin");
                } else {
                    setMessage(resJson.message);
                }
            } else {
                setMessage("Please enter all the fields");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="text-gray-600 lg:mb-40 mb-72 my-4 bg-white">
            <div className=" px-5 h-screen m-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">
                        Setting{" "}
                        <span className="text-orange-500">your Goals.</span>
                    </h1>

                    <p className="leading-relaxed mt-4">
                        <Typewriter
                            options={{
                                strings: [
                                    "Your goals can be as difficult as you want them to be",
                                    "Keep a positive attitude",
                                    "Take necessary precautions and get regular checkups.",
                                    "Get enough sleep",
                                    "Eat a well-balanced diet",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 30,
                            }}
                        />
                    </p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-md font-medium title-font mb-5">
                        Your Goals
                    </h2>
                    <p style={{ color: "red" }}>{message}</p>
                    <div className="relative mb-4">
                        <label
                            htmlFor="weight"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Weight(kg)
                        </label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            min="10"
                            max="400"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={weight}
                            onChange={(e) => setweight(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="height"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Height(cm)
                        </label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            min="50"
                            max="250"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={height}
                            onChange={(e) => setheight(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="stepsGoal"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Daily Steps Goal
                        </label>
                        <input
                            type="number"
                            id="steps"
                            name="steps"
                            min="2000"
                            max="14000"
                            placeholder="7000-10000"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={stepGoal}
                            onChange={(e) => setstepGoal(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="calorieGoal"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Daily Calories burnt Goal
                        </label>
                        <input
                            type="number"
                            id="calorieGoal"
                            name="calorieGoal"
                            placeholder="1200-2000"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={calGoal}
                            onChange={(e) => setcalGoal(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="weightGoal"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Weight Goal
                        </label>
                        <input
                            type="number"
                            id="weightGoal"
                            min="15"
                            max="400"
                            name="weightGoal"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={weightGoal}
                            onChange={(e) => setweightGoal(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="condition"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Health Condition
                        </label>
                        <select
                            id="condition"
                            name="condition"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                        >
                            <option>None</option>
                            <option>Diabetes</option>
                            <option>High Blood Pressure</option>
                            <option>Low Blood Pressure</option>
                            <option>Cataract</option>
                            <option>Heart Disease</option>
                        </select>
                    </div>

                    <div className="flex justify-between flex-row w-full">
                        <div className="relative mb-4 flex flex-col justify-center">
                            <label
                                htmlFor="veg"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Veg
                            </label>
                            <input
                                type="checkbox"
                                id="veg"
                                name="veg"
                                className="checkbox checkbox-error"
                                value={veg}
                                onChange={() => setVeg(!veg)}
                            />
                        </div>
                        <div className="divider divider-horizontal justify-between">
                            OR
                        </div>
                        <div className="relative mb-4 flex flex-col justify-center">
                            <label
                                htmlFor="vegan"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Vegan
                            </label>
                            <input
                                type="checkbox"
                                id="vegan"
                                name="vegan"
                                className="checkbox checkbox-accent"
                                value={vegan}
                                onChange={() => setVegan(!vegan)}
                            />
                        </div>
                    </div>

                    <button
                        className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
                        onClick={handleSubmit}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </section>
    );
}
