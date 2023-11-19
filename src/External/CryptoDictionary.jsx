import { useEffect, useState } from "react";

const CryptoDictionary = () => {
    const [dictionary, setDictionary] = useState(null);

    const dictionaryUrl = "https://api.coingecko.com/api/v3/coins/categories";

    const fetchUrl = async (url) => {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            let data = await response.json();
            setDictionary(data);
        } catch (error) {
            console.error("Error!", error.message);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchUrl(dictionaryUrl);
        };

        fetchData();
    }, []);
    const formatMarketCap = (value) => {
        const trillion = 1e12;
        const billion = 1e9;
        const million = 1e6;

        if (value >= trillion) {
            return `$${(value / trillion)?.toFixed(2)} Trillion`;
        } else if (value >= billion) {
            return `$${(value / billion)?.toFixed(2)} Billion`;
        } else if (value >= million) {
            return `$${(value / million)?.toFixed(2)} Million`;
        } else {
            return `$${value?.toFixed(2)}`;
        }
    };
    return (
        <div className=" w-11/12 m-auto">
            <div>
                <p className="text-4xl font-extrabold text-center py-10 text-orange-500 flex justify-center items-center gap-3">
                    Crypto Dictionary
                </p>
            </div>
            <section className=" grid grid-cols-4 gap-6">

                {dictionary?.map((item) => (
                    <div key={item.id} className="crypto-item bg-orange-200 p-8 rounded-xl flex flex-col justify-between ">
                        <section className=" my-3 ">
                            <h3 className=" text-center mb-4 font-bold text-xl text-orange-500">{item.name}</h3>
                            <p><span className=" font-bold mb-1">Market Cap:</span> {formatMarketCap(item?.market_cap)}</p>
                            <p><span className=" font-bold mb-1">24H Market Change:</span> {Number(item.market_cap_change_24h).toFixed(4)}%</p>
                            {item.content && <p className=" line-clamp-3 mb-1"><span className=" font-bold">Content :</span>{item.content}</p> } 
                            <p><span className=" font-bold">24H Volume:</span> {item.volume_24h}</p>

                        </section>
                        <div className=" flex  items-center ">
                            <p className=" mr-1 font-bold">Top 3 Coins: </p>
                            {item.top_3_coins.map((coin, index) => (
                                <img
                                    key={index}
                                    src={coin}
                                    alt={`Coin ${index + 1}`}
                                    className=" rounded-full"
                                    style={{ width: "50px", marginRight: "10px" }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default CryptoDictionary;
