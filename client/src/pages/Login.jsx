import { useState } from "react";
import signup from "../imgs/regii.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from '@redux/authSlice.jsx';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.Token;

        // 🔥 Store token in Redux
        dispatch(loginSuccess(token));

        alert("Login successful");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert("Invalid credentials");
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <section>
      <main className="mainRegi">
        <div className="registration">
          <div className="registration-image">
            <img src={signup} alt="" width="400" height="500" />
          </div>
          <div className="registration-form">
            <h1 className="main-heading mb-3">Login form</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                />
              </div>
              <br />
              <div>
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};
