import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Appbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    localStorage.removeItem("token");
    navigate("/signin");
  }

  return (
    <div className="flex items-center justify-between bg-gray-300 fixed w-full z-10 p-3 lg:px-6">
      <div className="flex items-center">
        <div
          className="p-2 mx-2 text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/blogs")}
        >
          Medium
        </div>
        <div className="hidden sm:flex rounded-full bg-slate-100 px-2 py-1 items-center h-10 w-40 lg:mx-20">
          <input
            type="text"
            placeholder="Search"
            className="px-2 bg-transparent border-none text-sm outline-none w-full"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden sm:flex items-center space-x-4">
        <Example />
        <button
          onClick={() => navigate("/create")}
          className="flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Write
        </button>
        <button onClick={handleClick}>Logout</button>
      </div>

      <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-300 flex flex-col items-center p-4 space-y-3 sm:hidden">
          <button onClick={() => navigate("/create")}>Write</button>
          <button onClick={handleClick}>Logout</button>
          <Example />
        </div>
      )}
    </div>
  );
}

function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50">
          Blogs
          <ChevronDownIcon aria-hidden="true" className="-mr-1 w-5 h-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <div className="py-1">
          <MenuItem>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Entertainment
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Business
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Sports
            </a>
          </MenuItem>
          <MenuItem>
            <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
              Technology
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
