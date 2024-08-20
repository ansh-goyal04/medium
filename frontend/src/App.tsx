import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Blog from "./pages/blog";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/createBlog";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/blog/:id" element={<Blog/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/create" element={<CreateBlog/>}></Route>

        </Routes>      
      </BrowserRouter>
    </>
  )
}
export default App;