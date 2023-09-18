// import { useState } from 'react';
// import { Alert, FormRow, Logo } from '../components';
// import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
// // import { Link } from 'react-router-dom';
// import { useAppContext } from '../context/appContext';

// const initialState = {
//   name: '',
//   email: '',
//   password: '',
//   isMember: true,
// };

// const Register = () => {
//   const [values, setValues] = useState(initialState);

//   // global state and useNavigate
//   const { showAlert, displayAlert } = useAppContext();

//   const toggleMember = () => {
//     setValues({ ...values, isMember: !values.isMember });
//   };

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, password, isMember } = values;
//     if (!email || !password || (!isMember && !name)) {
//       displayAlert();
//       return;
//     }
//     console.log(values);
//   };

//   return (
//     <Wrapper className="full-page">
//       <form className="form" onSubmit={onSubmit}>
//         <Logo />
//         <h3>{values.isMember ? 'Login' : 'Register'}</h3>

//         {/* Alert */}
//         {showAlert && <Alert />}

//         {/* name input */}
//         {!values.isMember && (
//           <FormRow
//             type="text"
//             value={values.name}
//             name="name"
//             handleChange={handleChange}
//           />
//         )}

//         <FormRow
//           type="email"
//           value={values.email}
//           name="email"
//           handleChange={handleChange}
//         />

//         <FormRow
//           type="password"
//           value={values.password}
//           name="password"
//           handleChange={handleChange}
//         />

//         <button type="submit" className="btn btn-block">
//           submit
//         </button>

//         <p>
//           {values.isMember ? 'Not a member yet?' : 'Already a member?'}
//           <button type="button" onClick={toggleMember} className="member-btn">
//             {values.isMember ? 'Register' : 'Login'}
//           </button>
//         </p>
//       </form>
//     </Wrapper>
//   );
// };
// export default Register;

const OldRegister = () => {
  return <div>OldRegister</div>;
};
export default OldRegister;
