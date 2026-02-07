import { FiTerminal } from "react-icons/fi";
import { FiCornerDownLeft } from "react-icons/fi";


const HeroBanner = () => {
    
    return ( 
        <>
        <div className="w-full bg-gray-800/30 text-yellow-50 flex flex-col justify-center items-center p-8">
         <h1 className="p-2 text-3xl font-bold"> <FiTerminal className=" text-yellow-300"/> My name is <span className="text-yellow-300">Konrad</span> <FiCornerDownLeft className="relative bottom-3 left-65 text-yellow-300" /></h1>
            <p className=" pt-3 m-3 text-xl ">Im an aspiring Web Developer providing easy and reliable solutions for small companies to have their own site within days</p>
            <p className="pb-6 text-base text-yellow-100">Seemingly daunting, surprisingly approachable.<span className="pl-4 pr-4 m-1 text-yellow-300 bg-gray-900"> Quick, available 24/7, supportive</span> - everything you need to make yourself stand out on the internet. <br/> If I can't do it - you probably dont need it anyways. Never over-engineer your website and over-pay some hyped up developer on AI crack. <span className="pl-4 pr-4 m-1 text-yellow-300 bg-gray-900">Simple is beautiful. Simple works.</span></p>
        </div>
        </>
     );
}
 
export default HeroBanner;