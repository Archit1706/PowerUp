import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import { BACKEND_URL } from "../StaticData";

export default function Signin() {
    localStorage.clear();
    const [email, setEmail] = useState(undefined);
    const [pass, setPass] = useState(undefined);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pass);
        try {
            if (email && pass) {
                let res = await fetch(`${BACKEND_URL}/api/users/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: pass,
                    }),
                });

                let resJson = await res.json();
                console.log(resJson);
                if (res.status === 200 && resJson.success) {
                    localStorage.setItem("name", resJson.name);
                    localStorage.setItem("email", resJson.email);
                    localStorage.setItem("id", resJson.id);
                    navigate("/dashboard");
                } else {
                    /*FAILED LOGIC*/
                    setMessage(resJson.message);
                }
            }
        } catch (err) {
            console.log(err);
            /*LOGIN FAILED LOGIC*/
        }
    };
    return (
        <section className="text-gray-600">
            <div className="container px-5 h-screen m-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">
                        Welcome back{" "}
                        <span className="text-orange-500">User!</span>
                    </h1>
                    <p className="leading-relaxed mt-4">
                        <Typewriter
                            options={{
                                strings: [
                                    "We're glad to see you again.",
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
                        Signin
                    </h2>
                    <p style={{ color: "red" }}>{message}</p>
                    <div className="relative mb-4">
                        <label
                            for="email"
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
                            hmtlFor="password"
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

                    <button
                        className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
                        onClick={handleSubmit}
                    >
                        Signin
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                        New user?{" "}
                        <span>
                            <Link
                                className="text-orange-500 underline"
                                to="/signup"
                            >
                                Signup
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
