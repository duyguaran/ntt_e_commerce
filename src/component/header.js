import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiSearch } from "react-icons/fi";

const header = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="flex items-center justify-between gap-4 md:gap-10 mt-4">
        <div className="">
          <img src="image/logo.png" className="w-32 md:w-48" alt="logo" />
        </div>
        <div className="relative flex-1">
          <div className="flex">
            <input
              className="form-control border-indigo-600 flex-1 mr-2"
              type="text"
              placeholder="Search..."
              aria-label="Text input with dropdown button"
            />
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-4">
          <button
            type="button"
            class="btn btn-primary h-full py-1 px-5"
            aria-label="Search"
          >
            <FiSearch className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default header;
