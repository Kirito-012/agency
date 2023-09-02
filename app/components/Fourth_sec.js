import React from "react";

const Fourth_sec = () => {
	return (
		<div className="bg-[#171717]">
			<h1 className="syne pt-[3rem] leading-[85px] lg:mb-[2rem] text-center text-6xl heading_trans_effect">
				PRODUCTS
			</h1>
			<div className="w-screen overflow-x-scroll pb-[5rem] mt-[3rem]">
				<div className="w-[300vw] lg:w-screen gap:8 lg:gap-10 lg:px-[2rem] flex ">
					<div className="w-screen md:mx-0 md:w-[35rem] flex justify-center">
						<First />
					</div>
					<div className="w-screen mx-[2rem] md:mx-0 md:w-[35rem] flex justify-center">
						<Second />
					</div>
					<div className="w-screen mx-[2rem] md:mx-0 md:w-[35rem] flex justify-center">
						<Third />
					</div>
					<div className="w-screen mx-[2rem] md:mx-0 md:w-[35rem] flex justify-center">
						<Fourth />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fourth_sec;

const First = () => {
	return (
		<div className="flex flex-col mx-[3rem] w-screen group cursor-pointer">
			<div className="flex justify-center items-center bg-[#242424] h-[30rem] transition-all duration-300 ease-linear group-hover:rounded-[5rem] ">
				<img
					className="w-[18rem]"
					src="https://dt-dots.myshopify.com/cdn/shop/files/shop-9.png?v=1685504723&width=720"
				/>
			</div>
			<div className="flex flex-col mt-[2rem] gap-4 justify-center items-center text-white">
				<h1 className="syne text-center group-hover:text-[#f33c27] font-semibold text-2xl transition-all duration-200 ease-linear">
					V03K PEN DRIVES
				</h1>
				<h1 className="syne text-lg">Rs. 290.00</h1>
			</div>
		</div>
	);
};
const Second = () => {
	return (
		<div className="flex flex-col mx-[3rem] w-screen group cursor-pointer">
			<div className="flex justify-center items-center bg-[#242424] h-[30rem] transition-all duration-300 ease-linear group-hover:rounded-[5rem] ">
				<img
					className="w-[18rem]"
					src="https://dt-dots.myshopify.com/cdn/shop/files/shop-9.png?v=1685504723&width=720"
				/>
			</div>
			<div className="flex flex-col mt-[1rem] gap-4 justify-center items-center text-white">
				<h1 className="syne group-hover:text-[#f33c27] font-semibold text-3xl transition-all duration-200 ease-linear">
					V03K PEN DRIVES
				</h1>
				<h1 className="syne text-lg">Rs. 290.00</h1>
			</div>
		</div>
	);
};
const Third = () => {
	return (
		<div className="flex flex-col mx-[3rem] w-screen group cursor-pointer">
			<div className="flex justify-center items-center bg-[#242424] h-[30rem] transition-all duration-300 ease-linear group-hover:rounded-[5rem] ">
				<img
					className="w-[18rem]"
					src="https://dt-dots.myshopify.com/cdn/shop/files/shop-9.png?v=1685504723&width=720"
				/>
			</div>
			<div className="flex flex-col mt-[1rem] gap-4 justify-center items-center text-white">
				<h1 className="syne group-hover:text-[#f33c27] font-semibold text-3xl transition-all duration-200 ease-linear">
					V03K PEN DRIVES
				</h1>
				<h1 className="syne text-lg">Rs. 290.00</h1>
			</div>
		</div>
	);
};
const Fourth = () => {
	return (
		<div className="flex flex-col mx-[3rem] w-screen group cursor-pointer">
			<div className="flex justify-center items-center bg-[#242424] h-[30rem] transition-all duration-300 ease-linear group-hover:rounded-[5rem] ">
				<img
					className="w-[18rem]"
					src="https://dt-dots.myshopify.com/cdn/shop/files/shop-9.png?v=1685504723&width=720"
				/>
			</div>
			<div className="flex flex-col mt-[1rem] gap-4 justify-center items-center text-white">
				<h1 className="syne group-hover:text-[#f33c27] font-semibold text-3xl transition-all duration-200 ease-linear">
					V03K PEN DRIVES
				</h1>
				<h1 className="syne text-lg">Rs. 290.00</h1>
			</div>
		</div>
	);
};
