import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<div>
			<div className="h-screen flex flex-col text-center justify-center items-center">
				<h1 className="syne text-4xl mx-[0.5rem] md:mx-0 font-bold md:w-[20ch] lg:text-6xl">
					NEW <span className="text-[#ed3b27]">Al</span> WILL LEAD YOUR BUSINESS
					BETTER
				</h1>
				<p className="syne my-[0.5rem] mx-[2rem] md:w-[60ch] lg:text-lg">
					Sed purus turpis, mollis eu orci ac, facilisis mollis nisl. Ut sem
					ipsum, dignissim vitae massa ac, consectetur feugiat orci. Maecenas
					nunc nisl, dapibus non tempus eu, volutpat non diam. Nulla egestas
					eque callis euismod.
				</p>
				<Link
					className="bg-[#f33c27] text-white py-[1.25rem] px-[3rem] mt-[2rem] hover:bg-[#6d6c6c] transition-all duration-700 "
					href="/">
					<button>SHOP NOW</button>
				</Link>
				<h2 className="syne mt-[1rem] font-bold cursor-pointer hover:text-[#f33c27] transition-all duration-500">
					SCROLL
				</h2>
			</div>
		</div>
	);
};

export default Hero;
