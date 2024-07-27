import React, { useState } from "react";

const FormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setPasswordError(value.length < 6);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  return (
    <div className="form-container w-full max-w-sm mx-auto p-8 bg-gray-200 rounded-md">
      <div className="avatar mt-16  w-16 h-16 rounded-full bg-gray-300 mx-auto mb-8"></div>

      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        className={`w-full p-2 mb-4 bg-gray-300 border ${
          emailError ? "border-red-500" : "border-green-500"
        } rounded`}
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
        className={`w-full p-2 mb-4 bg-gray-300 border ${
          passwordError ? "border-red-500" : "border-green-500"
        } rounded`}
      />
      <div className="shimmer w-full h-2 mt-4 bg-gray-300 rounded-full mx-auto"></div>
      <div className="shimmer w-3/4 h-2 mt-4 bg-gray-300 rounded-full mx-auto"></div>
      <div className="shimmer w-1/2 h-2 mt-16 bg-gray-300 rounded-full mx-auto"></div>
    </div>
  );
};

export default FormComponent;
