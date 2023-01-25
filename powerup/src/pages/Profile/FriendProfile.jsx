import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RadialChart from "../../components/RadialChart";
import BarChart from "../../components/BarChart";
import GetFriendData from "./GetFriendData";
import GetData from "/src/GetData";

import { BACKEND_URL } from "../../StaticData";

const Profile = (props) => {
    const navigate = useNavigate();
    const id = window.location.pathname.slice(7);
    const [update, setUpdate] = useState(1);
    const [challengeAccepted, setChallengeAccepted] = useState(false);
    const [isFriend, setFriend] = useState(false);
    
    
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    for (const friend of JSON.parse(localStorage.getItem("friendArray"))){
      console.log(friend)
      if (friend._id==id){
        setFriend(true);
        break;
      }
    }
  }, []);
    const handleClick = (e) => {
        e.preventDefault();

        if (isFriend) {
            setChallengeAccepted(true);
        } else {
            fetch(`${BACKEND_URL}/api/friend/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userid: localStorage.getItem("id"),
                    friendid: id,
                }),
            });
        }
        navigate("/users/" + id);
        /*fetch(`${BACKEND_URL}/api/friend/competition`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userid: id
      friendid: id
    }),
  });*/
    };

    // friend
    const data1 = {
        labels: ["Steps", "Calories"],
        datasets: [
            {
                label: "Calories Burnt and Steps Covered",
                data: [
                    localStorage.getItem("friendstep24h"),
                    localStorage.getItem("friendcal24h"),
                ], //friendstep24h friendcal24h
                backgroundColor: [
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: ["rgba(255, 26, 104, 1)", "rgba(54, 162, 235, 1)"],
                borderWidth: 1,
            },
        ],
    };

    // self
    const data2 = {
        labels: ["Steps", "Calories"],
        datasets: [
            {
                label: "Calories Burnt and Steps Covered",
                data: [
                    localStorage.getItem("step24h"),
                    localStorage.getItem("cal24h"),
                ], //step24h cal24h
                backgroundColor: [
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: ["rgba(255, 26, 104, 1)", "rgba(54, 162, 235, 1)"],
                borderWidth: 1,
            },
        ],
    };

    return (
        <><GetData update={setUpdate}/>
            {" "}
            <GetFriendData
                id={id}
                challenge={setChallengeAccepted}
                update={setUpdate}
            />
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-zinc-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-center">
                        <h6 className="text-zinc-700 text-xl font-bold">
                            Member Account
                        </h6>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 className="text-zinc-400 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-zinc-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        disabled="true"
                                        className="border-0 px-3 py-3 placeholder-zinc-300 text-zinc-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={localStorage.getItem(
                                            "friendname"
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-zinc-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        disabled="true"
                                        className="border-0 px-3 py-3 placeholder-zinc-300 text-zinc-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={localStorage.getItem(
                                            "friendemail"
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-zinc-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Height
                                    </label>
                                    <input
                                        type="text"
                                        disabled="true"
                                        className="border-0 px-3 py-3 placeholder-zinc-300 text-zinc-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={localStorage.getItem(
                                            "friendheight"
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-zinc-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Weight
                                    </label>
                                    <input
                                        type="text"
                                        disabled="true"
                                        className="border-0 px-3 py-3 placeholder-zinc-300 text-zinc-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={localStorage.getItem(
                                            "friendweight"
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-zinc-300" />

                        <h6 className="text-zinc-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Stats
                        </h6>

                        <div className="container mx-auto">
                            <div className="flex flex-wrap flex-row items-center justify-center gap-4 py-8">
                                <div className="max-w-[200px] bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500">
                                    <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg justify-between">
                                        <div className="mt-4">
                                            <h3 className="text-black text-md font-bold tracking-widest title-font mb-1 uppercase">
                                                Calories Intake
                                            </h3>
                                        </div>
                                        <p className="block relative rounded overflow-hidden">
                                            <RadialChart
                                                color={"text-red-500"}
                                                value={(
                                                    (localStorage.getItem(
                                                        "friendfoodCal"
                                                    ) *
                                                        100) /
                                                    localStorage.getItem(
                                                        "friendcalGoal"
                                                    )
                                                ).toFixed(2)}
                                            />
                                        </p>
                                    </div>
                                </div>

                                <div className="max-w-[200px] bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500">
                                    <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg justify-between">
                                        <div className="mt-4">
                                            <h3 className="text-black text-md font-bold tracking-widest title-font mb-1 uppercase">
                                                Weight Tracker
                                            </h3>
                                        </div>
                                        <p className="block relative rounded overflow-hidden">
                                            <RadialChart
                                                color={"text-blue-500"}
                                                value={(
                                                    100 -
                                                    (localStorage.getItem(
                                                        "friendweight"
                                                    ) -
                                                        localStorage.getItem(
                                                            "friendweightGoal"
                                                        ))
                                                ).toFixed(2)}
                                            />
                                        </p>
                                    </div>
                                </div>

                                <div className="max-w-[200px] bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500">
                                    <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg justify-between">
                                        <div className="mt-4">
                                            <h3 className="text-black text-md font-bold tracking-widest title-font mb-1 uppercase">
                                                Steps Counter
                                            </h3>
                                        </div>
                                        <p className="block relative rounded overflow-hidden">
                                            <RadialChart
                                                color={"text-emerald-500"}
                                                value={(
                                                    (localStorage.getItem(
                                                        "friendstep24h"
                                                    ) *
                                                        100) /
                                                    localStorage.getItem(
                                                        "friendstepGoal"
                                                    )
                                                ).toFixed(2)}
                                            />
                                        </p>
                                    </div>
                                </div>

                                <div className="max-w-[200px] bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500">
                                    <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg justify-between">
                                        <div className="mt-4">
                                            <h3 className="text-black text-md font-bold tracking-widest title-font mb-1 uppercase">
                                                Calories Burnt
                                            </h3>
                                        </div>
                                        <p className="block relative rounded overflow-hidden">
                                            <RadialChart
                                                color={"text-violet-500"}
                                                value={(
                                                    (localStorage.getItem(
                                                        "friendcal24h"
                                                    ) *
                                                        100) /
                                                    localStorage.getItem(
                                                        "friendcalGoal"
                                                    )
                                                ).toFixed(2)}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-zinc-300" />

                        <div className="w-full flex items-center justify-center gap-4 mt-3">
                            <button
                                className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 hover:scale-105 ease-linear transition-all duration-150"
                                onClick={handleClick}
                            >
                              {isFriend?'Challenge':'Add Friend'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
          <center>
            
            {challengeAccepted && (
          
                <div className="flex flex-row justify-center items-center text-center flex-wrap max-w-[350px] w-auto">
                  <p className="font-bold text-xl">Entered Challenges</p>
                    <div>
                        <p>
                            {localStorage.getItem("friendname")}&apos;
                            {"s Stats"}
                        </p>
                        <BarChart chartData={data1} />
                    </div>
                    <div>
                        <p>
                            {localStorage.getItem("name")}&apos;{"s Stats"}
                        </p>
                        <BarChart chartData={data2} />
                    </div>
                </div>
            )}
            </center>
        </>
    );
};

export default Profile;
