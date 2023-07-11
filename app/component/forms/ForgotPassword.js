"use client";
import { Checkbox } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaInbox, FaSms } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const ForgotPassword = () => {
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
      <div className="md:w-1/3 mt-10 w-11/12 mx-auto">
        <div class="">
          <h1 class="font-bold text-primary text-2xl mb-3">Forgot password</h1>
          <h1 class="text-sm text-secondary mb-5">
            Enter your email and we will send you a mail on how to reset your
            password.
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div>
              <div className="relative">
                <label className="font-bold text-primary mt-5 mb-3">
                  Email
                </label>
                <br />
                <input
                  {...register("email", {
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    },
                    required: "Email is required",
                  })}
                  type="text"
                  aria-invalid={errors.email ? "true" : "false"}
                  className="w-full mt-3 mb-3 rounded-md bg-gray-50 border-2 border-gray-200 focus:ring-primary focus:border-primary"
                />
                <span className="absolute -ml-10 mt-7 text-primary">
                  <FaInbox />
                </span>
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <span className="flex gap-4">
                <Checkbox
                  {...register("checkbox", {
                    required: true,
                  })}
                  className="text-primary focus:ring-3 focus:ring-primary"
                />
                <p className="text-sm">
                  I agree to Dutiful's{" "}
                  <span className="text-primary">terms and conditions</span>
                </p>
              </span>
              {errors.checkbox && (
                <span className="text-red-500">This field is required</span>
              )}

              <br />
              <button
                type="submit"
                class="btn-primary bg-primary text-white w-full mb-2"
              >
                Send email
              </button>
              <div className="flex justify-center gap-4">
                <p className="font-bold text-sm text-primary">
                  <span className="text-black mx-2">Or</span>
                  <Link href="/login">Login</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
