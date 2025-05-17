import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import CoursePage from "../pages/Courses";
import LoginPage from "../pages/Login/login";
import TestPage from "../pages/test/Test";
import SolveTest from "../pages/solveTest/SolveTest";
import ChatOverlay from "../AI/ChatOverlay";
import Register from "../pages/register/Register";

function Root() {
  return (
    <>
    <ChatOverlay/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course/:id" element={<CoursePage/>} />
        <Route path="/tests" element={<TestPage/>} />
        <Route path="/solve-test/:id" element={<SolveTest/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
      
    </>
  );
}

export default Root;
