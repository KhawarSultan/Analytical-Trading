
import Banner from "../assets/img/Design.png";
import Banner2 from "../assets/img/banner2.png";
import { useNavigate } from "react-router";
import { IoArrowForwardOutline } from "react-icons/io5";

import { IoIosArrowForward } from "react-icons/io";

const HomePage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="relative">
            <div className=" m-auto  ">
                <img src={Banner} className="md:h-[91vh] w-full absolute" alt="" />
                <div className="md:relative h-screen flex flex-col justify-center items-center text-center">
                    <p className="text-6xl font-bold mb-3 text-white">Learn Crypto and Trading Academy is live!</p>
                    <p className="text-xl text-white flex justify-center items-center gap-3">Take a course <IoArrowForwardOutline size={20} /> Test what you've learned <IoArrowForwardOutline size={20}/> Build your knowledge in crypto for free!</p>
                    <button onClick={() => navigate(`/knowledge-base`)} className="px-8 mt-8 py-4 hover:bg-orange-600  border-2 border-white hover:border-orange-600  text-white rounded-lg font-bold transition-all ease-in flex items-center gap-2">Start Learning <IoIosArrowForward size={20}/></button>
                </div>

            </div>
            <section className="w-11/12 gap-5 items-center justify-center  m-auto md:flex mb-10 md:mt-0  mt-64">
                <div className="w-full">
                    <p className=" font-extrabold dark:text-orange-500 md:text-6xl text-3xl mb-3 ">About Learn Crypto</p>
                    <p className=" text-gray-600  text-lg  w-4/5 mb-2 ">Learn Crypto is a free education platform designed to help users easily learn about cryptocurrency, with simple, relevant and engaging content.</p>
                    <p className=" text-gray-600  text-lg  w-4/5 mb-4 ">Start with cryptocurrency basics or choose from our common themes.</p>
                    <button onClick={() => navigate(`/knowledge-base`)} className="px-7 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold transition-all ease-in  flex items-center gap-2">Start Learning <IoIosArrowForward size={20} /></button>

                </div>
                <div className="w-full">
                    <img src={Banner2} className=" w-full " alt="" />

                </div>
            </section>
            <section className="w-11/12 gap-5 items-center justify-center  m-auto flex">
                <div className="">
                    <p className=" font-extrabold md:text-7xl text-3xl mb-10 dark:text-orange-500 ">Learn Cryptos Mission</p>
                    <p className=" text-gray-600 text-lg md:w-7/12  mb-8 ">Learn Crypto is a free education platform designed to help users easily learn about cryptocurrency, with simple, relevant and engaging content.</p>
                    <p className=" text-gray-600 text-lg md:w-7/12 mb-8 ">We appreciate that for beginners, learning about cryptocurrency is both complex and unfamiliar, so we have designed the site to be accessible to newcomers for a full crypto knowledge base divided into five categories.</p>
                    <p className=" text-gray-600 text-lg md:w-7/12 mb-8 ">We believe in the potential of crypto, but for anyone new to the subject, just understanding why it has value is a challenge. To help those not yet convinced about crypto, our Why Crypto section offers easily accessible data to make a case for crypto.</p>
                    <p className=" text-gray-600 text-lg md:w-7/12 mb-8 ">Learn Crypto also acknowledges that cryptocurrency has its critics, so our TLDR section is designed to respond directly to the most common criticisms of Bitcoin (and other cryptocurrencies) as well as popular myths and misconceptions. These are purposely short answers to the big crypto questions.</p>
                    <p className=" text-gray-600 text-lg md: w-7/12 mb-8 ">We regularly add new content to the Learn Crypto blog to expose new perspectives on cryptocurrency, bust myths, provide suggestions to help you grow your crypto stack as well creative ways to just keep learning.</p>
                    <p className=" text-gray-600 text-lg md:w-7/12 mb-8 ">If dont understand the unique language of the subject, our crypto glossary will help, while you can extend your learning with a guide to popular crypto books and podcasts.</p>
                    <p className=" text-gray-600 text-lg md:w-7/12 mb-8 ">Learn crypto - Crypto made easy.</p>

                </div>

            </section>
        </div>


    )

}
export default HomePage