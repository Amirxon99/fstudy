import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import CoursePage from "../pages/Courses";
import LoginPage from "../pages/Login/login";

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={<CoursePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </>
  );
}

export default Root;
