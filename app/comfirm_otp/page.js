"use client";
import { useRef, useState } from "react";

const ComfrimOtp = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    const nextInputIndex = index + 1;
    const prevInputIndex = index - 1;

    if (nextInputIndex < inputRefs.current.length && value.length === 1) {
      inputRefs.current[nextInputIndex].focus();
    } else if (prevInputIndex >= 0 && value === "") {
      inputRefs.current[prevInputIndex].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    const { key } = e;
    const prevInputIndex = index - 1;

    if (key === "Backspace" && index > 0 && formData[`input${index}`] === "") {
      inputRefs.current[prevInputIndex].focus();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10 mb-10">
        <div>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <input
              key={index}
              type="text"
              name={`input${index}`}
              value={formData[`input${index}`]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="mx-2 w-10 rounded-md h-8 focus:ring-primary focus:border-primary font-bold text-primary border-2"
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
            />
          ))}
          <div class="text-center mt-10 text-sm text-secondary">
            <h1>Enter OTP code that was sent to email</h1>
            <h1>Check your email to get the code</h1>
            <button
              type="button"
              class="btn-primary mt-5 w-2/3 bg-primary text-white"
            >
              Comfirm OTP
            </button>
            <p class="text-sm mb-10 mt-5">
              Didn't get a code?
              <span class="text-primary cursor-pointer">resend</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComfrimOtp;
