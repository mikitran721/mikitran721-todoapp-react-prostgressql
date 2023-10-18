import React, { useState } from "react";

const Auth = () => {
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogin ? "Please log in" : "Please sign up"}</h2>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {!isLogin && <input type="password" placeholder="confirm password" />}
          <input type="submit" value="Submit" className="create" />
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
