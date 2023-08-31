import { useContext, useEffect, useState } from "react";
import "./home.css";
import { UserContext } from "../../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Question from "../../Question/Question";

function Home() {
  const [userData, setUserData] = useContext(UserContext);
  const [allQuestions, setAllQuestions] = useState([]);
  const navigate = useNavigate();
  const Questions = async () => {
    try {
      const questionRes = await axios
        .get(`https://evangadiforumbackend.onrender.com/api/questions`, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
          setAllQuestions(response.data.data);
          console.log(response);
        });
    } catch (err) {
      console.log("problem", err);
    }
  };
  useEffect(() => {
    if (!userData.user) {
      navigate("/login");
    } else {
      Questions();
    }
  }, [userData.user, navigate]);
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/ask-question");
  };
  return (
    <div className="container my-5 home-container">
      <div className="d-flex mb-5 justify-content-between">
        <button className="ask_button" onClick={handleClick}>
          Ask Question
        </button>
        <h4>Welcome: {userData.user?.display_name}</h4>
      </div>
      <h3>Questions</h3>
      <div>
        {allQuestions.map((question) => (
          <div key={question.post_id}>
            <hr />
            <Link
              to={`questions/${question.post_id}`}
              className="text-decoration-none text-reset"
            >
              <Question
                question={question.question}
                userName={question.user_name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
