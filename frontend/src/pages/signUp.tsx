import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import InputBox from "../components/inputbox";
import Quote from "../components/Quote";
import SubHeading from "../components/subHeading";
import { SignupInp } from "@ansh_goyal/medium";
import axios from 'axios';
import { BACKEND_URL } from "../config";
import AlertDemo from "../components/AlertDemo";

export default function SignUp() {
    const [inputs,setInputs]=useState<SignupInp>({
        name:"",
        email:"",
        password:""
    });
    const navigate = useNavigate();
    const handleclick=async()=>{
      if(inputs.email.length==0 || inputs.password.length==0){
        // alert("jd")
        return <div> <AlertDemo></AlertDemo></div>
      }
      else 
      try{
        const response=await axios.post(`${BACKEND_URL}/api/v1/user/signup`,inputs);
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
            heading={"Create an account"}
            link={"Signin"}
            text={"Already have an account?"}
            to={"/signin"}
          ></SubHeading>
          <InputBox
            placeholder={"Enter your username"}
            label={"Username"}
            onChange={(e:any)=>{
                setInputs({
                    ...inputs,
                    name:e.target.value.trim()
                })
            }}
          ></InputBox>
          <InputBox
            placeholder={"example@gmail.com"}
            label={"Email"}
            type={"email"}
            onChange={(e:any)=>{
                setInputs({
                    ...inputs,
                    email:e.target.value.trim()
                })
            }}
          ></InputBox>
          <InputBox
            placeholder={"password"}
            type={"password"}
            label={"Password"}
            onChange={(e:any)=>{
                setInputs(inputs=>({
                    ...inputs,
                    password:e.target.value.trim()
                }))
            }}
          ></InputBox>
          <Button buttonText={"Sign Up"} onClick={handleclick}></Button>
        </div>
      </div>
      <Quote></Quote>
    </div>
  );
}
