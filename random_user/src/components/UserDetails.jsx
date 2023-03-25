import React from "react";

const UserDetails = ({ userDetail, setUserDetail }) => {
  return (
    <div className="bg-black bg-opacity-50 fixed h-full top-0 flex items-center md:px-20 px-5 py-20 justify-center w-full z-30">
      <div className="relative animate__animated animate__flipInX h-70-screen md:h-auto my-44 bg-white  border border-green-300 rounded-md">
        <div
          onClick={() => setUserDetail(null)}
          className=" hover:bg-slate-400 transition-all duration-75 ease-linear hover:text-white cursor-pointer shadow rounded-full p-2 inline-flex h-10 w-10 items-center justify-center absolute -top-5 -right-5 bg-white"
        >
          x
        </div>
        <div className="bg-white overflow-y-auto h-65-screen md:h-auto p-5">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-9 mb-4">
            <div className="h-full  w-1/2 flex-grow border">
              <img
                className=" object-cover w-full h-full"
                src={userDetail.picture.large}
              />
            </div>
            <div className="flex-grow ">
              <h1 className="text-3xl font-extrabold text-green-900">
                {userDetail.name.title} {userDetail.name.first} {userDetail.name.last}
              </h1>
              <hr />
              <div className="text-sm space-y-2 mt-4 text-slate-500">
                <div
                  className="bg-slate-200 px-2 py-1 rounded-md"
                  data-aos="fade-up"
                >
                  <span className="font-bold">Full Address:</span>
                  {userDetail.location.street.number},
                  {userDetail.location.street.name}, {userDetail.location.city},
                  {userDetail.location.state}, {userDetail.location.country}
                </div>

                <div
                  className="bg-slate-200 px-2 py-1 rounded-md"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="font-bold">Gender:</span> {userDetail.gender}
                </div>

                <div
                  className="bg-slate-200 px-2 py-1 rounded-md"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="font-bold">Date of Birth:</span>{" "}
                  {new Date(userDetail.dob.date).toDateString()}
                </div>
                <div
                  className="bg-slate-200 px-2 py-1 rounded-md"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <span className="font-bold">Age:</span> {userDetail.dob.age}
                </div>

                <div
                  className="bg-slate-200 px-2 py-1 rounded-md"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <span className="font-bold">Telephone No.:</span>
                  {userDetail.phone}
                </div>
                <div
                  className="bg-slate-200 px-2 py-1 rounded-md"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <span className="font-bold">Email:</span> {userDetail.email}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-4 italic text-xs text-slate-500 flex gap-3 md:flex-row flex-col">
            <div>
              <span className="font-bold">Registration Date:</span>
              {new Date(userDetail.registered.date).toDateString()}
            </div>
            <div>
              <span className="font-bold">Age When Registered:</span>
              {userDetail.registered.age}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
