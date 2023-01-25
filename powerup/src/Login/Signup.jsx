import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import { BACKEND_URL, frontend_half_url } from "../StaticData";

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [pass, setPass] = useState(undefined);
    const [repeat, setRepeat] = useState(undefined);
    const [message, setMessage] = useState("");

    const clientId = process.env.REACT_APP_CLIENT_ID;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (pass == repeat && name && email && pass && repeat) {
                let res = await fetch(`${BACKEND_URL}/api/users/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: pass,
                    }),
                });
                let resJson = await res.json();
                if (res.status === 200) {
                    localStorage.setItem("email", email);
                    window.location.replace(
                        `https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.activity.read&prompt=consent&state=%7B%7D&response_type=code&client_id=${clientId}.apps.googleusercontent.com&redirect_uri=https%3A%2F%2F${frontend_half_url}%2Fauth%2FgetToken`
                    );
                } else {
                    setMessage(resJson.message);
                }
            } else {
                setMessage("Entered passwords did not match");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="text-gray-600 md:mb-36 mb-60 md:mt-8">
            <div className="container px-5 h-screen m-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">
                        Welcome to{" "}
                        <span className="text-orange-500">Power Up!</span>
                    </h1>

                    <p className="leading-relaxed mt-4">
                        <Typewriter
                            options={{
                                strings: [
                                    "Track progress and set goals for fitness and nutrition",
                                    "Access to personalized workout plans and meal plans.",
                                    "Ability to log and track food intake and monitor calorie intake",
                                    "Integration with wearable fitness technology for accurate tracking",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 30,
                            }}
                        />
                    </p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                        Sign Up
                    </h2>
                    <p style={{ color: "red" }}>{message}</p>
                    <div className="relative mb-4">
                        <label
                            htmlFor="full-name"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="email"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="password"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="cpassword"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="cpassword"
                            name="cpassword"
                            className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={repeat}
                            onChange={(e) => setRepeat(e.target.value)}
                        />
                    </div>

                    <button
                        className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
                        onClick={handleSubmit}
                    >
                        Signup
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                        Already a user?{" "}
                        <span>
                            <Link
                                className="text-orange-500 underline"
                                to="/signin"
                            >
                                Signin
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
