import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";

import Chat from "./pages/chat/Chat";

import {useState} from 'react'

// import './App.css';

import { Navigate } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";





function App() {

  const currentUser = true;
  
  const [chatPageOpen, setChatPageOpen] = useState(false);

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
          <div style={{ flex: "60vw", width: "60vw" }}>
            <Outlet />
          </div>
          {!chatPageOpen && <RightBar />}
          
        </div>
      </div>
    );
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
       
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/sample",
      element: <Chat />,
    }
    

  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

