import { useState } from "react";
import Button from "../components/button";
import InputBox from "../components/inputbox";
import Quote from "../components/Quote";
import SubHeading from "../components/subHeading";

export default function SignUp() {
    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:""
    });
    
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
                    name:e.target.value
                })
            }}
          ></InputBox>
          <InputBox
            placeholder={"example@gmail.com"}
            label={"Email"}
            onChange={(e:any)=>{
                setInputs({
                    ...inputs,
                    email:e.target.email
                })
            }}
          ></InputBox>
          <InputBox
            placeholder={"password"}
            label={"Password"}
            onChange={(e:any)=>{
                setInputs({
                    ...inputs,
                    password:e.target.password
                })
            }}
          ></InputBox>
          <Button buttonText={"Sign Up"} onClick={"do"}></Button>
        </div>
      </div>
      <Quote></Quote>
    </div>
  );
}
