import { useParams } from "react-router-dom"; // Make sure to import from "react-router-dom" for useParams
import UseCrpto from "./LearnPagesData/UseCrpto";

const UseCrypto = () => {
  const { UseCrptoID } = useParams();
  const selectedData = UseCrpto.find((data) => data.id === parseInt(UseCrptoID));

  if (!selectedData) {
    return <div>Data not found</div>;
  }

  return (
    <div className=" w-11/12 m-auto py-20">
      <h1 className=" text-5xl font-bold mb-10">{selectedData.title1}</h1>
      <p className=" text-lg text-gray-600 w-5/6 mb-12">{selectedData.des1}</p>
      <h1 className=" text-4xl font-bold mb-5">{selectedData.title2}</h1>
      <p className=" text-lg text-gray-600 w-5/6 mb-12">{selectedData.des2}</p>
      <h1 className=" text-4xl font-bold mb-5 ">{selectedData.title3}</h1>
      <p className=" text-lg text-gray-600 w-5/6">{selectedData.des3}</p>
    </div>
  );
};

export default UseCrypto;
