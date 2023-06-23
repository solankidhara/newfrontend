import React from "react";

const SocialLogin = () => {
  return (
    <div className="d-flex flex-column ">
      <button className="border-0 bg-white py-2">
        <img src="/images/Google.png" className="pe-3" alt="not found"/>
        Sign in with Google
      </button>

      <button className="border-0 bg-white py-2">
        <img src="/images/Apple.png" className="pe-3" alt="not found"/>
        Sign in with Apple
      </button>
    </div>
  );
};

export default SocialLogin;
