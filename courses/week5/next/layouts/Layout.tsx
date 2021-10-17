import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Forecast from "../pages/forecast";

const Layout = (props: any) => {
  const router = useRouter();

  const logout = async () => {
    if (localStorage.getItem("logged")) {
      localStorage.setItem("logged", "");
      await router.push("/login");
    }
  };

  let menu;

  if (!props.auth) {
    menu = (
      <ul className="flex ">
        <li className="text-sm lg:flex-grow">
          <Link href="/login" as="/login">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4">
              Login
            </a>
          </Link>
        </li>
        <li className="text-sm lg:flex-grow">
          <Link href="/Register" as="/register">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white  mr-7">
              Register
            </a>
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="flex">
        <li className="text-sm lg:flex-grow">
          <a
            href="/forecast"
            className=" block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4"
            onClick={Forecast}
          >
            Forecast
          </a>
        </li>
        <li className="text-sm lg:flex-grow ">
          <a
            href="#"
            className="block mt-4  lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4"
            onClick={logout}
          >
            Logout
          </a>
        </li>
      </ul>
    );
  }

  return (
    <>
      <div className="bg-green-500 p-4 flex justify-between items-center ">
        <div className=" container  flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/Home">
            <a className="block mt-4 ml-10 lg:inline-block lg:mt-0 text-green-100 hover:text-white mr-4">
              Panda
            </a>
          </Link>
        </div>
        <div className="flex ">{menu}</div>
      </div>

      <main className="form-signin">{props.children}</main>
    </>
  );
};

export default Layout;
