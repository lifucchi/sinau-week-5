import React from "react";
import Swal from "sweetalert2";

const NavbarButtons = () => {
  const handleLoginAlert = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Login",
      html: `
        <input id="swal-input-email" class="swal2-input" placeholder="Email" type="email">
        <input id="swal-input-password" class="swal2-input" placeholder="Password" type="password">
          `,

      focusConfirm: false,
      confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Login!
    `,
      preConfirm: () => {
        const email = document.getElementById("swal-input-email").value;
        const password = document.getElementById("swal-input-password").value;

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailRegex.test(email)) {
          Swal.showValidationMessage("Please enter a valid email address");
          return false;
        }

        if (!password) {
          Swal.showValidationMessage("Password is required");
          return false;
        }

        return { email, password };
      },
    });

    if (formValues) {
      Swal.fire({
        title: "Login",
        icon: "success",
      });
    }
  };

  const handleRegisterAlert = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Register",
      html: `
        <input   id="swal-input-telephone" class="swal2-input" type="tel" pattern="\d{3} \d{3} \d{4}" placeholder="Phone number" title="Phone number in the format: 123 456 7890" required>
        <input id="swal-input-email" class="swal2-input" placeholder="Email" type="email">
        <input id="swal-input-password" class="swal2-input" placeholder="Password" type="password">
          `,

      focusConfirm: false,
      confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Register!
    `,
      preConfirm: () => {
        const email = document.getElementById("swal-input-email").value;
        const password = document.getElementById("swal-input-password").value;

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailRegex.test(email)) {
          Swal.showValidationMessage("Please enter a valid email address");
          return false;
        }

        if (!password) {
          Swal.showValidationMessage("Password is required");
          return false;
        }

        return { email, password };
      },
    });

    if (formValues) {
      Swal.fire({
        title: "Join",
        icon: "success",
      });
    }
  };

  return (
    <div className="md:flex space-x-4 md:flex ">
      <button
        className="px-6 py-3 mt-4 rounded-lg border border-transparent text-white bg-gray
             transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800 
             focus:outline-none focus:ring-2 focus:ring-gray-300"
        onClick={handleLoginAlert}
      >
        Login
      </button>
      <button
        className="px-4 py-2 rounded bg-gradient-to-r from-teal-400 to-blue-500 mt-4 px-6 py-2 text-white rounded-lg 
             transition-transform transform hover:scale-105 hover:from-teal-500 hover:to-blue-600 "
        onClick={handleRegisterAlert}
      >
        Signup
      </button>
    </div>
  );
};

export default NavbarButtons;
