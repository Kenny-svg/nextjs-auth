"use client";
import { FaCheck, FaUser } from "react-icons/fa";
import Register from "../component/forms/Signup";
import { useState } from "react";
import ServiceProvider from "../component/forms/ServiceProvider";

const Signup = () => {
  const [formOne, setFormOne] = useState(true);
  const [formTwo, setFormTwo] = useState(false);
  const toggleFormOne = () => {
    setFormOne(true);
    setFormTwo(false);
  };
  const toggleFormTwo = () => {
    setFormTwo(true);
    setFormOne(false);
  };
  return (
    <>
      <div className="flex justify-center mx-auto md:w-full w-11/12 mt-10">
        <div className="md:mt-0 mt-10">
          <h2 className="text-gray-600">Sign up for free!</h2>
          <h1 className="text-3xl font-bold text-gray-800">Get started</h1>
          <div className="flex gap-12 mt-5 md:w-1/2">
            <div onClick={toggleFormOne} className="relative">
              <span className="flex justify-end">
                {formOne && (
                  <FaCheck className="z-10 bg-primary rounded-full text-white p-1 text-2xl  -mr-3 absolute -mt-3" />
                )}
              </span>
              <span
                className={`cursor-pointer ${
                  formOne
                    ? "btn-primary flex gap-4"
                    : "btn-secondary flex gap-4"
                }`}
              >
                <span>
                  <FaUser />
                </span>
                <p>Regular user</p>
              </span>
            </div>
            <div onClick={toggleFormTwo} className="relative">
              <span className="flex justify-end">
                {formTwo && (
                  <FaCheck className="z-10 bg-primary rounded-full text-white p-1 text-2xl  -mr-3 absolute -mt-3" />
                )}
              </span>
              <span
                className={`cursor-pointer ${
                  formTwo
                    ? "btn-primary flex gap-4"
                    : "btn-secondary flex gap-4"
                }`}
              >
                <span>
                  <FaUser />
                </span>
                <p>Service provider</p>
              </span>
            </div>
          </div>
          <div className="mt-10">
            {formOne && <Register />}

            {formTwo && <ServiceProvider />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
