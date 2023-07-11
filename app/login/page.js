import Login from "../component/forms/Login";

const LoginPage = () => {
  return (
    <>
      <div className="md:w-1/3 mt-10 w-11/12 mx-auto">
        <div class="">
          <h1 class="text-sm text-secondary">Jump right back in!</h1>
          <h1 class="font-bold text-primary text-2xl mb-10">Login</h1>
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
