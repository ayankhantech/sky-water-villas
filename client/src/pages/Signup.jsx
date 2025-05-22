import { useState } from "react";

import signup  from "../imgs/regii.png"
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../Context/authProvider"
export const Signup = () => {
  const {storeToken} = useAuth()
    const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    email: "",
   
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        navigate("/")
        storeToken(responseData.Token)
        alert("registration successful");

        setUser({ username: "", email: "",password: "" });
        console.log(responseData);
      } else {
        console.log("error inside response ", "error");
        alert("user already exist")
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <section>
        <main className="mainRegi">
          <div className="registration">
          
              <div className="registration-image">
                <img
                  src={signup}
                  alt=""
                  width="400"
                  height="500"
                />
              </div>
          
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration form</h1>
                <br />
                <form  onSubmit={handleSubmit}>
                  <div>
                   
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                 
                  <div>
                    
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
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
    </>
  );
};