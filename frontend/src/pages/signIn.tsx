import Button from "../components/button";
import InputBox from "../components/inputbox";
import Quote from "../components/Quote";
import SubHeading from "../components/subHeading";

export default function SignIn() {
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
            onChange={"do"}
          ></InputBox>
          <InputBox
            placeholder={"password"}
            label={"Password"}
            onChange={"do"}
          ></InputBox>
          <Button buttonText={"Sign In"} onClick={"do"}></Button>
        </div>
      </div>
      <Quote></Quote>
    </div>
  );
}
