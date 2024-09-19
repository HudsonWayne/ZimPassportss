import { FaApple } from "react-icons/fa";
import Image from "../../assets/images/wrapper.png";

function Download() {
  return (
    <div className="bg-[#008699] container h-[60vh] rounded-2xl text-white">
      <div className="row h-full">
        <div className="col-md-4 pr-3 flex gap-5 h-full flex-col justify-center">
          <h1 className="text-5xl poppins-medium text-white ">
            Download our app
          </h1>
          <p className="poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
          <div>
            <button className="btn bg-white text-[#008699] text-[1.2rem] poppins-medium px-10 rounded-full hover:bg-[#64d5e3]">
              <FaApple />
              Download
            </button>
          </div>
        </div>
        <div className="col-md-8 h-full hidden md:block">
          <img
            src="/src/assets/images/wrapper.png"
            alt="img"
            className="h-full w-full -mr-3 object-cover rounded-tr-xl object-center float-right"
          />
        </div>
      </div>
    </div>
  );
}

export default Download;
