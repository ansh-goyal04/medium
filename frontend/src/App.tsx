import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signIn";
import SignIn from "./pages/signIn";
import Blog from "./pages/blog";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/blog/:id" element={<Blog/>}></Route>

        </Routes>      
      </BrowserRouter>
    </>
  )
}
export default App;