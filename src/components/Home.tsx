import profilePicture from "../assets/profile-pic.png";

export const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="m-10 ">
          <div className="text-white font-bold text-4xl">
            Hi, I'm{" "}
            <span className="text-indigo-600 g-gradient-to-r from-indigo-900">
              SAMEER AHMED
            </span>
            <br />
            <span className="text-xl">An aspiring developer</span>
          </div>
        </div>
        <img className="h-[200px] m-10" src={profilePicture} alt="" />
      </div>
    </div>
  );
};
