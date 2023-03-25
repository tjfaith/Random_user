import { useState, useEffect } from "react";
import InputPupUp from "./components/InputPupUp";
import { GiExpand } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import Header from "./components/Header";
import UserDetails from "./components/UserDetails";
function App() {
  const [showInput, setShowInput] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [userDetail, setUserDetail] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header totalUsers={allUsers.length} setShowInput={setShowInput} />
      {showInput && (
        <InputPupUp setAllUsers={setAllUsers} setShowInput={setShowInput} />
      )}
      {userDetail && (
        <UserDetails userDetail={userDetail} setUserDetail={setUserDetail} />
      )}
      <div className="px-10  pt-32">
        <div className="flex flex-wrap gap-6  justify-center container mx-auto">
          {allUsers.map((user, index) => (
            <div
              key={index}
              className="text-center text-slate-500 relative border border-green-400 rounded-md"
            >
              <div className=" w-40  h-40 max-h-40 max-w-fit rounded-t-md ">
                <img
                  className=" object-cover w-full h-full rounded-t-md"
                  src={user.picture.large}
                />
              </div>
              <div
                onClick={() => setUserDetail(user)}
                className="cursor-pointer py-2 w-40 flex items-center justify-center hover:font-bold hover:text-green-900  transition-all duration-100 ease-linear"
              >
                {user.name.first} {user.name.last}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
