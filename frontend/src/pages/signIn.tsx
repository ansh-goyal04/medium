import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/button";
import InputBox from "../components/inputbox";
import Quote from "../components/Quote";
import SubHeading from "../components/subHeading";
import { SigninInp } from "@ansh_goyal/medium";
import axios from 'axios';
import { BACKEND_URL } from "../config";

export default function SignIn() {
  const [input,setInput]=useState<SigninInp>({
    email:"",
    password:""
  })
  const navigate = useNavigate();
  const handleclick=async()=>{
    try{
      const response=await axios.post(`${BACKEND_URL}/api/v1/user/signin`,input);
      const token=response.data.token;
      localStorage.setItem("token",token);
      navigate("/blogs");
    }
    catch(e){
      console.log(e);
      
    }
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-1/2 flex flex-cols border-hidden shadow-lg m-auto rounded px-2 py-4 ">
        <div className="w-full" >
          <SubHeading
            heading={"Sign in "}
            link={"Signup"}
            text={"Don't have an account?"}
            to={"/signup"}
          ></SubHeading>
          
          <InputBox
            placeholder={"example@gmail.com"}
            label={"Email"}
            type={"email"}
            onChange={(e)=>{
              setInput({
                ...input,
                email:e.target.value
              })
            }}
          ></InputBox>
          <InputBox
            placeholder={"password"}
            type="password"
            label={"Password"}
            onChange={(e)=>{
              setInput({
                ...input,
                password:e.target.value
              })
            }}
          ></InputBox>
          <Button buttonText={"Sign In"} onClick={handleclick}></Button>
        </div>
      </div>
      <Quote></Quote>
    </div>
  );
}
