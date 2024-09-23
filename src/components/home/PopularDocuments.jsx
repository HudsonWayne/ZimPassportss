import Passport from "../../assets/images/Zimbabwe 3.png";
import { FaArrowRight } from "react-icons/fa6";

const PopularDocuments = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold">Popular Documents</h1>
        </div>
        <div className="row">
          <div className="col-md-3 text-center flex items-center justify-center text-2xl flex-col gap-2">
            <img
              src={Passport}
              alt="passport"
              className="w-[100%] h-auto object-cover object-center md:w-[10vw] mt-3"
            />
            <p>Zimbabwean Passport</p>
          </div>
          <div className="col-md-3 text-center flex items-center justify-center text-2xl flex-col gap-2">
            <img
              src={Passport}
              alt="passport"
              className="w-[100%] h-auto object-cover object-center md:w-[10vw] mt-3"
            />
            <p>Zimbabwean Passport</p>
          </div>
          <div className="col-md-3 flex text-center items-center justify-center text-2xl flex-col gap-2">
            <img
              src={Passport}
              alt="passport"
              className="w-[100%] h-auto object-cover object-center md:w-[10vw] mt-3"
            />
            <p>Zimbabwean Passport</p>
          </div>
          <div className="col-md-3 bg-[#F5F5F5] rounded h-[60vh] flex flex-col items-center justify-center gap-1 md:h-auto">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <a href="/popular_documents">
                <FaArrowRight className="text-[#008699]" />
              </a>
            </div>
            <p>All Documents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDocuments;
