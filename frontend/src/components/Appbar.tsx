import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { useUser } from "../hooks";
import write from "../assets/write-svgrepo-com.svg";
import SuprSendInbox from "@suprsend/react-inbox";
import "react-toastify/dist/ReactToastify.css";

const apikey = import.meta.env.VITE_SUPRSEND_WORKSPACE_SECRET
console.log(apikey);

export const Appbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { loading, user, isLoggedIn } = useUser();

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="flex justify-between px-6 py-2 border-b">
      <div className="flex flex-col justify-center">
        <Link to={"/blogs"}>
          <div className="text-2xl font-bold">BlogVault</div>
        </Link>
      </div>
      {!loading && isLoggedIn ? (
        <div className="flex gap-4 items-center">
          <div className="flex justify-center">
            <SuprSendInbox
              workspaceKey={import.meta.env.VITE_SUPRSEND_WORKSPACE_KEY}
              subscriberId="<subscriber_id>"
              distinctId={user?.id || ' '}
              
            />
            <button
              type="button"
              className="text-slate-600 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 focus:outline-2"
              onClick={() => navigate("/publish")}
            >
              <div className="flex items-center gap-2">
                <img src={write} alt="" className="w-7 h-7" />
                <div>New</div>
              </div>
            </button>
          </div>
          <div className="relative">
            <Avatar name={user?.name} size="big" onClick={handleAvatarClick} />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-mg shadow-lg z-10">
                <button
                  className="block w-full text-left px-4 py-2 font-medium hover:text-green-500 hover:bg-slate-100 rounded-md"
                  onClick={() => {
                    navigate(`/user/${user?.id}`);
                  }}
                >
                  Profile
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-red-500 font-medium hover:text-red-600 hover:bg-slate-100 rounded-md"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <div className="flex justify-center">
            <button
              type="button"
              className="text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => navigate("/signin")}
            >
              signin
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-black bg-slate-200 hover:bg-green-200  focus:outline-none focus:ring-4 focus:ring-green-500 font-medium rounded-full text-md px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => navigate("/signup")}
            >
              signup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
