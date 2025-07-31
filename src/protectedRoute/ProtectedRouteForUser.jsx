// // /* eslint-disable react/prop-types */
// // import { Navigate } from "react-router"

// // export const ProtectedRouteForUser = ({children}) => {
// //     const user = JSON.parse(localStorage.getItem('users'))
// //     if (user?.role === "user") {
// //       return children
// //     }
// //     else {
// //       return <Navigate to={'/login'}/>
// //     }
// // }

// // ProtectedRouteForUser.js
// import { Navigate, useLocation } from "react-router-dom";

// export const ProtectedRouteForUser = ({ children }) => {
//   const user = JSON.parse(localStorage.getItem("users"));
//   const location = useLocation();

//   if (user?.role === "user") {
//     return children;
//   } else {
//     return <Navigate to="/login" state={{ from: location.pathname }} replace />;
//   }
// };

import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRouteForUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));
  const location = useLocation();

  if (user?.role === "user") {
    return children;
  } else {
    // Jaha se user aaya tha uska path save karo
    localStorage.setItem("lastPath", location.pathname);
    return <Navigate to="/login" replace />;
  }
};

