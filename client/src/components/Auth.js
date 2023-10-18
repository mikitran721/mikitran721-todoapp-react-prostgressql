import React, { useState } from "react";
import { useCookies } from "react-cookie";

const Auth = () => {
  const [cookies, setCookies, removeCookies] = useCookies(null);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  console.log(">> Cookie: ", cookies);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      setError("Make sure password match!");
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();
    if (data.detail) {
      setError(data.detail);
    } else {
      setCookies("Email", data.email);
      setCookies("AuthToken", data.token);

      window.location.reload();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogin ? "Please log in" : "Please sign up"}</h2>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          {!isLogin && (
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="confirm password"
            />
          )}
          <input
            onClick={(e) => handleSubmit(e, isLogin ? "login" : "signup")}
            type="submit"
            value="Submit"
            className="create"
          />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button
            onClick={() => viewLogin(false)}
            style={{
              backgroundColor: !isLogin
                ? "rgb(255,255,255)"
                : "rgb(188,188,188)",
            }}
          >
            Sign up
          </button>
          <button
            style={{
              backgroundColor: isLogin
                ? "rgb(255,255,255)"
                : "rgb(188,188,188)",
            }}
            onClick={() => viewLogin(true)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
