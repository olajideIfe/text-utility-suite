import { useState } from "react";
import logo from "../assets/text-utility-suite-logo.jpeg";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Navbar = ({ page, setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* //   Desktop Navbar */}
      <nav className="hidden md:block bg-purple-700 w-72 min-h-screen border-b border-slate-200">
        <div className=" px-6 py-4 flex items-center gap-3">
          <img
            src={logo}
            alt="text-utility-logo"
            className="w-10 h-10 rounded-lg"
          />
          <h1 className="text-white font-bold text-2xl">Text Utility Suite</h1>
        </div>

        <div>
          <div
            className={`flex items-center px-4 py-3 gap-3 transition ${
              page === "home" ? "bg-purple-500" : "hover:bg-purple-500"
            }`}
          >
            <span>
              <FaHome size={30} color="white" />
            </span>
            <button onClick={() => setPage("home")} className="text-white ">
              Home
            </button>
          </div>

          <div
            className={`flex items-center px-4 py-3 gap-3 transition ${
              page === "password" ? "bg-purple-500" : "hover:bg-purple-500"
            }`}
          >
            <span>
              <FaLock size={30} color="white" />
            </span>
            <button onClick={() => setPage("password")} className="text-white ">
              Password Checker
            </button>
          </div>

          <div
            className={`flex items-center px-4 py-3 gap-3 transition ${
              page === "transformer" ? "bg-purple-500" : "hover:bg-purple-500"
            }`}
          >
            <span>
              <FaExchangeAlt size={30} color="white" />
            </span>
            <button
              onClick={() => setPage("transformer")}
              className="text-white "
            >
              Text Transformer
            </button>
          </div>

          <div
            className={`flex items-center px-4 py-3 gap-3 transition ${
              page === "analyzer" ? "bg-purple-500" : "hover:bg-purple-500"
            }`}
          >
            <span>
              <FaChartBar size={30} color="white" />
            </span>
            <button onClick={() => setPage("analyzer")} className="text-white ">
              Text Analyzer
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden bg-purple-700 px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Text Utility Suite logo"
              className="w-10 h-10 rounded-lg"
            />

            <h1 className="text-white font-bold text-xl">Text Utility Suite</h1>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <IoIosClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 space-y-2">
            <button
              onClick={() => {
                setPage("home");
                setMenuOpen(false);
              }}
              className="w-full text-left text-white px-4 py-3 rounded-lg hover:bg-purple-500 transition"
            >
              Home
            </button>

            <button
              onClick={() => {
                setPage("password");
                setMenuOpen(false);
              }}
              className="w-full text-left text-white px-4 py-3 rounded-lg hover:bg-purple-500 transition"
            >
              Password Checker
            </button>

            <button
              onClick={() => {
                setPage("transformer");
                setMenuOpen(false);
              }}
              className="w-full text-left text-white px-4 py-3 rounded-lg hover:bg-purple-500 transition"
            >
              Text Transformer
            </button>

            <button
              onClick={() => {
                setPage("analyzer");
                setMenuOpen(false);
              }}
              className="w-full text-left text-white px-4 py-3 rounded-lg hover:bg-purple-500 transition"
            >
              Text Analyzer
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
