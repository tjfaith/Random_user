import React from "react";

const Header = ({ totalUsers, setShowInput }) => {
  const handleShowInput = () => {
    setShowInput(true);
  };
  return (
    <div className="w-full px-10 fixed z-20  shadow-lg text-center text-white   bg-gradient-to-t from-green-500 via-lime-800 to-green-900">
      <div className="container mx-auto flex flex-col md:flex-row  items-center justify-between gap-3 py-3">
        <h1 className="text-4xl  text-slate-200">RANDOM USERS</h1>
        <div className=" flex items-center space-x-2">
          <span className="font-bold text-xl">Total Users: {totalUsers}</span>
          <button
            className="text-green-800 bg-white p-2 rounded-md"
            onClick={handleShowInput}
          >
            + Input Total Users{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
