import Publications from "../Data/Publications"
import { useNavigate } from "react-router";

const PublicationsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p className=" text-4xl font-extrabold  text-center py-10 text-orange-500 flex justify-center items-center gap-3">Publications</p>


      <main className=" w-11/12 m-auto grid grid-cols-1">
        {Publications?.map((publicaion) => {
          return (
            <div key={publicaion.id} className=" flex gap-6 p-8 bg-gray-100 my-6" >
              <div className=" w-[12%]">
                <img src={publicaion.img} className=" w-full" alt="" />
              </div>
              <div className=" w-[100%] flex flex-col justify-between">
                <div>

                <p className="text-xl mb-3 font-bold ">{publicaion.title}</p>
                <p className="text-xl mb-3 line-clamp-3">{publicaion.des1}</p>
                </div>
                <div className=" flex ">
                  <p onClick={() => navigate(`/cryptos-publications/${publicaion.id}`)} className="px-4 py-3 font-bold bg-orange-500 hover:bg-orange-600 rounded-lg transition-all ease-in cursor-pointer text-white">Read More</p>
                </div>
              </div>
            </div>
          )
        })}
      </main>

    </div>
  )
}

export default PublicationsPage