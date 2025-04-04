// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";


// const Sample = () => {
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//     username: "",
//   });
//   const { email, password, username } = inputValue;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });
  
//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-right",
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3002/signup",
//         {
//           ...inputValue,
//         },
//         { withCredentials: true }
//       );
      
//       const { success, message } = data;
//       if (success) {
//         handleSuccess(message);
//         setTimeout(() => {
//           window.location.href = "http://localhost:3001/dashboard";
//         }, 1000);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       handleError(error.response?.data?.message || "Something went wrong");
//     }
//     setInputValue({
//       email: "",
//       password: "",
//       username: "",
//     });
//   };

//   return (
//     <div className="form_container">
//       <h2>Signup Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             placeholder="Enter your username"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//         <span>
//           Already have an account? <Link to="/login">Login</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Sample;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Sample = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => {
    console.error("Error:", err); // Log error
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (msg) => {
    console.log("Success:", msg); // Log success
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting signup form with data:", inputValue); // Log form data
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true }
      );
  
      console.log("Response from server:", data); // Log server response
  
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001/dashboard";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Error during signup request:", error); // Log error
      handleError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            className="form-control"
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            className="form-control"
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit"className="mt-4 text-center btn btn-primary" style={{marginLeft:"8rem"}}>Submit</button>
        <p className="text-center mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Sample;
