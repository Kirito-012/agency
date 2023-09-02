"use client";
import React, { useEffect } from "react";
import grid1 from "@/app/images/grid1.webp";
import Aos from "aos";
import "aos/dist/aos.css";

const Second_sec = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<>
			<div className="w-screen pb-[8rem] bg-[#171717] flex flex-col items-center">
				<h1 className="syne mt-[5rem] leading-[85px] w-[5ch] md:w-[10ch] lg:w-[60rem] lg:mb-[2rem] text-center text-8xl heading_trans_effect">
					WHAT WE OFFER
				</h1>
				<div className="w-screen overflow-x-scroll pb-[5rem] mt-[3rem]">
					<div className="w-[300vw] lg:w-screen gap:8 lg:gap-10 lg:px-[2rem] flex ">
						<div
							data-aos="fade-down"
							data-aos-duration="110	0"
							className="w-screen mx-[2rem] md:mx-0  md:w-[35rem] flex justify-center">
							<First />
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="1100"
							className="w-screen mx-[2rem] md:mx-0 md:w-[35rem] flex justify-center">
							<Second />
						</div>
						<div
							data-aos="fade-down"
							data-aos-duration="1100"
							className="w-screen mx-[2rem] md:mx-0 md:w-[35rem] flex justify-center">
							<Third />
						</div>
					</div>
				</div>
				<div className="h-[20rem]">
					<h1 className="syne mt-[3rem] leading-[85px] lg:mb-[2rem] text-center text-6xl heading_trans_effect">
						PARTNERS
					</h1>
				</div>
			</div>
		</>
	);
};

export default Second_sec;

const First = () => {
	return (
		<div className="flex flex-col">
			<div>
				<img
					className="w-[400px] transition-all duration-300 ease-linear hover:rounded-[20rem] "
					src={grid1.src}
				/>
			</div>
			<div className="my-[4rem] text-white">
				<h1 className=" syne text-2xl font-semibold">DATA ANALYTICS SUPPORT</h1>
				<div className="flex mt-[1rem] cursor-pointer group">
					<h2 className="group-hover:text-[#f33c27]  transition-all duration-300 ease-linear">
						SHOP NOW
					</h2>
					<svg
						className="w-6 h-6 ml-[0.25rem] text-[#f33c27] group-hover:ml-[1rem] transition-all duration-300 ease-linear "
						xmlns="http://www.w3.org/2000/svg"
						fill="red"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

const Second = () => {
	return (
		<div className="flex flex-col">
			<div className="my-[4rem] text-white">
				<h1 className=" syne text-2xl font-semibold">DATA ANALYTICS SUPPORT</h1>
				<div className="flex mt-[1rem] cursor-pointer group">
					<h2 className="group-hover:text-[#f33c27]  transition-all duration-300 ease-linear">
						SHOP NOW
					</h2>
					<svg
						className="w-6 h-6 ml-[0.25rem] text-[#f33c27] group-hover:ml-[1rem] transition-all duration-300 ease-linear "
						xmlns="http://www.w3.org/2000/svg"
						fill="red"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</div>
			</div>
			<div>
				<img
					className=" w-[400px] transition-all duration-300 ease-linear hover:rounded-[20rem] "
					src={grid1.src}
				/>
			</div>
		</div>
	);
};

const Third = () => {
	return (
		<div className="flex flex-col">
			<div>
				<img
					className=" w-[400px]  transition-all duration-300 ease-linear hover:rounded-[20rem] "
					src={grid1.src}
				/>
			</div>
			<div className="my-[4rem] text-white">
				<h1 className=" syne text-2xl font-semibold">DATA ANALYTICS SUPPORT</h1>
				<div className="flex mt-[1rem] cursor-pointer group">
					<h2 className="group-hover:text-[#f33c27]  transition-all duration-300 ease-linear">
						SHOP NOW
					</h2>
					<svg
						className="w-6 h-6 ml-[0.25rem] text-[#f33c27] group-hover:ml-[1rem] transition-all duration-300 ease-linear "
						xmlns="http://www.w3.org/2000/svg"
						fill="red"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};
