import React from "react";
import { useState } from "react";
import axios from "../baseUrl";
import loader from "../assets/loader.gif";
const InputPupUp = ({ setAllUsers, setShowInput }) => {
  const [numberOfUser, setNumberOfUser] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const handleGetUsers = (e) => {
    setShowLoader(true);
    e.preventDefault();
    axios
      .get("?results=" + numberOfUser)
      .then((response) => {
        setAllUsers(response.data.results);
        setShowInput(false);
        console.log(response.data.results);
        setShowLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setShowLoader(false);
      });
  };
  return (
    <div className="bg-black bg-opacity-50 fixed h-full top-0 flex items-center justify-center w-full z-30">
      <div
        className="bg-white p-5 rounded-lg relative"
        data-aos="flip-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div
          onClick={() => setShowInput(false)}
          className=" hover:bg-slate-400 transition-all duration-75 ease-linear hover:text-white cursor-pointer shadow rounded-full p-2 inline-flex h-10 w-10 items-center justify-center absolute -top-5 -right-5 bg-white"
        >
          x
        </div>
        <form
          onSubmit={handleGetUsers}
          className="flex flex-col gap-3 items-center"
        >
          <label className="text-slate-500">
            Input number of users to show
          </label>
          <input
            type="number"
            value={numberOfUser}
            onChange={(e) => setNumberOfUser(e.target.value)}
            required
            className="bg-white border text-xl border-slate-300 rounded-md outline-none p-3 text-slate-400"
          />
          <button
            type="submit"
            disabled={showLoader}
            className="bg-green-800 text-white flex items-center justify-center   w-full rounded-md shadow hover:bg-green-700 transition-all duration-75 ease-linear"
          >
            {!showLoader ? (
              <span className="p-3">GO</span>
            ) : (
              <img src={loader} className="w-12" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputPupUp;
