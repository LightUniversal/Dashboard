import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";

import App from './App.jsx'
import './index.css'
import LoginScreen from './Components/Login.jsx';
import RegisterScreen from './Components/Register.jsx';
import store from "./store.js"
import HomeScreen from './Components/Home.jsx';
import Logout from './Components/Logout.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<HomeScreen />}></Route>

      <Route path="/register" element={<RegisterScreen />}></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);