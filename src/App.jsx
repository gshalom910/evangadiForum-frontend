import React, { useContext, useEffect } from "react";
import "./App.css";
import { UserContext } from "./component/Context/UserContext";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import SignUp from "./component/Page/SignUp/SignUp";
import Login from "./component/Page/Login/Login";
import Home from "./component/Page/Home/Home";
import AskQuestion from "./component/Page/AskQuestion/AskQuestion";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import QuestionDetail from "./component/Page/QuestionDetail/QuestionDetail";
function App() {
  const [userData, setUserData] = useContext(UserContext);
  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    } else {
      const userRes = await axios.get(
        `${process.env.REACT_APP_base_url}/api/users`,
        {
          headers: { "x-auth-token": token },
        }
      );
      // console.log(userRes);
      setUserData({
        token,
        user: {
          id: userRes.data.data.user_id,
          display_name: userRes.data.data.first_name,
        },
      });
    }
  };
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);
  return (
    <>
      <Header logout={logout} />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home logout={logout} />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
