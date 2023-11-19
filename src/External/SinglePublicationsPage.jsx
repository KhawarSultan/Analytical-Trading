import { useParams } from "react-router-dom";
import Publications from "../Data/Publications"
import { useEffect, useState } from "react";
import { FaAmazon } from "react-icons/fa6";

const SinglePublicationsPage = () => {
    const { publicationid } = useParams();
    const [filteredPublication, setFilteredPublication] = useState();
    useEffect(() => {
        const filteredData = Publications?.filter(publication => publication.id == publicationid);
        setFilteredPublication(filteredData[0])
    }, [publicationid]);
    return (
        <div className=" w-11/12 m-auto">
            <div key={filteredPublication?.id} className=" flex gap-28 p-8  my-6 rounded-xl" >
                <div className=" w-[40%]">
                    <img src={filteredPublication?.img} className=" w-full" alt="" />
                </div>
                <div className=" w-[100%] flex flex-col justify-between">
                    <div>
                        <p className="text-3xl mb-6 font-bold ">{filteredPublication?.title}</p>
                        <p className="text-2xl mb-2"><b>Publisher :</b> {filteredPublication?.publisher}</p>
                        <p className="text-2xl mb-2"><b>Year :</b> {filteredPublication?.year}</p>
                        <p className="text-2xl mb-12"><b>Publisher :</b> {filteredPublication?.publisher}</p>
                        <p className="text-lg text-gray-500 mb-6">{filteredPublication?.des1}</p>
                        <p className="text-lg text-gray-500 mb-6">{filteredPublication?.des2}</p>
                        <p className="text-lg text-gray-500">{filteredPublication?.des3}</p>
                    </div>

                    <div className=" flex mt-6">
                        <p onClick={() => window.open(filteredPublication?.url, '_blank')} className="px-8 py-3 font-bold border bg-gray-200 hover:bg-orange-500 rounded-lg transition-all ease-in cursor-pointer hover:text-white flex items-center gap-2">
                            <FaAmazon size={16} /> Check out
                        </p>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default SinglePublicationsPage