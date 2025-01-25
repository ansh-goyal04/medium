import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/button";
import InputBox from "../components/inputbox";
import Quote from "../components/Quote";
import SubHeading from "../components/subHeading";
import { SigninInp } from "@ansh_goyal/medium";
import axios from 'axios';
import { BACKEND_URL } from "../config";
import AlertDemo from "../components/AlertDemo";

export default function SignIn() {
  const [input, setInput] = useState<SigninInp>({
    email: "",
    password: ""
  });
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleclick = async () => {
    if (input.email.length === 0 || input.password.length === 0) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, input);
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col border-hidden shadow-lg m-auto rounded p-4 md:px-6">
        <div className="w-full">
          {showAlert && <AlertDemo title="Invalid Input" message="Please enter a valid email and password." />}
          
          <SubHeading
            heading="Sign In"
            link="Signup"
            text="Don't have an account?"
            to="/signup"
          />

          <InputBox
            placeholder="example@gmail.com"
            label="Email"
            type="email"
            onChange={(e) => {
              setInput({ ...input, email: e.target.value });
            }}
          />

          <InputBox
            placeholder="Password"
            type="password"
            label="Password"
            onChange={(e) => {
              setInput({ ...input, password: e.target.value });
            }}
          />

          <Button buttonText="Sign In" onClick={handleclick} />
        </div>
      </div>

      <div className="hidden md:block">
        <Quote />
      </div>
    </div>
  );
}
