import type { NextPage } from "next";

import Layout from "../layouts/Layout";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("logged")) {
      setMessage(`Hi ${localStorage.getItem("name")}`);
      setAuth(true);
    } else {
      setMessage("You are not logged in");
      setAuth(false);
    }
  });

  return <Layout auth={auth}>{message}</Layout>;
};

export default Home;
