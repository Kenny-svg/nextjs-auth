"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [eyeOpen, setEyeOpen] = useState(false);
  const [eyeOpenTwo, setEyeOpenTwo] = useState(false);
  const [match, setMatch] = useState("");

  const toggleShowPassword = () => {
    setEyeOpen(!eyeOpen);
  };
  const toggleShowPasswordTwo = () => {
    setEyeOpenTwo(!eyeOpenTwo);
  };
  const password = watch("password");
  const comfirmPassword = watch("comfirmPassword");
  const onSubmit = () => {
    if (password !== comfirmPassword) {
      setMatch("Password does not match");
    } else {
      setMatch("Password match");
    }
  };
  return (
    <>
      <div className="md:w-1/3 mt-10 w-11/12 mx-auto mb-10">
        <div class="">
          <h1 class="font-bold text-primary text-2xl mb-2">Reset password</h1>
          <h1 class="font-bold  mb-5 text-sm text-secondary">
            Set your new password
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div>
              <label className="font-bold text-primary mt-5">
                Enter a new password
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: true,
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    },
                  })}
                  type={eyeOpen ? "text" : "password"}
                  aria-invalid={errors.password ? "true" : "false"}
                  className="font-bold text-primary text-xl w-full mt-3 mb-2 rounded-md bg-gray-50 border-2 border-gray-200 focus:ring-primary focus:border-primary"
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
              <br />

              <label className="font-bold text-primary mt-5">
                Re-enter new password
              </label>
              <div className="relative">
                <input
                  {...register("comfirmPassword", {
                    required: true,
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    },
                  })}
                  type={eyeOpenTwo ? "text" : "password"}
                  aria-invalid={errors.comfirmPassword ? "true" : "false"}
                  className="font-bold text-primary text-xl w-full mt-3 mb-5 rounded-md bg-gray-50 border-2 border-gray-200 focus:ring-primary focus:border-primary"
                />
                <span
                  className="absolute -ml-10 mt-7 cursor-pointer text-primary"
                  onClick={toggleShowPasswordTwo}
                >
                  {eyeOpenTwo ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors.comfirmPassword && (
                <span className="text-red-500">This field is required</span>
              )}
              <p className={`${match ? "text-primary" : "text-red-500"}`}>
                {match}
              </p>

              <br />

              <button
                type="submit"
                class="btn-primary bg-primary text-white w-full mb-2"
              >
                Reset Password
              </button>
              <span className="flex justify-center gap-4">
                <div>
                  Or
                  <Link
                    className="text-primary text-sm mx-2 font-bold"
                    href="/register"
                  >
                    Create a new account
                  </Link>
                </div>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
