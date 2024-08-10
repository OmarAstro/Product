import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration goes here
};

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("Logged in successfully");
      } else {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log("Signed up successfully");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <button onClick={toggleForm}>
        {isLogin ? "Create an account" : "Already have an account? Log in"}
      </button>
    </div>
  );
};

export default Login;
