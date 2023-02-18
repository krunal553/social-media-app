import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Explore from "./pages/explore/Explore";

import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import BottomNavbar from "./components/bottomNavbar/BottomNavbar";

import Chat from "./pages/chat/Chat";

import {createContext, useState } from 'react';

import './App.css';
import { Navigate } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";





function App() {

  const currentUser = true;

  // const {currentUser} = useContext(AuthContext)
  const {darkMode} = useContext(DarkModeContext);


  // const [chatPageOpen, setChatPageOpen] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: "80%", width: "60vw" }}>
            <Outlet />
          </div>
          
        </div>
        <BottomNavbar />
      </div>
    );
  }


  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/",
          element: 
            <div style={{ display: "flex" }}>
            <Home />
            <RightBar />
            </div>,
        },
      ]
    },
    
    


  ]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

