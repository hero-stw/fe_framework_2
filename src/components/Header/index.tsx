import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiLogOut } from "react-icons/bi"
import { AiOutlineHistory } from "react-icons/ai"

type Props = {};

const Header = (props: Props) => {
  if (localStorage.getItem("user")) {
    var users = JSON.parse(localStorage.getItem("user"));
  }
  const router = useRouter()
  const handleLogout = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      router.push("/")
    }
  };
  return (
    <div>
      <div className="bg-[#4192EC] flex justify-between items-center min-w-[80em] m-auto px-36 py-2">
        <div>
          <Link href="/">
            <a>
              <img
                src="https://www.preplounge.com/assets/images/logo/header.png"
                width="200px"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          {users ? (
            <div className="flex items-center">
              <div className="text-white px-4 font-normal cursor-pointer">
                <p>{users.user.email}</p>
              </div>
              <div className="text-white text-2xl cursor-pointer hover:text-red-300">
                <Link href="/history"><AiOutlineHistory /></Link>
              </div>
              <div className="text-white text-2xl mt-1 hover:text-red-300 ml-3">
                <button onClick={() => handleLogout()}>
                  <BiLogOut />
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-white px-4 font-normal hover:underline">
                <Link href="/auth/login">Login</Link>
              </div>
              <div>
                <button className="h-8 bg-[#FECD00] px-11 rounded font-medium">
                  <Link href="/auth/register">Sign up for free</Link>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div >
  );
};

export default Header;
