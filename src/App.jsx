import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import LoginForm from "./components/LoginForm";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "stats", element: <Stats /> },
      { path: "profile", element: <Profile /> },
      {path: "login", element: <LoginForm /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;