import { useNavigate } from "react-router";


const Knowledgebase = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p className="text-6xl font-bold  text-center my-10 text-orange-500">Knowledge base</p>
            <div className=" w-11/12 m-auto">
                <p className="text-4xl  text-left my-10">Step 1: <span className= "text-orange-500 font-bold">Crypto Basics</span> </p>

                <section className=" grid grid-cols-3 gap-4 mb-10">
                    <div className=" border p-7 rounded-xl   flex flex-col justify-between ">
                        <p className=" font-bold text-xl mb-4">What is cryptocurrency?</p>
                        <p className=" text-sm text-gray-600 mb-9">Learn what cryptocurrency is, what you can do with it & why it has value. Learn about Bitcoin & sound money.</p>
                        <p></p>

                        <button onClick={() => navigate(`/crypto-basics/1`)} className=" border-2 border-orange-600  hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7  rounded-lg   flex flex-col justify-between">
                        <p className=" font-bold text-xl mb-4">Bitcoins limitations</p>
                        <p className=" text-sm text-gray-600 mb-9">Learn how Bitcoins design compromises speed for decentralisation creating limitations on low value transactions. Find out how layer two solutions can solve this issue.</p>
                        <p></p>
                        <button onClick={() => navigate(`/crypto-basics/2`)} className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 rounded-lg   flex flex-col justify-between">
                        <p className=" font-bold text-xl mb-4">What is Ethereum?</p>
                        <p className=" text-sm text-gray-600 mb-9">What does Ethereum do, how it differs from Bitcoin & the new crypto economies it has enabled.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                </section>
                <section className=" grid grid-cols-3 gap-4 mb-6">
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">What is a Stablecoin??</p>
                        <p className=" text-sm text-gray-600 mb-9">Learn what a Stablecoin is, the problem they solve & how governments are now trying to create their own versions.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">What is a Blockchain?</p>
                        <p className=" text-sm text-gray-600 mb-9">What are the unique characteristics of a blockchain? What are the problems they solve & how do they do it?</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">what are the token standards?</p>
                        <p className=" text-sm text-gray-600 mb-9">What role do token standards play in offering value different cryptocurrencies? And how has this concept been used even before cryptocurrency was around?</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                </section>





            </div>
            <div className=" w-11/12 m-auto">
                <p className="text-4xl  text-left my-10">Step 2: <span className= "text-orange-500 font-bold">How to trade crypto</span> </p>

                <section className=" grid grid-cols-3 gap-4 mb-10">
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">What is cryptocurrency trading??</p>
                        <p className=" text-sm text-gray-600 mb-9"> Learn what cryptocurrency trading involves &amp; the concept of risk. Understand the difference between Technical &amp; Fundamental Analysis and the level of commitment required.</p>
                        <p></p>
                        <button onClick={() => navigate(`/trade-crypto/1`)} className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">What are crypto price charts?</p>
                        <p className=" text-sm text-gray-600 mb-9">Understand the information crypto price charts provide &amp;. how to interpret it. Learn about Candlesticks.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">Understanding crypto trading volume?</p>
                        <p className=" text-sm text-gray-600 mb-9">Learn what the volume of trading can tell you about crypto price. Find out about some of the popular volume based technical indicators.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                </section>
                <section className=" grid grid-cols-3 gap-4 mb-6">
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">What is Technical Analysis?</p>
                        <p className=" text-sm text-gray-600 mb-9">Understand what Technical Analysis means &amp; learn about some of the most common Technical Indicators.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">What is Fundamental Analysis?</p>
                        <p className=" text-sm text-gray-600 mb-9">Understand what Fundamental Analysis is, how it relates to investing rather than trading; Learn some common approaches.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">Simple trading strategies?</p>
                        <p className=" text-sm text-gray-600 mb-9">Learn about the simple trading strategies suitable for beginners, including Dollar Cost Averaging aka DCA.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                </section>
                <section className=" grid grid-cols-3 gap-4 mb-6">
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">What are the risks of using a decentralised exchange (DEX) vs a centralised exchange (CEX)?</p>
                        <p className=" text-sm text-gray-600 mb-9"></p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">How to place a trade?</p>
                        <p className=" text-sm text-gray-600 mb-9">Understand the process for placing your first trade and the trade-off between simplicity, precision and commission.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">How to read crypto trading charts & patterns?</p>
                        <p className=" text-sm text-gray-600 mb-9">Learn how to read crypto price charts & interpret common patterns.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                </section>





            </div>
            <div className=" w-11/12 m-auto">
                <p className="text-4xl  text-left my-10">Step 3: <span className= "text-orange-500 font-bold">How to use crypto</span> </p>

                <section className=" grid grid-cols-3 gap-4 mb-10">
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">What are Smart Contracts??</p>
                        <p className=" text-sm text-gray-600 mb-9">Discover the world of Smart Contracts, how they work, their benefits and drawbacks and how they can shape the future.</p>
                        <p></p>
                        <button onClick={() => navigate(`/use-crypto/1`)} className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">Security, Wallets & Keys?</p>
                        <p className=" text-sm text-gray-600 mb-9">Learn how to store crypto securely and understand wallets & private keys.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">Sending & Receiving Crypto?</p>
                        <p className=" text-sm text-gray-600 mb-9">Learn how to set up a crypto wallet & the process for sending/receiving crypto.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                </section>
                <section className=" grid grid-cols-3 gap-4 mb-6">
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">Where you buy crypto?</p>
                        <p className=" text-sm text-gray-600 mb-9">An introduction to crypto exchanges & how crypto is bought and sold.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">How to buy crypto?</p>
                        <p className=" text-sm text-gray-600 mb-9">Walking through the process of buying crypto for the first time.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                    <div className=" border p-7 flex flex-col justify-between rounded-xl   ">
                        <p className=" font-bold text-xl mb-4">Selling & Converting Crypto?</p>
                        <p className=" text-sm text-gray-600 mb-9">Walking through the process of selling crypto for fiat, or converting to another cryptocurrency.</p>
                        <p></p>
                        <button className=" border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all ease-in  p-6 py-2 rounded-lg"> Learn it now</button>
                    </div>
                </section>





            </div>
        </div>
    )

}

export default Knowledgebase;