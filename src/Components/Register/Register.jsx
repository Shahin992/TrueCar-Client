import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const googleBtn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);

        fetch("https://server-site-taupe.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result.user),
        });

        Swal.fire("Good job!", "Account Created Successfully!", "success");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please check your email and password",
        });
      });
  };

  const githubBtn = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        fetch("https://server-site-taupe.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result.user),
        });
        Swal.fire("Good job!", "Account Created Successfully!", "success");

        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please check your email and password",
        });
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    const userInfo = { username, name, photo, email, password };

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Your Password should contain  at least 6 characters.",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Your Password should contain  at least 1 Uppercase characters.",
      });
      return;
    } else if (!/([@$!%*#?&])/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Your Password should contain  at least 1 Special characters.",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        fetch("https://server-site-taupe.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });

        Swal.fire("Good job!", "Account Created Successfully!", "success");

        updateProfile(result.user, {
          displayName: username,
          photoURL: photo,
        });

        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        const ErrorMessage = error.message;
        console.log(ErrorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: ErrorMessage,
        });
      });
  };

  return (
    <div
      className="hero min-h-screen  bg-cover p-7 py-20 md:p-20 opacity-90"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/VJnVgmN/maxim-hopman-Q-l5-Nz-A8o4-Y-unsplash.jpg)",
      }}
    >
      <div className=" flex justify-center w-full md:w-2/3 rounded-3xl   py-10 items-center bg-white">
        <form onSubmit={handleRegister} className="bg-white w-2/3">
          <h1 className=" text-gray-800 font-bold text-2xl mb-5 text-center">
            Sign Up On TrueCar
          </h1>

          <div className="flex items-center border-2 py-2 md:px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="name"
              required
              id=""
              placeholder="Full name"
            />
          </div>
          <div className="flex items-center border-2 py-2 md:px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="photo"
              required
              id=""
              placeholder="Photo URL"
            />
          </div>
          <div className="flex items-center border-2 py-2 md:px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="username"
              required
              id=""
              placeholder="Username"
            />
          </div>
          <div className="flex items-center border-2 py-2 md:px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              required
              id=""
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 md:px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              required
              id=""
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Sign Up
          </button>

          <p className="mt-5 text-center ">
            Already have an account?{" "}
            <Link
              className="text-2xl font-semibold hover:underline hover:text-accent"
              to={"/login"}
            >
              Log in
            </Link>{" "}
          </p>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>
          <div>
            <button
              onClick={googleBtn}
              className="flex justify-center items-center  w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 "
            >
              <FcGoogle className="mr-5 text-2xl"></FcGoogle>
              Sign Up with google
            </button>
            <button
              onClick={githubBtn}
              className="flex justify-center items-center  w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 "
            >
              <FaGithub className="mr-5 text-2xl"></FaGithub>
              Sign Up with github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
