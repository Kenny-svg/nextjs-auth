import { HiEnvelope } from "react-icons/hi2";

const OtpSent = () => {
  return (
    <>
      <div class="text-center mt-10 text-sm text-secondary">
        <div class="flex justify-center items-center">
          <div>
            <HiEnvelope className=" text-primary text-6xl rounded-full  p-3 bg-gray-100 mx-auto" />
          </div>
        </div>
        <h1 class="mt-10">An OTP has been sent to email</h1>
        <h1>Check your email to get the code</h1>

        <button class="btn-primary mt-5 mb-10 px-8 bg-primary text-white">
          Next
        </button>
      </div>
    </>
  );
};

export default OtpSent;
