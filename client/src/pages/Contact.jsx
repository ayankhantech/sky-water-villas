import { useState } from "react";

import signupvilla  from "../imgs/regii.png"
import { useNavigate } from "react-router-dom";

export const Contact = () => {
 
    const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    email: "",
   
    message: "",
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
      const response = await fetch("http://localhost:8000/api/auth/contact", {
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
        
        alert("message submit successful");

        setUser({ username: "", email: "",message: "" });
        console.log(responseData);
      } else {
        console.log("error inside response ", "error");
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
                  src={signupvilla}
                  alt=""
                  width="400"
                  height="500"
                />
              </div>
          
              <div className="registration-form">
                <h1 className="main-heading mb-3">Contact form</h1>
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
                
                    <textarea
                      type="message"
                      name="message"
                      value={user.message}
                      onChange={handleInput}
                      placeholder="message"
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