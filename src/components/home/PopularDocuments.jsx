import Passport from "../../assets/images/Zimbabwe 3.png";

const PopularDocuments = () => {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-md-3 flex flex-col gap-2">
            <img
              src={Passport}
              alt="passport"
              className="w-[10vw] h-auto object-cover object-center "
            />
            <p>Zimbabwean Passport</p>
          </div>
          <div className="col-md-3 flex flex-col gap-2">
            <img
              src={Passport}
              alt="passport"
              className="w-[10vw] h-auto object-cover object-center "
            />
            <p>Zimbabwean Passport</p>
          </div>
          <div className="col-md-3 flex flex-col gap-2">
            <img
              src={Passport}
              alt="passport"
              className="w-[10vw] h-auto object-cover object-center "
            />
            <p>Zimbabwean Passport</p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default PopularDocuments;
