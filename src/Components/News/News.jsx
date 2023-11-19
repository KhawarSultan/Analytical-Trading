import { useEffect, useState } from "react";

const CryptoNews = () => {
    const [News, setNews] = useState();

    const newsUrl =
        "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&=f22f8d1cbbcf7bbbd9783dbf2918b0a79030a2589bc3db2bcbc329d7df61b9e8";

    const fetchUrl = async (url) => {
        try {
            let response = await fetch(url);
            if (!response?.ok) {
                throw new Error("Network response was not ok");
            }
            let data = await response?.json();
            setNews(data?.Data);
        } catch (error) {
            console.error("Error!", error.message);
        }
    };

    useEffect(() => {
        fetchUrl(newsUrl);
    }, []);

    return (
        <>
            <div>
                <p className=" text-4xl font-extrabold  text-center py-10 text-orange-500 flex justify-center items-center gap-3"> Crypto News</p>
            </div>
            <main className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-11/12 m-auto py-10">


                {News?.map((news) => (
                    <div
                        key={news?.id}
                        className="bg-orange-100 flex flex-col justify-between transition-all ease-in hover:bg-orange-200 px-6 py-8  rounded-xl"
                    >
                        <section>
                            <div className="mb-4 ">
                                <img src={news?.imageurl} className="w-full" alt={news?.title} />
                            </div>
                            <div className="container_copy">
                                <span className=" font-bold px-3 shadow-lg  py-1 bg-orange-500 text-white rounded-full">
                                    {news?.tags.split('|').slice(0, 1)}
                                </span>
                                <p className="my-3 font-bold text-xl leading-5">{news?.title}</p>
                                <p className="mb-3 leading-5 text-gray-600 line-clamp-3">{news?.body}</p>
                            </div>
                        </section>
                        <section>
                            <h5 className="mb-6">
                                <b>Source:</b> {news?.source}
                            </h5>
                            <span
                                className="cursor-pointer p-3 bg-orange-500 shadow-md hover:bg-orange-600 text-white rounded-lg"
                                onClick={() => window.open(news?.url, "_blank")}
                            >
                                <b>Read More</b>
                            </span>
                        </section>
                    </div>
                ))}
            </main>
        </>
    );
};

export default CryptoNews;
