"use client";
import { Checkbox } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [phone, setPhone] = useState("");
  const [eyeOpen, setEyeOpen] = useState(false);

  const toggleShowPassword = () => {
    setEyeOpen(!eyeOpen);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-10">
        <div>
          <div>
            <label className="font-bold text-primary mt-2">Email</label>
            <br />
            <input
              {...register("email", { required: true, maxLength: 8 })}
              type="text"
              aria-invalid={errors.email ? "true" : "false"}
              className="w-full mt-3 mb-3 rounded-md bg-gray-50 border-2 border-gray-200 focus:ring-primary focus:border-primary"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <label className="font-bold text-primary mt-5">Password</label>
          <div className="relative">
            <input
              {...register("password", { required: true, maxLength: 8 })}
              type={eyeOpen ? "text" : "password"}
              aria-invalid={errors.password ? "true" : "false"}
              className="font-bold text-primary text-xl w-full mt-3 mb-5 rounded-md bg-gray-50 border-2 border-gray-200 focus:ring-primary focus:border-primary"
            />
            <span
              className="absolute -ml-10 mt-7 cursor-pointer text-primary"
              onClick={toggleShowPassword}
            >
              {eyeOpen ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
          <span className="flex gap-4">
            <Checkbox className="text-primary focus:ring-3 focus:ring-primary" />
            <p className="text-sm">
              I agree to Dutifuls{" "}
              <span className="text-primary">terms and conditions</span>
            </p>
          </span>
          <br />

          <button
            type="submit"
            class="btn-primary bg-primary text-white w-full mb-2"
          >
            Login
          </button>
          <span className="flex gap-2 justify-center">
            Dont have an account?
            <p className="text-primary">
              <Link href="/signup">Sign up</Link>
            </p>
          </span>
        </div>
      </form>
    </>
  );
};

export default Login;
