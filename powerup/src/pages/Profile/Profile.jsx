import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ChallengedAFriend from "../../assets/badges/ChallengedAFirend.png";
import GoalsReached from "../../assets/badges/GoalsReached.png";

import {
  getSteps24,
  getSteps7d,
  getCalories24,
  getCalories7d,
  getGoals,
  getmealdetails,
  search,
  find,
} from "../../StaticData";


// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
const Profile = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, []);
  const friends = JSON.parse(localStorage.getItem("friendArray"))

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-zinc-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-center">
            <h6 className="text-zinc-700 text-xl font-bold">
              My Account
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
                    value={localStorage.getItem("name")}
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
                    value={localStorage.getItem("email")}
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
                    value={localStorage.getItem("height")}
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
                    value={localStorage.getItem("weight")}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-zinc-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Power Points
                  </label>
                  <input
                    type="text"
                    disabled="true"
                    className="border-0 px-3 py-3 placeholder-zinc-300 text-zinc-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={localStorage.getItem("points")}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-zinc-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Dietary Restriction
                  </label>
                  <input
                    type="text"
                    disabled="true"
                    className="border-0 px-3 py-3 placeholder-zinc-300 text-zinc-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={localStorage.getItem("veg")=="true"?"Vegetarian":localStorage.getItem("vegan")=="true"?'Vegan':'None'}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-zinc-300" />

            <h6 className="text-zinc-400 text-sm mt-3 mb-6 font-bold uppercase">
              Badges
            </h6>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="w-40 h-40 px-4">
                  <img
                    alt="badge"
                    src={ChallengedAFriend}
                    className=""
                  />
                </div>
                <p className="text-lg -pt-4 text-gray-400">
                  #ChallengeWinner
                </p>
              </div>
              <div>
                <div className="w-40 h-40 px-4">
                  <img
                    alt="badge"
                    src={GoalsReached}
                    className=""
                  />
                </div>
                <p className="text-lg -pt-4 text-gray-400">
                  #10Kfor7days
                </p>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-zinc-300" />
            <div className="w-full flex items-center justify-center gap-4 mt-3">
              <Link to="/store">
                <button
                  className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 hover:scale-105 ease-linear transition-all duration-150"
                  type="button"
                >
                  Redeem Points
                </button>
              </Link>
              <Link to="/goals">
                <button
                  className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 hover:scale-105 ease-linear transition-all duration-150"
                  type="button"
                >
                  Update Goals
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <hr className="mt-6 border-b-1 border-zinc-300" />
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <h6 className="text-zinc-400 text-sm mt-3 mb-6 font-bold uppercase">
          Friends
        </h6>
        <div className="overflow-x-auto w-full flex justify-center text-center items-center">
          <table className="table text-primary-content w-auto">
            <thead className="bg-white ">
              <tr>
                <th>Name</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              {friends.length > 0 ? (friends.map((friend) => {
                return (
                  <tr>
                    <th>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={`https://avatars.dicebear.com/api/initials/${friend.name}.svg`}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {friend.name}
                          </div>
                        </div>
                      </div>
                    </th>
                    <th>
                      <Link to={`/users/${friend._id}`}>
                        <button className="btn btn-ghost btn-xs">
                          View Profile
                        </button>
                      </Link>
                    </th>
                  </tr>
                );
              })
              ) : (<p className="w-full">No Friends to display.</p>)}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
