import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import CoursePage from "../pages/Courses";
import LoginPage from "../pages/Login/login";
import TestPage from "../pages/test/Test";


function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course/:id" element={<CoursePage/>} />
        <Route path="/tests" element={<TestPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </>
  );
}

export default Root;
