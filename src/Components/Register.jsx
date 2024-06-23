import React, { useEffect, useState } from "react";
import {
  FaBookReader,
  FaBuilding,
  FaEnvelope,
  FaFacebook,
  FaLock,
  FaSignInAlt,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Form, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Actions";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  


  const submitHandler = async (e) => {
    e.preventDefault();

    // Simulate a register API call
    const user = { user: email };
    localStorage.setItem('user', JSON.stringify(user));

    // Dispatch register success action
    dispatch(register(user));

    // navigate to homepage
    navigate("/");
  };

  
  return (
    <div>
      <Form
        className=" text-white bg-black relative top-1 w-4/5 mx-auto border border-slate-800 rounded-md shadow-md px-10 py-3"
        onSubmit={
          submitHandler
        }
      >
        <h2 className=" text-2xl text-center">
          Sign-Up
        </h2>
        
        <div className="email py-2">
          <label htmlFor="email" className=" my-2 flex items-center text-green-400">
            Email <FaEnvelope className=" mx-1 border text-2xl rounded-full p-1 border-slate-600" />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className=" w-full h-16 rounded  bg-slate-700 px-4 text-slate-300"
            placeholder="email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="password my-2 py-3">
          <label
            htmlFor="password"
            className=" flex items-center text-green-400 my-2"
          >
            Password <FaLock className=" mx-1 border text-2xl rounded-full p-1 border-slate-600" />
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full h-16 rounded  bg-slate-700 px-4 text-slate-300"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="cpassword my-3 py-2">
          <label
            htmlFor="cpassword"
            className="my-2 flex items-center text-green-400"
          >
            Confirm Password <FaLock className=" mx-1 border text-2xl rounded-full p-1 border-slate-600" />
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            className="w-full h-16 rounded  bg-slate-700 px-4 text-slate-300"
            placeholder="confrim password"
            value={cpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        
        
        <div className="submit my-3">
          <button
            type="submit"
            className=" flex items-center bg-gray-950 py-3 px-5 border border-slate-800 text-white rounded shadow-sm"
          >
            Register <FaSignInAlt className=" mx-1 text-green-400" />
          </button>
        </div>
        <div className="register border-t font-medium text-sm border-slate-500 my-2 py-4">
          Already have an account?
          <Link to={"/login"} className=" bg-green-900 mx-2 my-1 inline-block p-3 px-5 rounded">
            Login
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterScreen;
