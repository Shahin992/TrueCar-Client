import { Link, NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Good job!", "Log Out Successfully!", "success");
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: ErrorMessage,
        });
      });
  };



  return (
    <div className="bg-black">
      <div className="navbar max-w-7xl p-5 text-white  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-accent-focus text-lg font-bold underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-accent-focus text-lg font-bold underline"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-accent-focus text-lg font-bold underline"
                    : ""
                }
              >
                My Cart
              </NavLink>
            </li>
            <li>
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-accent-focus text-lg font-bold underline"
                : ""
            }
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-accent-focus text-lg font-bold underline"
                : ""
            }
          >
            Login
          </NavLink>
        </li>
            </ul>
          </div>
          <img
            className="w-32 h-10"
            src="https://consumer.tcimg.net/assets/_next/static/images/tc-logo-white-500-4f595f7ed8d0cc657d151b089a9bd452.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-accent-focus text-lg font-bold underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-accent-focus text-lg font-bold underline"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-accent-focus text-lg font-bold underline"
                    : ""
                }
              >
                My Cart
              </NavLink>
            </li>


            {
          user ? <></> :  <li>
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-accent-focus text-lg font-bold underline"
                : ""
            }
          >
            Register
          </NavLink>
        </li>
         }


{
            user ? <></> :<li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-accent-focus text-lg font-bold underline"
                  : ""
              }
            >
              Log in
            </NavLink>
            
          </li>
          }


          </ul>
        </div>
        <div className="navbar-end">
        {user ? (
          <div className="flex gap-4 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={user.photoURL} alt="" />
            </div>
            <div>
              <h3 className="text-xl font-medium">{user.displayName}</h3>
            </div>
            </div>
            <div>
              <button className="btn btn-accent text-white font-medium" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <Link className="btn btn-accent text-white font-medium" to="/login">
            log in
          </Link>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
