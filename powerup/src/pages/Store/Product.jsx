import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { products } from "./Products";
import Web from "../../assets/logo/Web.png";

import { FRONTEND_URL, BACKEND_URL } from "../../StaticData";
const Product = () => {
    const [message, setMessage] = useState("");
    const location = useLocation();
    const id = location.pathname.charAt(location.pathname.length - 1);

    // console.log(id);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        for (const friend in JSON.parse(localStorage.getItem("friendArray"))) {
            if (friend._id == id) {
                setFriend(true);
                break;
            }
        }
    }, []);
    const prod = products.find((product) => product.id == id);
    const handleClick = (e) => {
        fetch(`${BACKEND_URL}/api/users/buy`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userid: localStorage.getItem("id"),
                points: prod.price,
            }),
        })
            .then((res) => res.json())
            .then((res) => setMessage(res.status));
        if (prod.id == 5) {
            try {
                var stripe = Stripe(
                    "pk_test_51LpQxaSClQus7pNZ0lQl5OXXTRBljK1u01ZRUMbjpDftwojlCqmFxvfP73P1e1mbE89SXJtifG1zifX8yzBHQvyS00i1h5qv1Q"
                );

                stripe
                    .redirectToCheckout({
                        lineItems: [
                            {
                                price: "price_1LqIhhSClQus7pNZnhtG5hU8",
                                quantity: 1,
                            },
                        ],
                        mode: "subscription",
                        successUrl: `${FRONTEND_URL}/dashboard`,
                        cancelUrl: `${FRONTEND_URL}/dashboard`,
                    })
                    .then(function (result) {
                        alert("Payment Successful!");
                    });
            } catch (error) {
                console.error(error);
            }
        }
    };
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt={prod.name}
                            className="lg:w-1/2 w-full lg:h-auto md:h-64 object-fit object-center rounded"
                            src={prod.src}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h3 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                                {prod.category}
                            </h3>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {prod.name}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-orange-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-orange-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-orange-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-orange-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-orange-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">
                                        1 Reviews
                                    </span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">{prod.desc}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                {prod.color && (
                                    <div className="flex">
                                        <span className="mr-3">Color</span>
                                        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                        <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                    </div>
                                )}
                                {prod.size && (
                                    <div className="flex ml-6 items-center">
                                        <span className="mr-3">Size</span>
                                        <div className="relative">
                                            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-base pl-3 pr-10 bg-gray-200">
                                                {prod.size.map(
                                                    (size, index) => (
                                                        <option key={index}>
                                                            {size}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900 inline-flex items-center gap-2">
                                    <img src={Web} className="h-6 w-6" />
                                    {prod.price}
                                </span>

                                <button
                                    className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded"
                                    onClick={handleClick}
                                    id="checkout"
                                >
                                    Buy
                                </button>
                            </div>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product;
