import { FiTerminal } from "react-icons/fi";
import { FiCornerDownLeft } from "react-icons/fi";
import { Link } from "react-router";
const HeroBanner = () => {
	return (
		<>
			<div className=" bannerwrapper relative w-full bg-blue-900/20 text-yellow-50 justify-center p-3 md:pt-8 md:pb-12 ">
				<div className="w-3/5 h-2/5 border-6 border-yellow-300/3 absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>{" "}
				<FiTerminal className=" absolute text-8xl text-yellow-300 top-10 left-10 opacity-5" />
				<div className="z-5 text-shadow-black/30 text-shadow-md  w-full text-yellow-50 flex flex-col justify-center items-center pt-8 ">
					<h1 className="relative p-2 text-4xl font-bold border-2 border-yellow-300 pl-20 pr-20">
						<FiTerminal className="absolute left-5 top-4 text-yellow-300" />  My
						name is <span className="text-yellow-300">Konrad</span>
						<FiCornerDownLeft className="absolute bottom-1 right-5 text-yellow-300" />
					</h1>
					<p className=" pt-3 m-3 text-2xl ">
						Im an aspiring Web Developer providing easy and reliable solutions
						for small companies to have their own site within days
					</p>
					<p className="pb-6 text-base text-yellow-100">
						Seemingly daunting, surprisingly approachable.
						<span className="pl-4 pr-4 m-1 text-yellow-300 bg-gray-900">
							{" "}
							Quick, available 24/7, supportive
						</span>{" "}
						- everything you need to make yourself stand out on the internet.{" "}
						<br /> If I can't do it - you probably dont need it anyways. Never
						over-engineer your website and over-pay some hyped up developer on
						AI crack.{" "}
						<span className="pl-4 pr-4 m-1 text-yellow-300 bg-gray-900">
							Simple is beautiful. Simple works.
						</span>
					</p>
                    <Link to="/about" className="p-3 pl-8 pr-8 text-2xl uppercase bg-yellow-400 text-black ">Get to know me</Link>
				</div>{" "}
				<FiCornerDownLeft className="absolute bottom-10 right-10 text-8xl opacity-5 text-yellow-300" />
			</div>
		</>
	);
};

export default HeroBanner;
