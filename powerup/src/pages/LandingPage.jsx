import "/src/assets/Home.css";
import "/src/assets/ns.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// components
import { AiOutlineMenu } from "react-icons/ai";
import IndexDropdown from "../components/IndexDropdown";

import Web from "/src/assets/logo/Web.png";
export default function LandingPage() {
    const navigate = useNavigate();
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <>
                <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <div className="flex flex-row justify-center items-center gap-4">
                                <img src={Web} className="h-8 w-8" />
                                <Link
                                    to="/"
                                    className="text-orange-500 text-md text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                                >
                                    Power Up
                                </Link>
                            </div>
                            <button
                                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:text-orange-500"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <AiOutlineMenu />
                            </button>
                        </div>
                        <div
                            className={
                                "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                                (navbarOpen ? " block" : " hidden")
                            }
                            id="example-navbar-warning"
                        >
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li>
                                    <li className="flex items-center">
                                        <Link to="#home">
                                            <button className="bg-inherit text-gray-700 hover:text-white hover:bg-orange-500 text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                                                Home
                                            </button>
                                        </Link>
                                    </li>
                                </li>

                                <li>
                                    <li className="flex items-center">
                                        <Link to="#features">
                                            <button className="bg-inherit text-gray-700 hover:text-white hover:bg-orange-500 text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                                                Features
                                            </button>
                                        </Link>
                                    </li>
                                </li>

                                <li>
                                    <li className="flex items-center">
                                        <Link to="#join">
                                            <button className="bg-inherit text-gray-700 hover:text-white hover:bg-orange-500 text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                                                Join
                                            </button>
                                        </Link>
                                    </li>
                                </li>

                                <li className="flex items-center">
                                    <IndexDropdown />
                                </li>

                                <li className="flex items-center">
                                    <Link to={"/signin"}>
                                        <button
                                            className="bg-orange-500 text-white active:bg-orange-600 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Signin
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>

            <section
                className="u-align-center u-clearfix u-image u-section-1"
                id="sec-7bff"
                data-image-width="2000"
                data-image-height="1353"
            >
                <div
                    className="u-clearfix u-sheet u-valign-middle u-sheet-1"
                    id="home"
                >
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-gutter-0 u-layout">
                            <div className="u-layout-row">
                                <div className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-left-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
                                    <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-container-layout-1">
                                        <div
                                            className="u-palette-3-light-1 u-shape u-shape-circle u-shape-1"
                                            data-animation-name="customAnimationIn"
                                            data-animation-duration="1000"
                                            data-animation-direction=""
                                            data-animation-delay="0"
                                        ></div>
                                        <img
                                            className="u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-image u-image-contain u-image-default u-image-1"
                                            data-image-width="450"
                                            data-image-height="450"
                                            src="/src/assets/landing/sidelogo.png"
                                            data-animation-name="jackInTheBox"
                                            data-animation-duration="1250"
                                            data-animation-direction=""
                                        />
                                    </div>
                                </div>
                                <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2">
                                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                                        <h2
                                            className="u-custom-font u-text u-text-body-alt-color u-text-1"
                                            data-animation-name="customAnimationIn"
                                            data-animation-duration="1250"
                                            data-animation-direction=""
                                        >
                                            Power Up
                                        </h2>
                                        <p
                                            className="u-text u-text-body-alt-color u-text-2"
                                            data-animation-name="customAnimationIn"
                                            data-animation-duration="1250"
                                        >
                                            {" "}
                                            Take your health to new heights with
                                            Power Up
                                        </p>
                                        <Link
                                            to="/signup"
                                            className="u-active-palette-3-light-2 u-btn u-btn-round u-button-style u-hover-palette-3-light-2 u-radius-50 u-text-active-palette-3-base u-text-hover-palette-3-base u-text-palette-3-base u-white u-btn-1"
                                            data-animation-name="customAnimationIn"
                                            data-animation-duration="1250"
                                            data-animation-delay="250"
                                        >
                                            Signup NOW
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="u-clearfix u-palette-3-base u-section-2"
                id="carousel_e186"
            >
                <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div className="u-gutter-0 u-layout">
                            <div className="u-layout-row">
                                <div className="u-align-left u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-1">
                                    <div className="u-container-layout u-valign-middle u-container-layout-1">
                                        <h2
                                            className="u-text u-text-default u-text-1"
                                            data-animation-name="customAnimationIn"
                                            data-animation-duration="750"
                                        >
                                            Take Control
                                        </h2>
                                        <p
                                            className="u-custom-font u-font-pt-sans u-text u-text-default u-text-palette-3-light-3 u-text-2"
                                            data-animation-name="customAnimationIn"
                                            data-animation-duration="1250"
                                            data-animation-delay="250"
                                        >
                                            Power Up is compatible with a vast
                                            range of smart watches and wearable
                                            devices that run Wear OS.
                                            <br />
                                            <br />
                                            Data is easily collected with Google
                                            Fitness Intergation for a seamless
                                            user experience
                                        </p>
                                    </div>
                                </div>
                                <div className="u-align-center-sm u-align-center-xl u-align-center-xs u-align-justify-lg u-align-justify-md u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                                    <div className="u-container-layout u-container-layout-2">
                                        <img
                                            className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-contain u-image-default u-image-1"
                                            src="/src/assets/landing/105650-fitness-tracker.gif"
                                            alt=""
                                            data-image-width="640"
                                            data-image-height="640"
                                            data-animation-name="customAnimationIn"
                                            data-animation-duration="1250"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="u-clearfix u-image u-section-3"
                id="carousel_1bae"
                data-image-width="1980"
                data-image-height="1500"
            >
                <div className="u-clearfix u-sheet u-sheet-1" id="features">
                    <div className="u-list u-list-1">
                        <div className="u-repeater u-repeater-1">
                            <div className="u-align-center u-container-style u-list-item u-radius-30 u-repeater-item u-shape-round u-white u-list-item-1">
                                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                                    <span
                                        className="u-file-icon u-icon u-icon-circle u-palette-3-base u-text-white u-icon-1"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                    >
                                        <img
                                            src="/src/assets/landing/8645846-14a81ca0.png"
                                            alt=""
                                        />
                                    </span>
                                    <h4
                                        className="u-text u-text-default u-text-1"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                        data-animation-delay="250"
                                    >
                                        Hourly Tracking
                                    </h4>
                                </div>
                            </div>
                            <div className="u-align-center u-container-style u-list-item u-radius-30 u-repeater-item u-shape-round u-white u-list-item-2">
                                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-2">
                                    <span
                                        className="u-file-icon u-icon u-icon-circle u-palette-3-base u-text-white u-icon-2"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                    >
                                        <img
                                            src="/src/assets/landing/3373118-fab08fc6.png"
                                            alt=""
                                        />
                                    </span>
                                    <h4
                                        className="u-text u-text-default u-text-2"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                        data-animation-delay="250"
                                    >
                                        Health Tracking
                                    </h4>
                                </div>
                            </div>
                            <div className="u-align-center u-container-style u-list-item u-radius-30 u-repeater-item u-shape-round u-white u-list-item-3">
                                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-3">
                                    <span
                                        className="u-file-icon u-icon u-icon-circle u-palette-3-base u-text-white u-icon-3"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                    >
                                        <img
                                            src="/src/assets/landing/9131415-92b706d9.png"
                                            alt=""
                                        />
                                    </span>
                                    <h4
                                        className="u-text u-text-default u-text-3"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                        data-animation-delay="250"
                                    >
                                        Health Diagonosis
                                    </h4>
                                </div>
                            </div>
                            <div className="u-align-center u-container-style u-list-item u-radius-30 u-repeater-item u-shape-round u-white u-list-item-4">
                                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-4">
                                    <span
                                        className="u-file-icon u-icon u-icon-circle u-palette-3-base u-text-white u-icon-4"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                    >
                                        <img
                                            src="/src/assets/landing/1786614-855c592a.png"
                                            alt=""
                                        />
                                    </span>
                                    <h4
                                        className="u-text u-text-default u-text-4"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                        data-animation-delay="250"
                                    >
                                        Diet Tracking
                                    </h4>
                                </div>
                            </div>
                            <div className="u-align-center u-container-style u-list-item u-radius-30 u-repeater-item u-shape-round u-white u-list-item-5">
                                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-5">
                                    <span
                                        className="u-file-icon u-icon u-icon-circle u-palette-3-base u-text-white u-icon-5"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                    >
                                        <img
                                            src="/src/assets/landing/4089146-d327cead.png"
                                            alt=""
                                        />
                                    </span>
                                    <h4
                                        className="u-text u-text-default u-text-5"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                        data-animation-delay="250"
                                    >
                                        Dietary Advice
                                    </h4>
                                </div>
                            </div>
                            <div className="u-align-center u-container-style u-list-item u-radius-30 u-repeater-item u-shape-round u-white u-list-item-6">
                                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-6">
                                    <span
                                        className="u-file-icon u-icon u-icon-circle u-palette-3-base u-text-white u-icon-6"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                    >
                                        <img
                                            src="/src/assets/landing/5480641-a57ac235.png"
                                            alt=""
                                        />
                                    </span>
                                    <h4
                                        className="u-text u-text-default u-text-6"
                                        data-animation-name="customAnimationIn"
                                        data-animation-duration="1250"
                                        data-animation-delay="250"
                                    >
                                        {" "}
                                        Exercise Advice
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="u-align-center u-clearfix u-grey-15 u-section-4"
                id="carousel_f308"
            >
                <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
                    <h2 className="u-text u-text-palette-3-base u-text-1">
                        Track What Matters
                    </h2>
                    <p className="u-large-text u-text u-text-variant u-text-2">
                        Use any smartwatch or smartphone to track your steps,
                        calories, food consumption and more.
                    </p>
                    <img
                        className="u-expanded-width u-image u-image-round u-radius-30 u-image-1"
                        alt=""
                        data-image-width="1416"
                        data-image-height="1040"
                        src="/src/assets/landing/image33.png"
                    />
                    <div className="u-list u-list-1">
                        <div className="u-repeater u-repeater-1">
                            <div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1">
                                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                                    <p className="u-text u-text-default u-text-palette-1-dark-2 u-text-3">
                                        Steps
                                    </p>
                                    <h3
                                        className="u-custom-font u-font-montserrat u-text u-text-default u-text-palette-3-base u-text-4"
                                        data-animation-name="counter"
                                        data-animation-event="scroll"
                                        data-animation-duration="3000"
                                    >
                                        5323
                                    </h3>
                                </div>
                            </div>
                            <div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-2">
                                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-2">
                                    <p className="u-text u-text-default u-text-palette-1-dark-2 u-text-5">
                                        Calories
                                    </p>
                                    <h3
                                        className="u-custom-font u-font-montserrat u-text u-text-default u-text-palette-3-base u-text-6"
                                        data-animation-name="counter"
                                        data-animation-event="scroll"
                                        data-animation-duration="3000"
                                    >
                                        1287
                                    </h3>
                                </div>
                            </div>
                            <div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-3">
                                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-3">
                                    <p className="u-text u-text-default u-text-palette-1-dark-2 u-text-7">
                                        {" "}
                                        protein
                                    </p>
                                    <h3
                                        className="u-custom-font u-font-montserrat u-text u-text-default u-text-palette-3-base u-text-8"
                                        data-animation-name="counter"
                                        data-animation-event="scroll"
                                        data-animation-duration="3000"
                                    >
                                        108
                                    </h3>
                                </div>
                            </div>
                            <div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-4">
                                <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-4">
                                    <p className="u-text u-text-default u-text-palette-1-dark-2 u-text-9">
                                        Fats
                                    </p>
                                    <h3
                                        className="u-custom-font u-font-montserrat u-text u-text-default u-text-palette-3-base u-text-10"
                                        data-animation-name="counter"
                                        data-animation-event="scroll"
                                        data-animation-duration="3000"
                                    >
                                        80
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="u-align-center u-clearfix u-grey-15 u-section-5"
                id="carousel_7ec8"
            >
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-size-28-lg u-size-28-xl u-size-29-sm u-size-29-xs u-size-60-md">
                                    <div className="u-layout-col" id="join">
                                        <div className="u-align-center u-container-style u-layout-cell u-palette-3-base u-radius-50 u-shape-round u-size-60 u-layout-cell-1">
                                            <div className="u-container-layout u-valign-middle u-container-layout-1">
                                                <h2 className="u-custom-font u-font-montserrat u-text u-text-1">
                                                    Begin for Journey towards
                                                    Better Health Today!
                                                </h2>
                                                <Link
                                                    to="/signup"
                                                    className="u-active-grey-10 u-border-none u-btn u-btn-round u-button-style u-hover-grey-10 u-radius-50 u-text-palette-3-base u-white u-btn-1"
                                                >
                                                    SignUP NOW
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-size-31-sm u-size-31-xs u-size-32-lg u-size-32-xl u-size-60-md">
                                    <div className="u-layout-col">
                                        <div className="u-size-30">
                                            <div className="u-layout-row">
                                                <div
                                                    className="u-container-style u-image u-image-round u-layout-cell u-radius-50 u-shape-rectangle u-size-30 u-image-1"
                                                    data-image-width="640"
                                                    data-image-height="640"
                                                >
                                                    <div className="u-container-layout u-container-layout-2"></div>
                                                </div>
                                                <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-3">
                                                    <div className="u-container-layout u-container-layout-3">
                                                        <h5 className="u-text u-text-default u-text-2">
                                                            <b>Set Goals</b>
                                                        </h5>
                                                        <p className="u-text u-text-3">
                                                            Set goals at your
                                                            own pace and adjust
                                                            as you go own
                                                            better.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="u-size-30">
                                            <div className="u-layout-row">
                                                <div className="u-container-style u-grey-5 u-layout-cell u-radius-50 u-shape-round u-size-30 u-layout-cell-4">
                                                    <div className="u-container-layout u-container-layout-4">
                                                        <h5 className="u-text u-text-default u-text-4">
                                                            <b>
                                                                Compete With
                                                                Friends
                                                            </b>
                                                        </h5>
                                                        <p className="u-text u-text-5">
                                                            Compete with your
                                                            friends and reach
                                                            your goals together.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="u-container-style u-image u-image-contain u-image-round u-layout-cell u-radius-50 u-shape-rectangle u-size-30 u-image-2"
                                                    data-image-width="216"
                                                    data-image-height="233"
                                                >
                                                    <div className="u-container-layout u-container-layout-5"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
