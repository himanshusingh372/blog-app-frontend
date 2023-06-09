import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Base from "./Components/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Services from "./Pages/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./Pages/private-routers/UserDashboard";
import PrivateRouter from "./Components/PrivateRouter";
import ProfileInfo from "./Pages/private-routers/ProfileInfo";
import PostPage from "./Pages/PostPage";
import UserProvider from "./context/UserProvider";
import Categories from "./Pages/Categories";
import UpdateBlog from "./Pages/UpdateBlog";
import { useState } from "react";
import Admin from "./Pages/Admin";
import ContactUsPage from "./Pages/Contactus";

function App() {
  
  return (
    
    <UserProvider>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/Admin" element={<Admin/>}/> */}
         <Route path="/contactus" element={<ContactUsPage/>}/>
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="/categories/:categoryId" element={<Categories />} />

          <Route path="/user" element={<PrivateRouter />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="profile-info/:userId" element={<ProfileInfo />} />
            <Route path="update-blog/:blogId" element={<UpdateBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  

  );
}

export default App;
