"use client";
import React, { useState } from "react";
import menu from "@/app/images/menu_white.png";
import cross from "@/app/images/cross_white.png";
import Link from "next/link";

const Header = () => {
	const [mobileNav, setmobileNav] = useState(false);
	return (
		<>
			<div className="bg-black flex items-center justify-around md:justify-between md:px-[3rem] h-[7rem] ">
				<Link href="/">
					<img
						className="ml-[4rem] md:ml-0 w-[200px]"
						src="https://dt-dots.myshopify.com/cdn/shop/files/logo.png?v=1684126223&width=400"
					/>
				</Link>
				<img
					onClick={() => setmobileNav(!mobileNav)}
					className="lg:hidden cursor-pointer w-[30px]"
					src={menu.src}
				/>
				<div className="hidden lg:block lg:mr-[5rem] text-white">
					<ul className="flex font-medium gap-7 syne text-base">
						<li className="cursor-pointer hover:text-[#f33c27] transition-all duration-200 ease-linear">
							HOME
						</li>
						<li className="cursor-pointer hover:text-[#f33c27] transition-all duration-200 ease-linear">
							PRODUCTS
						</li>
						<li className="cursor-pointer hover:text-[#f33c27] transition-all duration-200 ease-linear">
							PAGES
						</li>
						<li className="cursor-pointer hover:text-[#f33c27] transition-all duration-200 ease-linear">
							CONTACT
						</li>
					</ul>
				</div>
				<div className="hidden lg:flex cursor-pointer hover:text-[#f33c27] transition-all duration-200 ease-linear text-white">
					<Link href="/">
						<svg
							className="lg:w-[30px]"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</Link>
				</div>
			</div>

			<div
				className={`${
					mobileNav ? "left-0" : "left-[-120vw]"
				} z-10 fixed top-0 w-[80vw] left-0 h-screen bg-[#171717] transition-all duration-500 ease-in-out`}>
				<img
					className="h-[30px] cursor-pointer my-[1rem] mx-[2rem] "
					onClick={() => {
						setmobileNav(!mobileNav);
					}}
					src={cross.src}
				/>
				<div className="flex flex-col justify-between h-[94%]">
					<div className="mx-[2rem] my-[3rem] text-white">
						<ul className="list-none text-xl syne">
							<li className=" py-[0.5rem] pl-[0.75rem] my-[0.5rem] cursor-pointer hover:bg-[#292929] hover:text-[#f33c27] transition-all duration-500">
								Home
							</li>
							<li className=" py-[0.5rem] pl-[0.75rem] pr-[1rem] my-[0.5rem] cursor-pointer hover:bg-[#292929] hover:text-[#f33c27] transition-all duration-500">
								<div className="flex justify-between items-center">
									<h2>Products</h2>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
										/>
									</svg>
								</div>
							</li>
							<li className=" py-[0.5rem] pl-[0.75rem] pr-[1rem] my-[0.5rem] cursor-pointer hover:bg-[#292929] hover:text-[#f33c27] transition-all duration-500">
								<div className="flex justify-between items-center">
									<h2>Pages</h2>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
										/>
									</svg>
								</div>
							</li>
							<li className=" py-[0.5rem] pl-[0.75rem] my-[0.5rem] cursor-pointer hover:bg-[#292929] hover:text-[#f33c27] transition-all duration-500">
								Contact
							</li>
						</ul>
					</div>

					<div className="flex flex-col px-[2rem] py-[2rem] bg-[#292929] h-[15rem] ">
						<div className="text-white cursor-pointer flex hover:text-[#f33c27] transition-all duration-300 ease-linear">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<h2 className="syne ml-[1rem]">Log In</h2>
						</div>
						<div className="flex gap-2 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="20"
								style={{ mixBlendMode: "normal" }}
								height="100"
								viewBox="0,0,256,256">
								<g
									fill="#ffffff"
									fill-rule="nonzero"
									stroke="none"
									stroke-width="1"
									stroke-linecap="butt"
									stroke-linejoin="miter"
									stroke-miterlimit="10"
									stroke-dasharray=""
									stroke-dashoffset="0"
									font-family="none"
									font-weight="none"
									font-size="none"
									text-anchor="none">
									<g transform="scale(5.12,5.12)">
										<path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
									</g>
								</g>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								style={{ mixBlendMode: "normal" }}
								width="20"
								viewBox="0,0,256,256">
								<g
									fill="#ffffff"
									fill-rule="nonzero"
									stroke="none"
									stroke-width="1"
									stroke-linecap="butt"
									stroke-linejoin="miter"
									stroke-miterlimit="10"
									stroke-dasharray=""
									stroke-dashoffset="0"
									font-family="none"
									font-weight="none"
									font-size="none"
									text-anchor="none">
									<g transform="scale(5.12,5.12)">
										<path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path>
									</g>
								</g>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								style={{ mixBlendMode: "normal" }}
								width="20"
								viewBox="0,0,256,256">
								<g
									fill="#ffffff"
									fill-rule="nonzero"
									stroke="none"
									stroke-width="1"
									stroke-linecap="butt"
									stroke-linejoin="miter"
									stroke-miterlimit="10"
									stroke-dasharray=""
									stroke-dashoffset="0"
									font-family="none"
									font-weight="none"
									font-size="none"
									text-anchor="none">
									<g transform="scale(8,8)">
										<path d="M28,8.55859c-0.88281,0.39063 -1.83203,0.65625 -2.82812,0.77344c1.01563,-0.60937 1.79688,-1.57422 2.16406,-2.72266c-0.94922,0.5625 -2.00391,0.97266 -3.125,1.19531c-0.89844,-0.95703 -2.17969,-1.55859 -3.59375,-1.55859c-2.71875,0 -4.92578,2.20703 -4.92578,4.92578c0,0.38672 0.04297,0.76172 0.12891,1.12109c-4.09375,-0.20312 -7.72266,-2.16406 -10.14844,-5.14453c-0.42578,0.72656 -0.66797,1.57422 -0.66797,2.47656c0,1.70703 0.86719,3.21484 2.19141,4.09766c-0.80859,-0.02734 -1.56641,-0.24609 -2.23047,-0.61719c0,0.02344 0,0.04297 0,0.0625c0,2.38672 1.69531,4.37891 3.94922,4.82813c-0.41406,0.11328 -0.84766,0.17578 -1.29688,0.17578c-0.31641,0 -0.62891,-0.03125 -0.92578,-0.08984c0.625,1.95703 2.44531,3.37891 4.59766,3.42188c-1.68359,1.32031 -3.80859,2.10547 -6.11328,2.10547c-0.39844,0 -0.78906,-0.02344 -1.17578,-0.07031c2.17969,1.39844 4.76563,2.21484 7.54688,2.21484c9.05859,0 14.01172,-7.50391 14.01172,-14.01172c0,-0.21094 -0.00781,-0.42578 -0.01562,-0.63672c0.96094,-0.69531 1.79688,-1.5625 2.45703,-2.54687z"></path>
									</g>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
