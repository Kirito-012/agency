"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
const Sixth_sec = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	const [cyber, setCyber] = useState(false);
	const [creative, setCreative] = useState(true);
	const [SEO, setSEO] = useState(true);
	return (
		<div className="bg-[#171717] pb-28">
			<h1 className="syne px-8 md:px-20 md:px- pt-12 leading-[85px] lg:text-center text-left text-6xl heading_trans_effect">
				WHAT WE DO
			</h1>
			<div className="mt-16 px-12 flex flex-col xl:flex-row text-white xl:justify-evenly items-center">
				<div className="syne text-xl xl:text-2xl font-bold flex flex-col justify-center">
					<div className="flex flex-col md:flex-row md:gap-12 mb-16 gap-2">
						<h1
							onClick={() => {
								setSEO(true);
								setCyber(false);
								setCreative(true);
							}}
							className="cursor-pointer hover:text-[#f33c27] transition-all duration-500 ease-linear">
							CYBERSECURITY
						</h1>
						<h1
							onClick={() => {
								setSEO(true);
								setCyber(true);
								setCreative(false);
							}}
							className="cursor-pointer hover:text-[#f33c27] transition-all duration-500 ease-linear">
							CREATIVE DESIGN
						</h1>
						<h1
							onClick={() => {
								setSEO(false);
								setCyber(true);
								setCreative(true);
							}}
							className="cursor-pointer hover:text-[#f33c27] transition-all duration-500 ease-linear">
							SEO
						</h1>
					</div>
					<div className={`${cyber ? "hidden" : "flex"} xl:w-[40vw]`}>
						<img src="https://dt-dots.myshopify.com/cdn/shop/files/02.png?v=1684492023&width=1500" />
					</div>
					<div className={`${creative ? "hidden" : "flex"} xl:w-[40vw]`}>
						<img src="https://dt-dots.myshopify.com/cdn/shop/files/03.png?v=1684492099&width=1500" />
					</div>
					<div className={`${SEO ? "hidden" : "flex"} xl:w-[40vw]`}>
						<img src="https://dt-dots.myshopify.com/cdn/shop/files/01.png?v=1684492112&width=1500" />
					</div>
				</div>
				<div className="mt-20 xl:mt-0 flex flex-col justify-center items-center">
					<div className="max-w-[60ch] lg:max-w-[80ch] xl:max-w-[60ch] xl:flex xl:flex-col xl:justify-start">
						<h1
							className={`${
								cyber ? "hidden" : "flex"
							} text-2xl syne tracking-[1px] font-bold xl:text-6xl`}>
							WE ENSURE YOUR WEBSITE SECURITY
						</h1>
						<h1
							className={`${
								creative ? "hidden" : "flex"
							} text-2xl syne tracking-[1px] font-bold xl:text-6xl`}>
							CHOOSE UNIQUE DESIGN STYLE WEBSITES
						</h1>
						<h1
							className={`${
								SEO ? "hidden" : "flex"
							} text-2xl syne tracking-[1px] font-bold xl:text-6xl`}>
							ENSURE YOUR TOP POSITIONS IN THE SEARCH ENGINE
						</h1>
						<p
							className={`${
								cyber ? "hidden" : "flex"
							} syne my-4 xl:mt-12 text-base font-normal`}>
							Vulputate mi sit amet mauris. Accumsan tortor posuere ac ut
							consequat semper viverra nam. Urna molestie at elementum eu
							facilisis sed. Imperdiet nulla malesuada pellentesque elit eget
							gravida cum sociis natoque. Morbi tempus iaculis urna id volutpat
							lacus laoreet non curabitur. Hac habitasse platea dictumst
							vestibulum rhoncus est pellentesque elit ullamcorper. At auctor
							urna nunc id cursus. Elementum pulvinar etiam non quam. Enim nulla
							aliquet porttitor lacus.
						</p>
						<p
							className={`${
								creative ? "hidden" : "flex"
							} syne my-4 xl:mt-12 text-base font-normal`}>
							Justo nec ultrices dui sapien eget mi proin sed libero. Tellus
							rutrum tellus pellentesque eu tincidunt tortor aliquam nulla
							facilisi. Interdum varius sit amet mattis vulputate. Parturient
							montes nascetur ridiculus mus mauris vitae. Mi in nulla posuere
							sollicitudin aliquam ultrices sagittis orci a.
						</p>
						<p
							className={`${
								SEO ? "hidden" : "flex"
							} syne my-4 xl:mt-12 text-base font-normal`}>
							Aliquam faucibus purus in massa tempor nec feugiat. In fermentum
							posuere urna nec tincidunt. At augue eget arcu dictum. Non sodales
							neque sodales ut etiam sit amet. Amet cursus sit amet dictum sit
							amet justo donec. Vitae ultricies leo integer malesuada nunc vel
							risus commodo.
						</p>
						<div className="flex pb-16 mt-4 cursor-pointer group">
							<h2 className="group-hover:text-[#f33c27]  transition-all duration-300 ease-linear">
								SHOP NOW
							</h2>
							<svg
								className="w-6 h-6 ml-1 text-[#f33c27] group-hover:ml-4 transition-all duration-300 ease-linear "
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
			</div>
		</div>
	);
};

export default Sixth_sec;
