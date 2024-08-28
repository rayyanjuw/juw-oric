// import React, { useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Modal from "react-modal";
// import axios from "axios";
// import "./usermanagement.css";

// const UserManagement = () => {
//   const [error, setError] = useState("")
//   const [data, setData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     role: "",
//     department: "",
//   });

//   const url = "http://localhost:5000/api/user/create"

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const name = data.get("name");
//     const username = data.get("username");
//     const email = data.get("email");
//     const password = data.get("password");
//     const role = data.get("role");
//     const department = data.get("department");

//     try {
//       const response = await axios.post(url, {name, username, email, password, role, department})
//       const token = response.data.token;

//       localStorage.setItem("authToken", token)
//     } catch (error) {
//       if(error.response && error.response.status === 401){
//         setError("Invalid Credentials")
//       }
//       else {
//         setError("Server Error, Please try again later")
//       }
//     }

//     // console.log("Form Submitted", data)
//     closeModal();
//   };

//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     resetForm();
//     setModalIsOpen(false);
//   };

//   const resetForm = () => {
//     setData({
//       name: "",
//       email: "",
//       username: "",
//       password: "",
//       role: "",
//       department: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   console.log(data);

//   const users = [
//     {
//       name: "Administrator",
//       username: "admin",
//       email: "oricadmin@juw.edu.pk",
//       role: "Admin",
//       faculty: "Faculty of Science",
//       department: "IT",
//     },
//     {
//       name: "Manager ORIC",
//       username: "manager",
//       email: "oricmanager@juw.edu.pk",
//       role: "Manager",
//       faculty: "Faculty of Pharmacy",
//       department: "ORIC",
//     },
//     {
//       name: "Researcher ORIC",
//       username: "researcher",
//       email: "oricresearcher@juw.edu.pk",
//       role: "Researcher",
//       faculty: "Faculty of Social Sciences",
//       department: "ORIC",
//     },
//     {
//       name: "Muhammad Yasir",
//       username: "yasir",
//       email: "yasir@juw.edu.pk",
//       role: "Researcher",
//       faculty: "Faculty of Business Administration",
//       department: "IT",
//     },
//     {
//       name: "Syed Abu Fahar",
//       username: "fahar",
//       email: "fahar@juw.edu.pk",
//       role: "Admin",
//       faculty: "Faculty of Allied Medical Sciences",
//       department: "IT",
//     },
//     {
//       name: "Syed Abu Fahar",
//       username: "safahar",
//       email: "sa.fahar@outlook.com",
//       role: "Manager",
//       faculty: "Faculty of Science",
//       department: "IT",
//     },
//   ];

//   return (
//     <>
//       <div className="whole-page-container">
//         <Sidebar />
//         <div className="user-management">
//           <div className="user-management-card">
//             <h4>Users and Roles</h4>
//             <button
//               type="button"
//               className="create-user-btn"
//               onClick={openModal}
//             >
//               ADD NEW USER
//             </button>
//             <Modal
//               isOpen={modalIsOpen}
//               onRequestClose={closeModal}
//               contentLabel="Create User Modal"
//               className="Modal"
//               overlayClassName="Overlay"
//             >
//               <h2>Create User</h2>
//               <form className="create-user" onSubmit={handleSubmit}>
//                 <div className="create-user-left">
//                   <p className="title">User Information</p>
//                   <div className="multi-fields">
//                     <input
//                       required
//                       name="name"
//                       onChange={handleInputChange}
//                       value={data.name}
//                       type="text"
//                       placeholder="Name"
//                     />
//                     <input
//                       required
//                       name="username"
//                       onChange={handleInputChange}
//                       value={data.username}
//                       type="text"
//                       placeholder="username"
//                     />
//                     <input
//                       required
//                       name="role"
//                       onChange={handleInputChange}
//                       value={data.role}
//                       type="text"
//                       placeholder="Role"
//                     />
//                     <input
//                       required
//                       name="department"
//                       onChange={handleInputChange}
//                       value={data.department}
//                       type="text"
//                       placeholder="Department"
//                     />
//                     <input
//                       required
//                       name="email"
//                       onChange={handleInputChange}
//                       value={data.email}
//                       type="email"
//                       placeholder="Email Address"
//                     />
//                     <input
//                       required
//                       name="password"
//                       onChange={handleInputChange}
//                       value={data.password}
//                       type="password"
//                       placeholder="Password"
//                     />
//                   </div>
//                 </div>
//                 <button className="submit-button" type="submit">
//                   Submit
//                 </button>
//               </form>
//             </Modal>
//             <button>SEARCH</button>
//             <h5>Current Users</h5>
//             <div className="usermanagement-table-container">
//               <div className="list add flex-col">
//                 <div className="list-table">
//                   <div className="list-table-format title">
//                     <b>Name</b>
//                     <b>Username</b>
//                     <b>User Role</b>
//                     <b>Department</b>
//                     <b>Email</b>
//                     <b>Actions</b>
//                   </div>
//                   {users.map((user, index) => {
//                     return (
//                       <div key={index} className="list-table-format">
//                         <p>{user.name}</p>
//                         <p>{user.username}</p>
//                         <p>{user.role}</p>
//                         <p>{user.department}</p>
//                         <p>{user.email}</p>
//                         <button>Edit</button>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserManagement;

// api integrated 1

// import React, { useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Modal from "react-modal";
// import axios from 'axios';  // Import Axios
// import "./usermanagement.css";

// const UserManagement = () => {
//   const [data, setData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     role: "",
//     department: "",
//   });

//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     resetForm();
//     setModalIsOpen(false);
//   };

//   const resetForm = () => {
//     setData({
//       name: "",
//       email: "",
//       username: "",
//       password: "",
//       role: "",
//       department: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const url = "http://localhost:5000/api/user/create"

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     // const response = await axios.post('/api/users/create', data, {
//   //     const response = await axios.post(url, data, {
//   //       headers: {
//   //         Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token if needed
//   //       },
//   //     });

//   //     if (response.status === 201) {
//   //       alert(`${data.role} user created successfully`);
//   //       // Optionally, refresh the list of users here
//   //       resetForm();
//   //       closeModal();
//   //     }
//   //   } catch (error) {
//   //     console.error('Error creating user:', error.response?.data?.message || error.message);
//   //     alert(error.response?.data?.message || 'Server error');
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found. Please log in again.');
//       }

//       // const response = await axios.post('/api/users/create', data, {
//       const response = await axios.post(url, data, {
//         headers: {
//           // Authorization: `Bearer ${token}`,
//           token: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 201) {
//         alert(`${data.role} user created successfully`);
//         resetForm();
//         closeModal();
//       }
//     } catch (error) {
//       console.error('Error creating user:', error.response?.data?.message || error.message);
//       alert(error.response?.data?.message || 'Server error');
//     }
//   };

//   const users = [
//     // ... (Your existing users array)
//   ];

//   return (
//     <>
//       <div className="whole-page-container">
//         <Sidebar />
//         <div className="user-management">
//           <div className="user-management-card">
//             <h4>Users and Roles</h4>
//             <button
//               type="button"
//               className="create-user-btn"
//               onClick={openModal}
//             >
//               ADD NEW USER
//             </button>
//             <Modal
//               isOpen={modalIsOpen}
//               onRequestClose={closeModal}
//               contentLabel="Create User Modal"
//               className="Modal"
//               overlayClassName="Overlay"
//             >
//               <h2>Create User</h2>
//               <form className="create-user" onSubmit={handleSubmit}>
//                 <div className="create-user-left">
//                   <p className="title">User Information</p>
//                   <div className="multi-fields">
//                     <input
//                       required
//                       name="name"
//                       onChange={handleInputChange}
//                       value={data.name}
//                       type="text"
//                       placeholder="Name"
//                     />
//                     <input
//                       required
//                       name="username"
//                       onChange={handleInputChange}
//                       value={data.username}
//                       type="text"
//                       placeholder="username"
//                     />
//                     <input
//                       required
//                       name="role"
//                       onChange={handleInputChange}
//                       value={data.role}
//                       type="text"
//                       placeholder="Role"
//                     />
//                     <input
//                       required
//                       name="department"
//                       onChange={handleInputChange}
//                       value={data.department}
//                       type="text"
//                       placeholder="Department"
//                     />
//                     <input
//                       required
//                       name="email"
//                       onChange={handleInputChange}
//                       value={data.email}
//                       type="email"
//                       placeholder="Email Address"
//                     />
//                     <input
//                       required
//                       name="password"
//                       onChange={handleInputChange}
//                       value={data.password}
//                       type="password"
//                       placeholder="Password"
//                     />
//                   </div>
//                 </div>
//                 <button className="submit-button" type="submit">
//                   Submit
//                 </button>
//               </form>
//             </Modal>
//             <button>SEARCH</button>
//             <h5>Current Users</h5>
//             <div className="usermanagement-table-container">
//               <div className="list add flex-col">
//                 <div className="list-table">
//                   <div className="list-table-format title">
//                     <b>Name</b>
//                     <b>Username</b>
//                     <b>User Role</b>
//                     <b>Department</b>
//                     <b>Email</b>
//                     <b>Actions</b>
//                   </div>
//                   {users.map((user, index) => {
//                     return (
//                       <div key={index} className="list-table-format">
//                         <p>{user.name}</p>
//                         <p>{user.username}</p>
//                         <p>{user.role}</p>
//                         <p>{user.department}</p>
//                         <p>{user.email}</p>
//                         <button>Edit</button>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserManagement;

// api integration2
// perfectly working
// import React, { useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Modal from "react-modal";
// import axios from "axios";
// import "./usermanagement.css";

// const UserManagement = () => {
//   const [error, setError] = useState("");
//   const [data, setData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     role: "",
//     department: "",
//   });

//   const url = "http://localhost:5000/api/user/create";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(url, data, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('authToken')}`,
//         }
//       });
//       // Optionally handle response data
//       console.log(response.data);
//       // Optionally reset form data
//       resetForm();
//       closeModal();
//     } catch (error) {
//       if (error.response) {
//         switch (error.response.status) {
//           case 400:
//             setError("User already exists");
//             break;
//           case 403:
//             setError("You do not have permission to create this role");
//             break;
//           default:
//             setError("Server Error, Please try again later");
//             break;
//         }
//       } else {
//         setError("Server Error, Please try again later");
//       }
//     }
//   };

//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     resetForm();
//     setModalIsOpen(false);
//   };

//   const resetForm = () => {
//     setData({
//       name: "",
//       email: "",
//       username: "",
//       password: "",
//       role: "",
//       department: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const users = [
//     // Your static users or fetched data
//   ];

//   return (
//     <>
//       <div className="whole-page-container">
//         <Sidebar />
//         <div className="user-management">
//           <div className="user-management-card">
//             <h4>Users and Roles</h4>
//             <button
//               type="button"
//               className="create-user-btn"
//               onClick={openModal}
//             >
//               ADD NEW USER
//             </button>
//             <Modal
//               isOpen={modalIsOpen}
//               onRequestClose={closeModal}
//               contentLabel="Create User Modal"
//               className="Modal"
//               overlayClassName="Overlay"
//             >
//               <h2>Create User</h2>
//               <form className="create-user" onSubmit={handleSubmit}>
//                 <div className="create-user-left">
//                   <p className="title">User Information</p>
//                   <div className="multi-fields">
//                     <input
//                       required
//                       name="name"
//                       onChange={handleInputChange}
//                       value={data.name}
//                       type="text"
//                       placeholder="Name"
//                     />
//                     <input
//                       required
//                       name="username"
//                       onChange={handleInputChange}
//                       value={data.username}
//                       type="text"
//                       placeholder="Username"
//                     />
//                     <input
//                       required
//                       name="role"
//                       onChange={handleInputChange}
//                       value={data.role}
//                       type="text"
//                       placeholder="Role"
//                     />
//                     <input
//                       required
//                       name="department"
//                       onChange={handleInputChange}
//                       value={data.department}
//                       type="text"
//                       placeholder="Department"
//                     />
//                     <input
//                       required
//                       name="email"
//                       onChange={handleInputChange}
//                       value={data.email}
//                       type="email"
//                       placeholder="Email Address"
//                     />
//                     <input
//                       required
//                       name="password"
//                       onChange={handleInputChange}
//                       value={data.password}
//                       type="password"
//                       placeholder="Password"
//                     />
//                   </div>
//                 </div>
//                 <button className="submit-button" type="submit">
//                   Submit
//                 </button>
//                 {error && <p className="error">{error}</p>}
//               </form>
//             </Modal>
//             <button>SEARCH</button>
//             <h5>Current Users</h5>
//             <div className="usermanagement-table-container">
//               <div className="list add flex-col">
//                 <div className="list-table">
//                   <div className="list-table-format title">
//                     <b>Name</b>
//                     <b>Username</b>
//                     <b>User Role</b>
//                     <b>Department</b>
//                     <b>Email</b>
//                     <b>Actions</b>
//                   </div>
//                   {users.map((user, index) => (
//                     <div key={index} className="list-table-format">
//                       <p>{user.name}</p>
//                       <p>{user.username}</p>
//                       <p>{user.role}</p>
//                       <p>{user.department}</p>
//                       <p>{user.email}</p>
//                       <button>Edit</button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserManagement;

// api integrated

// import React, { useState, useEffect } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Modal from "react-modal";
// import axios from "axios";
// import "./usermanagement.css";
// import NavBar from "../shared-components/navbar/NavBar";

// const UserManagement = () => {
//   const [error, setError] = useState("");
//   const [data, setData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     role: "",
//     department: "",
//   });
//   const [users, setUsers] = useState([]); // State to store users
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [openEditModal, setOpenEditModal] = useState(false);

//   const url = "http://localhost:5000/api/user/create";
//   // const fetchUsersUrl = "http://localhost:5000/api/users"; // URL to fetch users
//   const fetchUsersUrl = "http://localhost:5000/api/user/allUsers"; // URL to fetch users

//   const EditURL = "http://localhost:5000/api/user/update/:id";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(url, data, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//         },
//       });
//       // Fetch the updated list of users
//       await fetchUsers();
//       // Reset form and close modal
//       resetForm();
//       closeModal();
//     } catch (error) {
//       if (error.response) {
//         switch (error.response.status) {
//           case 400:
//             setError("User already exists");
//             break;
//           case 403:
//             setError("You do not have permission to create this role");
//             break;
//           default:
//             setError("Server Error, Please try again later");
//             break;
//         }
//       } else {
//         setError("Server Error, Please try again later");
//       }
//     }
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(EditURL, data, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//         },
//       });
//     } catch (error) {}
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     resetForm();
//     setModalIsOpen(false);
//   };

//   const closeEditModal = () => {
//     resetEditForm();
//     setModalIsOpen(false);
//   };

//   const resetForm = () => {
//     setData({
//       name: "",
//       email: "",
//       username: "",
//       password: "",
//       role: "",
//       department: "",
//     });
//   };

//   const resetEditForm = () => {
//     setData({
//       name: "",
//       email: "",
//       username: "",
//       password: "",
//       role: "",
//       department: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(fetchUsersUrl, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//         },
//       });
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <>
//       <div className="whole-page-container">
//         <Sidebar />
//         <div className="user-management">
//           <div className="navbar-div">
//             <NavBar />
//           </div>
//           <div className="user-management-card">
//             <h4>Users and Roles</h4>
//             <button
//               type="button"
//               className="create-user-btn"
//               onClick={openModal}
//             >
//               ADD NEW USER
//             </button>
//             <Modal
//               isOpen={modalIsOpen}
//               onRequestClose={closeModal}
//               contentLabel="Create User Modal"
//               className="Modal"
//               overlayClassName="Overlay"
//             >
//               <h2>Create User</h2>
//               <form className="create-user" onSubmit={handleSubmit}>
//                 <div className="create-user-left">
//                   <p className="title">User Information</p>
//                   <div className="multi-fields">
//                     <input
//                       required
//                       name="name"
//                       onChange={handleInputChange}
//                       value={data.name}
//                       type="text"
//                       placeholder="Name"
//                     />
//                     <input
//                       required
//                       name="username"
//                       onChange={handleInputChange}
//                       value={data.username}
//                       type="text"
//                       placeholder="Username"
//                     />
//                     <input
//                       required
//                       name="role"
//                       onChange={handleInputChange}
//                       value={data.role}
//                       type="text"
//                       placeholder="Role"
//                     />
//                     <input
//                       required
//                       name="department"
//                       onChange={handleInputChange}
//                       value={data.department}
//                       type="text"
//                       placeholder="Department"
//                     />
//                     <input
//                       required
//                       name="email"
//                       onChange={handleInputChange}
//                       value={data.email}
//                       type="email"
//                       placeholder="Email Address"
//                     />
//                     <input
//                       required
//                       name="password"
//                       onChange={handleInputChange}
//                       value={data.password}
//                       type="password"
//                       placeholder="Password"
//                     />
//                   </div>
//                 </div>
//                 <button className="submit-button" type="submit">
//                   Submit
//                 </button>
//                 {error && <p className="error">{error}</p>}
//               </form>
//             </Modal>
//             <button>SEARCH</button>
//             <h5>Current Users</h5>
//             <div className="usermanagement-table-container">
//               <div className="list add flex-col">
//                 <div className="list-table">
//                   <div className="list-table-format title">
//                     <b>Name</b>
//                     <b>Username</b>
//                     <b>User Role</b>
//                     <b>Department</b>
//                     <b>Email</b>
//                     {/* <b style={{margin: "5px"}}>Actions</b> */}
//                     <b>Actions</b>
//                   </div>
//                   {users.map((user, index) => (
//                     <div key={index} className="list-table-format">
//                       <p>{user.name}</p>
//                       <p>{user.username}</p>
//                       <p>{user.role}</p>
//                       <p>{user.department}</p>
//                       <p>{user.email}</p>
//                       <div className="Edit-Modal">
//                         <button
//                           type="button"
//                           className="create-user-btn"
//                           onClick={openModal}
//                         >
//                           EDIT
//                         </button>
//                         {/* <Modal
//                           isOpen={modalIsOpen}
//                           onRequestClose={closeEditModal}
//                           contentLabel="Create User Modal"
//                           className="Modal"
//                           overlayClassName="Overlay"
//                         >
//                           <h2>Edit User</h2>
//                           <form className="create-user" onSubmit={handleSubmit}>
//                             <div className="create-user-left">
//                               <p className="title">User Information</p>
//                               <div className="multi-fields">
//                                 <input
//                                   required
//                                   name="name"
//                                   onChange={handleInputChange}
//                                   value={data.name}
//                                   type="text"
//                                   placeholder="Name"
//                                 />
//                                 <input
//                                   required
//                                   name="username"
//                                   onChange={handleInputChange}
//                                   value={data.username}
//                                   type="text"
//                                   placeholder="Username"
//                                 />
//                                 <input
//                                   required
//                                   name="role"
//                                   onChange={handleInputChange}
//                                   value={data.role}
//                                   type="text"
//                                   placeholder="Role"
//                                 />
//                                 <input
//                                   required
//                                   name="department"
//                                   onChange={handleInputChange}
//                                   value={data.department}
//                                   type="text"
//                                   placeholder="Department"
//                                 />
//                                 <input
//                                   required
//                                   name="email"
//                                   onChange={handleInputChange}
//                                   value={data.email}
//                                   type="email"
//                                   placeholder="Email Address"
//                                 />
//                                 <input
//                                   required
//                                   name="password"
//                                   onChange={handleInputChange}
//                                   value={data.password}
//                                   type="password"
//                                   placeholder="Password"
//                                 />
//                               </div>
//                             </div>
//                             <button className="submit-button" type="submit">
//                               UPDATE
//                             </button>
//                             {error && <p className="error">{error}</p>}
//                           </form>
//                         </Modal> */}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserManagement;



// edit api integrated
import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Modal from "react-modal";
import axios from "axios";
import "./usermanagement.css";
import NavBar from "../shared-components/navbar/NavBar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UserManagement = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
    department: "",
  });
  const [users, setUsers] = useState([]); // State to store users
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false); // To distinguish between Add and Edit modes
  const [selectedUserId, setSelectedUserId] = useState(null); // Store the ID of the user being edited
  const [showPassword, setShowPassword] = useState(false);

  const url = "http://localhost:5000/api/user/create";
  const fetchUsersUrl = "http://localhost:5000/api/user/allUsers";
  const editUrl = `http://localhost:5000/api/user/update/${selectedUserId}`;
  // const editUrl = `http://localhost:5000/api/user/update/:id`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(editUrl, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      } else {
        await axios.post(url, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }
      await fetchUsers(); // Fetch the updated list of users
      resetForm();
      closeModal();
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            setError("User already exists");
            break;
          case 403:
            setError("You do not have permission to create this role");
            break;
          default:
            setError("Server Error, Please try again later");
            break;
        }
      } else {
        setError("Server Error, Please try again later");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const openModal = () => {
    setModalIsOpen(true);
    setEditMode(false); 
  };

  const openEditModal = (user) => {
    setData({
      name: user.name,
      username: user.username,
      email: user.email,
      password: "",
      role: user.role,
      department: user.department,
    });
    setSelectedUserId(user._id);
    setModalIsOpen(true);
    setEditMode(true);
  };

  const closeModal = () => {
    resetForm();
    setModalIsOpen(false);
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      username: "",
      password: "",
      role: "",
      department: "",
    });
    setSelectedUserId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(fetchUsersUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="whole-page-container">
        <Sidebar />
        <div className="user-management">
          <div className="navbar-div">
            <NavBar />
          </div>
          <div className="user-management-card">
            <h4>Users and Roles</h4>
            <button
              type="button"
              className="create-user-btn"
              onClick={openModal}
            >
              ADD NEW USER
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel={editMode ? "Edit User Modal" : "Create User Modal"}
              className="Modal"
              overlayClassName="Overlay"
            >
              <h2>{editMode ? "Edit User" : "Create User"}</h2>
              <form className="create-user" onSubmit={handleSubmit}>
                <div className="create-user-left">
                  <p className="title">User Information</p>
                  <div className="multi-fields">
                    <input
                      required
                      name="name"
                      onChange={handleInputChange}
                      value={data.name}
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      required
                      name="username"
                      onChange={handleInputChange}
                      value={data.username}
                      type="text"
                      placeholder="Username"
                    />
                    <input
                      required
                      name="role"
                      onChange={handleInputChange}
                      value={data.role}
                      type="text"
                      placeholder="Role"
                    />
                    <input
                      required
                      name="department"
                      onChange={handleInputChange}
                      value={data.department}
                      type="text"
                      placeholder="Department"
                    />
                    <input
                      required
                      name="email"
                      onChange={handleInputChange}
                      value={data.email}
                      type="email"
                      placeholder="Email Address"
                    />
                    <div className="password-container">
                      <input
                        required
                        name="password"
                        onChange={handleInputChange}
                        value={data.password}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                      />
                      <span
                        className="eye-icon"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="submit-button" type="submit">
                  {editMode ? "UPDATE" : "Submit"}
                </button>
                {error && <p className="error">{error}</p>}
              </form>
            </Modal>
            <button>SEARCH</button>
            <h5>Current Users</h5>
            <div className="usermanagement-table-container">
              <div className="list add flex-col">
                <div className="list-table">
                  <div className="list-table-format title">
                    <b>Name</b>
                    <b>Username</b>
                    <b>User Role</b>
                    <b>Department</b>
                    <b>Email</b>
                    <b>Actions</b>
                  </div>
                  {users.map((user, index) => (
                    <div key={index} className="list-table-format">
                      <p>{user.name}</p>
                      <p>{user.username}</p>
                      <p>{user.role}</p>
                      <p>{user.department}</p>
                      <p>{user.email}</p>
                      <div className="Edit-Modal">
                        <button
                          type="button"
                          className="create-user-btn"
                          onClick={() => openEditModal(user)}
                        >
                          EDIT
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="juw-copyright">
            <p>© 2024, all rights reserved by Jinnah University for Women.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
