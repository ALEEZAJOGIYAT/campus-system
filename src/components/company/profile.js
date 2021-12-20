// import React from "react";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// //import img from "../../images/Screenshot (4).png";
// import { company } from "../../redux/action/actions";

// const CompanyProfile = () => {
//   const auth = useSelector((state) => state.login);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     console.log("AUTH", auth.data.user);
//   }, [auth]);

//   return (
//     <div>
//       {auth?.data?.map((user, index) => {
//         const { email, password } = user;
//         return (
//           <div>
//             <ul key={index}>
//               <li>{email}</li>
//               <li>{password}</li>
//             </ul>
//             <button
//               type="submit"
//               onClick={() => dispatch(company(user.id))}
//             ></button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default CompanyProfile;
